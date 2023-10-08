---
slug: 20220626-docusaurus-website-3
title: Docusaurus建站（3）- hygen生成页面模版
date: 2022-06-26T12:00
author: Ddupg
author_url: https://ddupg.github.io
tags: [Docusaurus, Hygen, 前端]
oid: oid
---

写博客每次都要写一堆matter信息，贼麻烦，用hygen工具生成。

<!-- truncate -->

## hygen使用

### MacOS安装

```bash
$ brew tap jondot/tap
$ brew install hygen
```

其他系统或安装方式参考官网。

### 初始化项目

```bash
$ cd your-project
$ hygen init self
```

### 添加自己的博客模版

```
$ hygen generator new blog
```

会产生一个`_templates/blog/new/hello.ejs.t`文件，把`hello.ejs.t`改名成`index.ejs.t`

```yml title="_templates/blog/new/index.ejs.t"
---
to: blog/<%= name %>/index.md
---
---
slug: 
title: 
date: <%= h.getBlogDate() %>
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
tags: [数据库, 后端]
---

<!-- truncate -->
```

- 每篇博客会生成一个单独的目录。个人习惯，方便在同目录下放图片等其他资源。
- slug和title记得填，不然也跑不起来。
- 其他信息可以根据自己情况修改
- `h.getBlogDate()`是自定义的一个工具方法，定义在根目录的`.hygen.js`。

### .hygen.js

在项目根目录下，放一个`.hygen.js`文件，可以放一些自定义的工具方法，比如模版中的日期生成的方法就放在这里

```js title=".hygen.js"
module.exports = {
  helpers: {
      getBlogDate: () => {
          return new Date().toISOString();
      }
  }
}
```

### 生成

```
$ hygen blog new <blog name>
```
执行之后，就会生成新的博客了，文件放在`blog/<blog name>/index.md`.

## 参考

- [Hygen](https://www.hygen.io/)
