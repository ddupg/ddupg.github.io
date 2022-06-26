## PowerMock

[Github](https://github.com/powermock/powermock)

Maven配置

```xml
<properties>
    <powermock.version>2.0.2</powermock.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.powermock</groupId>
        <artifactId>powermock-module-junit4</artifactId>
        <version>${powermock.version}</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.powermock</groupId>
        <artifactId>powermock-core</artifactId>
        <version>${powermock.version}</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.powermock</groupId>
        <artifactId>powermock-api-mockito2</artifactId>
        <version>${powermock.version}</version>
        <scope>test</scope>
    </dependency>

</dependencies>
```

mock静态类
```java
import static org.powermock.api.mockito.PowerMockito.mockStatic;
import static org.powermock.api.mockito.PowerMockito.when;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.net.ssl.*", "javax.crypto.*"})
@PrepareForTest({...})
public class SomethingTest {

  @BeforeClass
  public static void init() {
    mockStatic(...); 
  }
}
```