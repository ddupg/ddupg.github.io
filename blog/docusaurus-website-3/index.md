---
slug: docusaurus-website-3
title: Docusaurus建站（3）- hygen生成页面模版
date: 2022-06-26T12:00
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
description: 请输入描述
tags: [Docusaurus, React, 前端]
oid: oid
---

写博客每次都要写一堆matter信息，贼麻烦，用hygen工具生成。

<!-- truncate -->

## 安装hygen

```bash
$ brew tap jondot/tap
$ brew install hygen
```

```bash
$ hygen init self
```

添加自己的模版

```
$ hygen generator new blog
```
