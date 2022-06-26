## Node

### 安装

[参考](https://kylehe.me/blog/2018/03/27/how-to-install-nodejs-on-macos.html)

安装node和npm
```
brew install node
```

检查安装情况
```
node -v
npm -v
```
修改全局 node_modules 文件夹的位置，避免日后出现权限问题
```
mkdir ~/.npm-global
```

添加`PATH`环境变量
```
export PATH=$HOME/.npm-global/bin:$PATH
```