---
slug: Shaded-Thirdparty-Dependencies
title: Maven项目以Shaded形式引入第三方依赖库
date: 2020-01-13T17:46
author: Ddupg
author_url: https://ddupg.github.io
tags: [Java]
---

最近有用户反馈，他的项目中同时使用了HBase和一个RPC框架，HBase依赖2.5.0的protobuf，RPC框架依赖3.7的protobuf，导致他的项目编译都失败。0.98版本的HBase还是使用的原生的protobuf-java依赖，2.0版本才使用了shaded形式的protobuf，所以我们决定自己提供以shaded形式引入protobuf的HBase Client。

相信这个问题不只是出现在HBase中，或者出现在与protobuf相关的项目中，其实当我们项目间接依赖了像protobuf、netty等大版本之间互不兼容的框架，甚至guava这种某些接口不兼容的框架，都有可能出现类似的问题。这里也是提供一个可以参考的解决方法。

方法上，参考了HBase 2.0之后对第三方依赖的处理，简单来说就是将常用第三方依赖的代码负责一份，修改所有类的package，发布一个自己的artifact到仓库中。这样肯定就不会再依赖冲突了。

而protobuf的依赖处理起来则比较麻烦一点，除了修改原生protobuf类的package之外，还需要处理proto生成的Java文件。所以本文就以protobuf为例，提供第三方依赖冲突的解决方案。因为都是使用Maven插件实现，所以也只对Maven项目有用，相信其他项目也有类似的解决办法。

本文相关代码都已放在[Github](https://github.com/ddupg/demos/tree/master/shaded)

<!-- truncate -->

## 生成shaded依赖包

可以直接参考[pom.xml的代码](https://github.com/ddupg/demos/blob/master/shaded/pom.xml)，其中主要使用到的插件是以下几个：
- maven-dependency-plugin 将protobuf依赖包下载下来并解包放在src/main/java目录下，变成自己项目的源码
- maven-shade-plugin 在打包阶段，修改protobuf类的package名。例如HBase项目是将`com.google.protobuf`改为`org.apache.hbase.thirdparty.com.google.protobuf`，我的代码中是将`com.google.protobuf`改为`ddupg.demo.thirdparty.com.google.protobuf`
- maven-clean-plugin 在操作之前，清理下之前生成的文件

修改好pom文件之后，直接mvn clean deploy发布到仓库就好了，中央仓库和私有仓库都是一样的。

可以解压target目录下打好的包，就可以看到class文件的package路径已经变化了。因为是在package阶段才修改的package名，所以直接看target/generated-sources下的class文件其实是不变的。

普通的第三方依赖项目使用这一步其实就可以解决了。

## 生成proto文件

解决掉了protobuf的源文件，下一步就是处理proto生成的文件了。

因为需要依赖上一步生成的shaded包，而我又没有将它deploy到中央仓库，也没有自己的私人仓库，所以便使用了[HBase项目的第三方依赖](https://github.com/apache/hbase-thirdparty)，道理都一样，替换一下dependency就好了。

可以直接参考[pom.xml的代码](https://github.com/ddupg/demos/blob/master/shaded/shaded-protocol/pom.xml).

这一步主要使用的插件：
- protobuf-maven-plugin 生成proto文件，这一步生成的文件依旧使用的是原生protobuf。
- com.google.code.maven-replacer-plugin:replacer 替换源代码，将protobuf原生的package路径`com.google.protobuf`改成第一步中修改后的package名。因为我在这里使用的HBase的第三方依赖项目，所以就是将`com.google.protobuf`改为`org.apache.hbase.thirdparty.com.google.protobuf`

## 参考

- [Maven Protocol Buffers Plugin](https://www.xolstice.org/protobuf-maven-plugin/)
- [Apache Maven Shade Plugin](https://maven.apache.org/plugins/maven-shade-plugin/)
- [maven-replacer-plugin](https://code.google.com/archive/p/maven-replacer-plugin/)