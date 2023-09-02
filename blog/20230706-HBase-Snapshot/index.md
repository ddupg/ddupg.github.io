---
slug: 20230706-hbase-snapshot
title: HBase Snapshot基本原理
date: 2023-07-06T14:20:10.791Z
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
description: HBase Snapshot基本原理
tags: [数据库, HBase, Snapshot]
---

## 前言

成熟的数据库都有备份与恢复的功能，在意外或故障时还能尽量恢复数据，同时还能实现数据迁移。接下来就是介绍HBase的备份与恢复功能——Snapshot。

出于学习目的，代码参考社区master分支，最接近的release版本应该是3.0.0-alpha-4，目前肯定是没有公司在线上使用的。也许实现细节上会有些区别，但核心逻辑基本一致。

HBase Snapshot具备以下能力：

- 数据备份与恢复
- 利用ExportSnapshot工具实现数据迁移，可以迁移至HDFS或各类主流对象存储
- 使用MR/Spark直接扫描Snapshot，进行离线分析，避免对实时读写的影响

<!-- truncate -->

## Snapshot数据组织

HBase基于LSM Tree实现，数据落盘形成HFile之后就不会再改动，所以实现Snapshot的基本思想就是生成某一时刻所有HFile的引用，而不需要做数据拷贝，所以足够轻量。

### 文件系统上的snapshot

Snapshot在HDFS上的数据文件：

```shell
./hdfs dfs -ls -R {hbase-root-path}/.hbase-snapshot/{snapshot-name}
-rw-r-x---+  3 hbase supergroup        211 2023-07-04 17:13 {hbase-root-path}/.hbase-snapshot/{snapshot-name}/.snapshotinfo
-rw-r-x---+  3 hbase supergroup        591 2023-07-04 17:13 {hbase-root-path}/.hbase-snapshot/{snapshot-name}/data.manifest
```

即只有两个文件：

| 文件              | 作用                                   |
| --------------- | ------------------------------------ |
| `.snapshotinfo` | 记录snapshot的基本信息，包含snapshot名、表名、创建时间等 |
| `data.manifest` | 记录表schame和snapshot引用的所有HFile         |

真实的数据文件都是通过`data.manifest`中记录的文件引用链接到的。

### snapshot数据格式

然后来看`data.manifest`是如何引用HFile的：

```protobuf
message SnapshotDataManifest {  
  required TableSchema table_schema = 1;  // 表schema，用snapshot恢复表时有用
  repeated SnapshotRegionManifest region_manifests = 2;  // 引用的region信息
}

message SnapshotRegionManifest {
  optional int32 version = 1;

  required RegionInfo region_info = 2; // region基本信息，startkey等
  repeated FamilyFiles family_files = 3; // 引用的列簇

  message StoreFile {
    required string name = 1; // HFile文件名
    optional Reference reference = 2; // 如果HFile是split产生的ref文件，则有这个属性
    optional uint64 file_size = 3;  // 文件大小
  }

  message FamilyFiles {
    required bytes family_name = 1;  // 列簇名
    repeated StoreFile store_files = 2;  // 引用的文件
  }
}
```

实际也是按照Snapshot-Region-CF-HFile的层级表示，每层再记录一些基本信息。

### HFile文件引用

HFile在HDFS上的路径为`{hbase-root-path}/data/{namespace-name}/{table-name}/{region-name}/{CF}/{hfile-name}`

而通过`clone_snapshot`或`restore_snapshot`将snapshot恢复成表时，也不会涉及任何数据文件的拷贝，即snapshot引用的文件并不会拷贝为普通的HFile，而是产生一个LinkFile文件。格式为：`{hbase-root-path}/data/{namespace-name}/{table-name}/{region-name}/{CF}/{原表名}={原region name}-{原hfile name}`

后续在读HFile的时候，根据文件名发现是link文件，根据文件名就能找到真正的HFile文件。

## Snapshot执行过程

在HBase 2.x版本Snapshot的实现中，仍然使用ZK来协调Master和RegionServer的执行。3.0版本已经改用ProcedureV2框架来实现了，后面以3.0来介绍，实现虽然不同，但逻辑一致。

执行snapshot的表有两种状态，enabled和disabled。enabled的表可以正常读写，region由RS持有，做snapshot可能需要flush memstore，所以过程中有RS参与。而disabled的表无法读写，没有RS持有region，做snapshot则全由master执行。后面按照enabled的表来介绍。

