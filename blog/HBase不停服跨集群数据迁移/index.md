---
slug: HBase不停服跨集群数据迁移
title: HBase不停服跨集群数据迁移
date: 2020-03-14T15:42
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
tags: [HBase]
---

最近接到两个用户提的JIRA，都是目前数据只存在了一个srv集群，需要将数据备份prc集群做数据备份或者离线计算，同时两集群之间还要做数据实时同步。所以在这里记录下操作过程并介绍下原因。

<!-- truncate -->


集群之间增量数据同步自然是利用replication，单向同步配置一个peer，双向同步配置两个peer就好。

存量数据使用snapshot同步。

## 操作步骤

**0. 准备工作**

在prc集群新建namespace
```
create_namespace 'ns'
```

**1. 新建srv到prc集群的peer**

**注意peer要disable掉**

如果之前没有srv到prc集群的peer，直接新建peer
```
// 复制namespace
add_peer '1', CLUSTER_KEY => "zk1,zk2,zk3:11000:/hbase/prc", STATE => "DISABLED", NAMESPACES => ["ns"]
// 复制table
add_peer '1', CLUSTER_KEY => "zk1,zk2,zk3:11000:/hbase/prc", STATE => "DISABLED", TABLE_CFS => { "ns:table1" => [] }
```
如果之前已经有srv到prc集群的peer，在peer中加入要操作的namespace
```
disable_peer '1'
// 新加namespace
append_peer_namespaces '1', ["ns"]
// 新加table
append_peer_tableCFs '1', { "ns:table1" => []}
```

**2. 打snapshot**

将要同步的表打snapshot，如果复制整个namespace，要一个一个打

```
snapshot 'ns:table1', 'ns_table1_snapshot'
```

**3. 将snapshot复制到prc集群**

使用`ExportSnapshot`将snapshot从srv复制到prc集群

```
./bin/hbase --config /path/to/conf org.apache.hadoop.hbase.snapshot.ExportSnapshot -copy-from hdfs://srv/hbase/srv -copy-to hdfs://prc/hbase/prc -snapshot ns_table1_snapshot -mappers 100 -bandwidth 512 -overwrite >> copy.log 2>&1 &
```

**4. 在prc集群使用snapshot生成表**

```
clone_snapshot 'ns_table1_snapshot', 'ns:table1'
```

**5. 开启peer**

将srv到prc集群的peer打开

```
enable_peer '1'
```

**6. 其他**

在peer集群加权限
```
grant 'kerberos_name', 'RW', '@ns1'
```

如果需要俩集群双向同步，在增加prc到srv集群的peer
```
add_peer '2', CLUSTER_KEY => "zk1,zk2,zk3:11000:/hbase/srv", STATE => "ENABLED", NAMESPACES => ["ns"]
```

## 操作原因

数据复制自然不能丢数据，也就是要保证snapshot的存量数据和replication的增量数据之间不能有间隙，但其实可以有重叠。

我们先新建replication peer，将现有的WAL和之后再生成的WAL都加进该peer的复制队列中，disable掉peer的原因则是prc集群还没有新建表，replication开始复制则会出现`Table xxx does not exist`的报错。这一步如果是修改的原有peer，则会导致replication延迟增加。

之后再打snapshot便不用担心数据有丢失了，此时replication的数据与snapshot的数据已经有重叠了。

最后总结一句，一定要先新建replication peer，然后在打snapshot。