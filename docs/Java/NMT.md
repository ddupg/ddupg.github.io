## NMT


### 资料

- [Native Memory Tracking 详解（1）:基础介绍](https://heapdump.cn/article/4644018)
- [Native Memory Tracking 详解（2）:追踪区域分析(一)](https://heapdump.cn/article/4690198)
- [Native Memory Tracking 详解（3）:追踪区域分析(二)](https://heapdump.cn/article/4813403)
- [Native Memory Tracking 详解（4）:使用 NMT 协助排查内存问题案例](https://heapdump.cn/article/4926566)

### 操作

```
-XX:NativeMemoryTracking=detail
-XX:+UnlockDiagnosticVMOptions
-XX:+PrintNMTStatistics
```
- 第1个是开启NMT
- 2、3个是在JVM退出时获取内存使用情况数据

**查看当前内存使用**
```
jcmd <pid> VM.native_memory detail
```

**记录基线，之后用于对比**
```
# 基线
jcmd <pid> VM.native_memory baseline
# 与基线对比
jcmd <pid> VM.native_memory detail.diff
```