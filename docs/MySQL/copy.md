## 拷贝数据

### 只拷贝表结构

```sql
CREATE TABLE table4 LIKE table1
```

### 拷贝数据到已有表

拷贝全部数据
```sql
INSERT INTO table2 SELECT * FROM table1 
```
拷贝第n条
```sql
INSERT INTO table2 SELECT * FROM table1  WHERE id=5
```
拷贝指定字段
```sql
INSERT INTO table2 ( name , price ) SELECT name , price  FROM table1  WHERE id=5
```

### 创建表同时拷贝数据

创建表3， 同时拷贝表1的数据和结构到表3

**不会复制表的主键、自增ID等信息**
```sql
CREATE TABLE table3 SELECT * FROM table1
```