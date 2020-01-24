---
title: 开发环境常用配置
date: 2020-01-04 14:39:54
loyout: page
author: Ddupg
commonts: false
---

## 机器环境

### Ubuntu Ctrl+Alt+left/right-arrow 快捷键失效

`Ctrl+Alt+left/right-arrow`快捷键被`org.gnome.desktop.wm.keybindings`占用
```
gsettings get org.gnome.desktop.wm.keybindings switch-to-workspace-left
gsettings get org.gnome.desktop.wm.keybindings switch-to-workspace-right
```
删除`org.gnome.desktop.wm.keybindings`的占用
```
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left "[]"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right "[]"
```

### 在 Ubuntu 上安装 protobuf2.5

{% gist 08118b42376eab110f811c7f4522547e %}

## Python环境

### Linux下非root权限安装pip
参考[原文链接](https://blog.csdn.net/tanzuozhev/article/details/77585342)

目前只试用过python2，python3没试过

```
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py --user  # 一定记得使用 –user 参数否则你还是没有权限
```
安装完成后会在~/目录下生成 .local 文件夹，里面有bin和lib， bin 里就有我们需要的pip、easy_install
如果想直接使用，需要加入环境变量。
```
export PATH=~/.local/bin:$PATH
```
安装依赖包
```
pip install --user（包名称）
```

### 升级pip后出现ImportError: cannot import name main

在Ubuntu环境升级pip，执行如下命令
```
pip install --upgrade pip
```
但`install`其他依赖包时，出现 `ImportError: cannot import name main` 错误

**解决方法**
直接修改 `pip` 文件，一般时在 `/usr/bin/pip`

把下面代码
```
from pip import main
if __name__ == '__main__':
    sys.exit(main())
```
换成
```
from pip import __main__
if __name__ == '__main__':
    sys.exit(__main__._main())
```

[参考原文](https://blog.csdn.net/accumulate_zhang/article/details/80269313)

## Java环境

### jdk11开始没有jre解决办法

两种解决办法都可以

#### 方法1：JDK里其实已经自带jre
jdk10开始jdk不再有单独的jre目录，jdk自带jre，直接改环境变量 `$JRE_HOME`
```
export JRE_HOME=${JAVA_HOME}
```

#### 方法2：生成jre
1. 下载jdk之后，在jdk目录下执行
**linux**
```
bin/jlink --module-path jmods --add-modules java.desktop --output jre
```
**Windows**
```
bin\jlink.exe --module-path jmods --add-modules java.desktop --output jre
```
2. 环境变量
```
export JAVA_HOME={path to jdk}
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```
