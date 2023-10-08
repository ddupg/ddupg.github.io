---
slug: 20220717-docusaurus-website-4
title: Docusaurus建站（4）- 自定义页面
date: 2022-07-17T11:27:25.140Z
author: Ddupg
author_title: 数据库工程师
author_url: https://ddupg.github.io
description: 请输入描述
tags: [Docusaurus, 前端]
---

Docusaurus允许创建独立页面，可以使用React或者Markdown来写。我刚好实现自己的导航页面。

<!-- truncate -->

## 新建自定义页面

我是打算用React组件来做，所以新建`src/pages/navigation/index.tsx`页面

```typescript showLineNumbers title=src/pages/navigation/index.tsx
import React from 'react';
import Layout from '@theme/Layout';

export default function Navigation() {
  return (
    <Layout title="导航">
      Hello
    </Layout>
  );
}
```

启动项目，之后在`http://localhost:3000/navigation`就可以看到自己的导航页面了。自定义的页面没有自带网站布局样式，所以从`@theme/Layout`中导入`Layout`组件，使用网站统一的导航栏、页脚等。

然后在`Layout`内编写自己的内容就好了。

## 新页面添加到导航栏

修改`docusaurus.config.js`，添加自定义页面的路由。

```js showLineNumbers title=docusaurus.config.js
...
const config = {
  ...
  themeConfig:
    ({
      navbar: {
        ...
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {type: 'doc', docId: 'intro', position: 'left', label: 'Docs'},
          // highlight-start
          {
            to: '/navigation',
            position: 'left',
            label: '导航',
          },
          // highlight-end
          {href: 'https://github.com/ddupg', label: 'GitHub', position: 'right'},
        ],
      },
      ...
    }),
};

```

再刷新页面，导航栏上就会出现自定义的页面了。

到这里，自定义页面的方法其实就讲完了，Docusaurus确实给了开发者很大的自由度。

## 导航页实现

:::info
下面再简单说一下我自己导航页的实现，不做详细介绍。业余前端，自用项目，仅为过程记录，不足以做参考，还是建议学习更专业的前端大佬实现。
:::

### 数据格式与数据文件

基于页面与数据分离的思路，定义自己的导航数据格式与数据文件，这样新增导航标签的时候，只需要添加数据就完了，不用再动页面。

:::tip
我们将导航页使用到的文件放到了`src/components/`目录下，而不是自定义页面的`src/pages/`。因为写在`src/pages/`的文件都会被渲染成页面。
:::

定义数据格式
```typescript title=src/components/Navigation/interface.tsx
export interface Website { // 导航标签使用的网站信息
  name: string;
  url: string;
  intro?: string;
}

export interface Classify { // 导航网站分类
  name: string;
  intro?: string;
  websites?: Website[];
}
```
编辑数据文件
```typescript title=src/components/Navigation/data.tsx
import { Classify } from "./interface";
const navigationData: Classify[] = [
  {
    name: "后端",
    intro: "前端开发相关资料网站",
    websites: [
      {
        name: "OpenJDK",
        url: "https://openjdk.org/",
        intro: "OpenJDK官网",
      },
      {
        name: "Maven官网",
        url: "https://maven.apache.org/",
        intro:  "Maven官网",
      },
    ],
  },
  {
    name: "前端",
    intro: "前端开发相关资料网站",
    websites: [
      {
        name: "Docusaurus",
        url: "https://docusaurus.io/zh-CN/",
        intro: "快速构建以内容为核心的最佳网站",
      },
      {
        name: "Ant Design",
        url: "https://ant.design/index-cn",
        intro: "React UI 组件库，主要用于研发企业级中后台产品。",
      },
    ],
  },
];
export default navigationData;

```


### 导航页实现

UI使用了MUI

```shell
$ yarn add @mui/material @emotion/react @emotion/styled
```

我还有个需求是将网站链接复制到剪切板，所以还引入了`copy-to-clipboard`
```shell
$ yarn add copy-to-clipboard
```

然后是页面实现
```typescript showLineNumbers title=src/pages/navigation/index.tsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import classifies from "@site/src/components/Navigation/data";
import { Website, Classify } from '@site/src/components/Navigation/interface';
import { Paper, Card, CardContent, CardActions, Typography, Box, Button, Alert } from '@mui/material';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import copy from 'copy-to-clipboard';

export default function Navigation() {
  return (
    <Layout title="导航">
      <NavigationPage classifies={classifies} />
    </Layout>
  );
}

const NavigationPage: React.FC<{classifies: Classify[]}> = ({classifies}) => {
  return <Paper elevation={0} sx={{ paddingTop: 3 }}>
    {
      classifies.map((classify) => {
        return <div>
          <SubTitle title={classify.name} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1 }}>
            {
              classify.websites.map((website) => {
                return <WebsiteCard website={website} />
              })
            }
          </Box>
        </div>
      })
    }
  </Paper>
}

const SubTitle: React.FC<{title: string}> = ({title}) => {
  return <Typography variant="h5" sx={{p: 2, paddingLeft: 4 }}>
      {title}
    </Typography>
}

const WebsiteCard: React.FC<{website: Website}> = ({website}) => {
  const { name, intro, url } = website;

  console.log(website)
  const [showCopy, setShowCopy] = useState(false)
  const onCopy = () => {
    copy(url)
    setShowCopy(true)
  };

  return (
    <Box sx={{ p: 1, m: 1, }}>
      <Card
        variant='outlined'
        sx={{ width: 300, height: 120 }}
      >
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap={true} paragraph={true} >
            {intro}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: 'flex-end', paddingTop: 0, paddingBottom: 0 }}>
          <Button size="small" color="primary" onClick={onCopy}>
            Copy
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(url)}>
            GO
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showCopy}
        autoHideDuration={1500}
        onClose={() => setShowCopy(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          复制成功
        </Alert>
      </Snackbar>
    </Box>
  );
};
```

### 题外话

我之前用Ant Design比较多，最初还试过Ant Design和tailwind CSS做过一版，Ant Design的UI用起来确实方便快捷许多，也够漂亮，只是一些过于自定义的样式可能不太好做。另外在Docusaurus里使用Antd + tailwind，还会影响Docusaurus项目的样式，标题栏/字体大小和颜色都变了，作为前端新手也找不到原因，所以最终改用了MUI的实现。

目前的导航页实现比较简单，基本满足个人使用。之后网站多了也许会考虑做个侧边栏。

## 参考

- [Docusaurus创建页面](https://docusaurus.io/zh-CN/docs/creating-pages)
- [MUI](https://mui.com/zh/)
- [Search-Next，导航页实现参考开源项目](https://github.com/virzs/Search-Next)