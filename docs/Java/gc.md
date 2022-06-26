## GC

### Full GC前后打dump
```
-XX:+HeapDumpBeforeFullGC
-XX:+HeapDumpAfterFullGC
```
尽量只加第一个，大堆应用打dump时间会很长。50G的堆打一次有100s。