过滤掉处理细节，方便理解执行过程。

1. master建临时目录，默认是`{hbase-root-path}/.hbase-snapshot/.tmp/{snapshot-name}`。

> HBase中很多逻辑的原子性是通过HDFS的rename实现的，即先写到临时目录，完成后rename到正式目录。这里也是这个逻辑，后续所有操作都是在这个临时目录执行。

2. master写`.snapshotinfo`文件，记录snapshot基本信息
3. master通过RPC通知该表region所在的所有的RS去执行region的snapshot工作
4. RS执行单个region的snapshot
   1. 如果是Flush类型的snapshot，则Flush Memstore
   2. 然后遍历所有HFile生成SnapshotRegionManifest，存储到`{hbase-root-path}/.hbase-snapshot/.tmp/{snapshot-name}\region-manifest.{region-name}`
5. master做所有split的父region的snapshot，执行逻辑与RS一样，只是不用考虑flush。

> a. split后的子region仍然存在对父region文件的引用，所以必须也将父region记录到snapshot中。
> b. 已经split的父region不再由RS持有，所以是由master直接从HDFS上读其HFile生成region manifest。

6. master处理mob region，暂时把它看作一个普通region就好
7. master从HDFS上读出所有region的manifest数据，即前缀是`region-manifest.`的文件，构造完整的snapshot manifest写入HDFS，然后删掉region的manifest文件。
8. 校验生成的snapshot是否正确。检查项包括：
   - table信息
   - region数量
   - region信息
   - HFile信息，ref

> 默认是master执行。但如果表的region数太多，默认超过10000，Master就会通知各自RS去校验region，而不是自己校验了。参数是`hbase.snapshot.remote.verify.threshold`
> 如果RS校验发现有异常，会在snapshot临时目录下生成一个`_CORRUPTED`空文件，master之后会检查。

9. master将snapshot从临时目录rename到正式目录，即`{hbase-root-path}/.hbase-snapshot/{snapshot-name}`

## Snapshot恢复

恢复snapshot有两种命令`clone_snapshot`和`restore_snapshot`，clone是用snapshot建一个新表，restore是对一个已存在的表恢复指定snapshot，恢复过程会替换掉原有数据，比较危险，我们线上从来没用这个命令，都是使用`clone_snapshot`

因为`restore_snapshot`是在已有表上执行，相比较`clone_snapshot`，会涉及原有表region和HFile的增删，即多余的region/HFile要删掉（挪到archive目录），缺少的region/HFIle补充目录和引用文件。

后面按`clone_snapshot`来介绍。

1. 做一些前置工作：检查表是否已经存在，检查snapshot的TTL是否已经过期，执行CP
2. 在HDFS上创建表目录，并写入表schema
3. 用snapshot manifest的信息，建立region目录，以及HFile引用文件
   1. 如果是restore，还要考虑增删改region及HFile

> 此时表目录下的HFile都是引用文件，没有发生数据拷贝。
> 之后会随着compaction的执行，转化为正常的HFile

4. 将region信息记录到meta表
5. 将table置为 ENABLING 状态。更新meta表中table状态，以及master内存中table状态。
6. 将split的父region记录到AM内存中。
7. assign 正常 region。

> 这一步master由TRSP实现，master会将region分配给RS，RS收到master的RPC请求后，会open对应的region。

8. 将表状态置为enabled。更新meta表中table状态，以及master内存中table状态。
9. 如果允许，也恢复表的ACL

> 在做snapshot的时候，snapshot中会记录表的ACL信息，在clone_snapshot或restore_snapshot时，可以选择恢复这些ACL，以保证原来用户可以正常访问。
>
> a. 如果是走admin接口，则指定`restoreAcl`为true；
> b. 如果是shell，可以这样指定
> `clone_snapshot 'snapshotName', 'namespace:tableName', {RESTORE_ACL=>true}`

10. 收尾工作：执行CP，记录metrics

## 总结

1. HBase的snapshot是较轻量的行为，不会涉及数据拷贝，只需要维护HFile引用
2. 在执行snapshot和恢复snapshot过程中，仍然有些注意点，都是与HBase其他功能相关
   1. split父region需要维护
   2. restore snapshot需要维护原表的region和HFile
   3. 表的ACL记录需要存储和恢复
