## 参数

### Table

#### TableDesc

##### MAX_FILESIZE

`MAX_FILESIZE` 达到之后会触发 **split**。单位：B

```shell
create 'tablename', 'CF', MAX_FILESIZE => 5368709120
```

```shell
alter 'tablename', MAX_FILESIZE => 5368709120
```

```
alter 'tablename', METHOD => 'table_att_unset', NAME => 'MAX_FILESIZE'
```

#### Conf

### Region

### HFile

### Compaction

### Replication