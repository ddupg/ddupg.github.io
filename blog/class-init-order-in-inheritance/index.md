---
slug: class-init-order-in-inheritance
title: 「记」子类复写父类方法与类初始化顺序引发的bug
date: 2019-09-30T10:00
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
description: 请输入描述
tags: [Java, Bug]
---

<!-- truncate -->


## bug现象
bug出现的条件：
- 继承关系
- 子类属性有默认的初始化
- 子类复写了父类的钩子方法
- 钩子方法在父类构造方法中调用

可以看下以下的示例代码

```
public class Father {

    public Father() {
        init();
    }

    protected void init() {
    }
}
```

```
public class Child extends Father {

    int a = 0;

    public Child() {
        super();
    }

    @Override
    protected void init() {
        super.init();
        a = 1;
    }
}
```

```
import org.junit.Test;

import static org.junit.Assert.*;

public class ChildTest {

    @Test
    public void testConstructor() {
        Child child = new Child();
        assertEquals(0, child.a);
    }
}
```

## 类加载过程
顺便复习一下类加载过程，类加载过程分为加载、链接、初始化三大步骤

加载：查找并加载类的二进制字节流数据，并且据此创建类，即代表这个类的Class对象。

链接：将创建成的类合并至Java虚拟机中，使之能够执行的过程。还分验证、准备、解析三个阶段。
- 验证：确保被加载类的正确性
- 准备：为类的静态变量分配内存，并将其初始化为默认值
- 解析：把类中的符号引用转换为直接引用

初始化：标记为常量值的字段赋值，以及执行方法。初始化的时机：
1. 虚拟机启动时，初始化用户指定的主类
2. 当遇到以新建目标类实例的new指令时，初始化new指定的目标类
3. 当遇到调用静态方法的指令字段是，初始化该静态方法所在的类
4. 当遇到访问静态字段的指令时，初始化该静态字段所在的类
5. 子类的初始化会触发父类的初始化
6. 如果一个接口定义了default方法，那么直接或间接实现该接口的类初始化，会触
7. 该接口的初始化
8. 使用反射API对某个类进行反射调用时，初始化这个类
9. 当初次调用MethodHandle实例时，初始化该MethodHandle指向的方法所在的类

## 类初始化顺序

1. 按定义顺序初始化父类的static成员，在准备阶段完成
2. 按定义顺序初始化子类的static成员，在准备阶段完成
3. 按定义顺序执行父类的普通成员初始化
4. 执行父类的构造函数
5. 按定义顺序执行子类的指定初始化
6. 执行子类的构造函数

## 回头解bug

现在再回头看下bug代码就知道是什么原因：父类执行构造方法时调用了会修改子类成员`a`的钩子方法，然后子类才初始化了自己的成员，覆盖了钩子方法里对`a`的修改。

解决方法也简单，对`a`不加默认值就好了。