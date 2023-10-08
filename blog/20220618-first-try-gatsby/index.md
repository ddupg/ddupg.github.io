---
slug: 20220618-first-try-gatsby
title: 初尝Gatsby
date: 2022-06-18T08:11
author: Ddupg
author_url: https://ddupg.github.io
tags: [Gatsby, React, 前端]
---

第一次体验Gatsby项目，创建demo项目就碰到了不少问题。
笔者用的是MacOS环境。

<!-- truncate -->

## sharp问题

```
❯ Installing Gatsby...

npm ERR! code 1
npm ERR! path /Users/ddupg/github/gatsby-demo/node_modules/sharp
npm ERR! command failed
npm ERR! command sh -c (node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)
npm ERR! sharp: Downloading https://github.com/lovell/sharp-libvips/releases/download/v8.12.2/libvips-8.12.2-darwin-x64.tar.br
npm ERR! sharp: Please see https://sharp.pixelplumbing.com/install for required dependencies
npm ERR! sharp: Installation error: connect ETIMEDOUT 185.199.111.133:443

npm ERR! A complete log of this run can be found in:

 ERROR

Command failed with exit code 1: npm install --loglevel error --color always
```
 
参考[解决gatsby安装失败sharp: Command failed](https://juejin.cn/post/6844903856464199687)
这是国内连接github网络不稳，依赖资源下载不了。
从异常中能看出依需要下载的具体包，我这里就是**libvips-8.12.2-darwin-x64.tar.br**，手动从[github](https://github.com/lovell/sharp-libvips/releases)下载对应版本，放到`~/.npm/_libvips`
目录，再尝试就好了。

## vips问题

```
❯ Installing Gatsby...

npm ERR! code 1
npm ERR! path /Users/ddupg/github/my-gatsby-site/node_modules/sharp
npm ERR! command failed
npm ERR! command sh -c (node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)
npm ERR! sharp: Using cached /Users/ddupg/.npm/_libvips/libvips-8.12.2-darwin-x64.tar.br
npm ERR! sharp: Integrity check passed for darwin-x64
npm ERR!   TOUCH Release/obj.target/libvips-cpp.stamp
npm ERR!   CC(target) Release/obj.target/nothing/node_modules/node-addon-api/nothing.o
npm ERR!   LIBTOOL-STATIC Release/nothing.a
npm ERR!   CXX(target) Release/obj.target/sharp-darwin-x64/src/common.o
npm ERR! ../src/common.cc:24:10: fatal error: 'vips/vips8' file not found
npm ERR! #include <vips/vips8>
npm ERR!          ^~~~~~~~~~~~
npm ERR! 1 error generated.
npm ERR! make: *** [Release/obj.target/sharp-darwin-x64/src/common.o] Error 1
npm ERR! gyp ERR! build error
npm ERR! gyp ERR! stack Error: `make` failed with exit code: 2
npm ERR! gyp ERR! stack     at ChildProcess.onExit (/Users/ddupg/.node_global/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
npm ERR! gyp ERR! stack     at ChildProcess.emit (node:events:526:28)
npm ERR! gyp ERR! stack     at Process.ChildProcess._handle.onexit (node:internal/child_process:291:12)
npm ERR! gyp ERR! System Darwin 19.3.0
npm ERR! gyp ERR! command "/usr/local/bin/node" "/Users/ddupg/.node_global/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
npm ERR! gyp ERR! cwd /Users/ddupg/github/my-gatsby-site/node_modules/sharp
npm ERR! gyp ERR! node -v v16.14.2
npm ERR! gyp ERR! node-gyp -v v9.0.0
npm ERR! gyp ERR! not ok

npm ERR! A complete log of this run can be found in:

 ERROR

Command failed with exit code 1: npm install --loglevel error --color always
```

参考[vips/vips8 file not found #include <vips/vips8> in Ionic cordova in IOS](https://stackoverflow.com/questions/66363572/vips-vips8-file-not-found-include-vips-vips8-in-ionic-cordova-in-ios)
手动安装vips
```
brew install vips
```

## 其他
国内环境brew下载贼慢，参考[brew换源](https://zhuanlan.zhihu.com/p/324691527)
