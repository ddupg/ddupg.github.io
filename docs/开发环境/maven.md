
[下载](https://archive.apache.org/dist/maven/maven-3/)

## 常用命令

### mvn test 测试指定类或方法
如果有多个类或方法，用`,`隔开
```
mvn test -D test=<ClassName>
mvn test -D test=<ClassName>#<MethodName>
```

### mvn test失败重试，发现flaky UT
用`surefire.rerunFailingTestsCount`参数控制失败后重试次数：
```
mvn -Dsurefire.rerunFailingTestsCount=2 test
```

## 常用参数

| 参数 | 作用 |
| ---- | ---- |
| `--fail-at-end` | 在构建过程中，当某个模块出现错误时，其他不受影响的模块的构建可以进行。错误会在构建完成之后才出现。 |
| `--no-transfer-progress` | 在构建过程中，不显示下载和上传的进度。这个参数在 Maven 3.6.1 才添加。 |

## 插件

### maven-assembly-plugin 将依赖都打进jar包，生成一个可执行jar

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <!-- 在这里定义你的入口类 -->
    <main.class>Main</main.class>
</properties>
<build>
    <plugins>
        <plugin>
            <artifactId>maven-assembly-plugin</artifactId>
            <configuration>
                <archive>
                    <manifest>
                        <!-- 你也可以在这里自己写MainClass -->
                        <mainClass>${main.class}</mainClass>
                    </manifest>
                </archive>
                <descriptorRefs>
                    <descriptorRef>jar-with-dependencies</descriptorRef>
                </descriptorRefs>
            </configuration>
            <executions>
                <execution>
                    <id>make-assembly</id>
                    <phase>package</phase>
                    <goals>
                        <goal>assembly</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <source>8</source>
                <target>8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

在执行jar包时：
如果插件中指定了mainClass
```
java -jar <my.jar>
```
如果插件中没指定mainClass
```
java -cp <my.jar> <main class>
```