"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"docusaurus-website-2","metadata":{"permalink":"/blog/docusaurus-website-2","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/docusaurus-website-2/index.md","source":"@site/blog/docusaurus-website-2/index.md","title":"Docusaurus\u5efa\u7ad9\uff082\uff09","description":"\u8bf7\u8f93\u5165\u63cf\u8ff0","date":"2022-06-26T11:00:00.000Z","formattedDate":"2022\u5e746\u670826\u65e5","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"React","permalink":"/blog/tags/react"},{"label":"\u524d\u7aef","permalink":"/blog/tags/\u524d\u7aef"}],"readingTime":0.28,"truncated":true,"authors":[{"name":"Ddupg","title":"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08","url":"https://ddupg.github.io"}],"frontMatter":{"slug":"docusaurus-website-2","title":"Docusaurus\u5efa\u7ad9\uff082\uff09","date":"2022-06-26T11:00","author":"Ddupg","author_title":"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08","author_url":"https://ddupg.github.io","description":"\u8bf7\u8f93\u5165\u63cf\u8ff0","tags":["Docusaurus","React","\u524d\u7aef"],"oid":"oid"},"nextItem":{"title":"Docusaurus\u5efa\u7ad9\uff081\uff09","permalink":"/blog/docusaurus-website-1"}},"content":"\u5199\u535a\u5ba2\u6bcf\u6b21\u90fd\u8981\u5199\u4e00\u5806matter\u4fe1\u606f\uff0c\u8d3c\u9ebb\u70e6\uff0c\u7528hygen\u5de5\u5177\u751f\u6210\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u5b89\u88c5hygen\\n\\n```bash\\n$ brew tap jondot/tap\\n$ brew install hygen\\n```\\n\\n```bash\\n$ hygen init self\\n```\\n\\n\u6dfb\u52a0\u81ea\u5df1\u7684\u6a21\u7248\\n\\n```\\n$ hygen generator new blog\\n```"},{"id":"docusaurus-website-1","metadata":{"permalink":"/blog/docusaurus-website-1","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/docusaurus-website-1/index.md","source":"@site/blog/docusaurus-website-1/index.md","title":"Docusaurus\u5efa\u7ad9\uff081\uff09","description":"\u8bf7\u8f93\u5165\u63cf\u8ff0","date":"2022-06-26T10:00:00.000Z","formattedDate":"2022\u5e746\u670826\u65e5","tags":[{"label":"Docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"React","permalink":"/blog/tags/react"},{"label":"\u524d\u7aef","permalink":"/blog/tags/\u524d\u7aef"}],"readingTime":1.45,"truncated":true,"authors":[{"name":"Ddupg","title":"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08","url":"https://ddupg.github.io"}],"frontMatter":{"slug":"docusaurus-website-1","title":"Docusaurus\u5efa\u7ad9\uff081\uff09","date":"2022-06-26T10:00","author":"Ddupg","author_title":"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08","author_url":"https://ddupg.github.io","description":"\u8bf7\u8f93\u5165\u63cf\u8ff0","tags":["Docusaurus","React","\u524d\u7aef"],"oid":"oid"},"prevItem":{"title":"Docusaurus\u5efa\u7ad9\uff082\uff09","permalink":"/blog/docusaurus-website-2"}},"content":"\u672c\u60f3\u91cd\u505a\u81ea\u5df1\u7684\u535a\u5ba2\u548c\u6587\u6863\uff0c\u672c\u6253\u7b97\u4ece\u5934\u5199\uff0c\u8c03\u7814\u4e86Next.js\u548cGatsby\uff0c\u90fd\u662f\u5f88\u5f3a\u5927\u7684\u6846\u67b6\uff0c\u4f46\u5bf9\u6211\u4e2a\u540e\u7aef\u5f00\u53d1\u6765\u8bf4\u8fd8\u662f\u5f88\u6709\u96be\u5ea6\u7684\u3002\u65e0\u610f\u4e2d\u770b\u5230\u4e86Docusaurus\u6846\u67b6\uff0c\u80fd\u81ea\u5e26\u6587\u6863\u548c\u535a\u5ba2\uff0c\u8fd8\u80fd\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u9875\u9762\uff0c\u5b8c\u7f8e\u5339\u914d\u6211\u7684\u9700\u6c42\uff0c\u6240\u4ee5\u5c31\u6709\u4e86\u8fd9\u4e2a\u7cfb\u5217\uff0c\u6253\u7b97\u8bb0\u5f55\u4e0b\u6574\u4e2a\u535a\u5ba2\u6539\u9020\u8fc7\u7a0b\uff0c\u80fd\u5199\u51e0\u671f\u4e0d\u4e00\u5b9a\uff0c\u6162\u6162\u6765\u5427\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u521d\u59cb\u5316\u9879\u76ee\\n\\n```\\n$ npx create-docusaurus@latest my-website classic --typescript\\n```\\n\\n```\\n$ yarn\\n$ yarn build\\n$ yarn start # \u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u80fd\u81ea\u52a8\u5237\u65b0\\n$ yarn serve # \u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\\n```\\n\\n## \u4fee\u6539\u7f51\u7ad9\u914d\u7f6e\\n\\n### \u4fee\u6539\u7f51\u7ad9\u57fa\u672c\u4fe1\u606f\\n\\n![config-basic.png](./config-basic.png)\\n\\n### \u4fee\u6539\u56fe\u6807&\u5bfc\u822a\u680f\\n\\n![](./config-navbar.png)\\n\\n\u5236\u4f5c\u56fe\u6807\u8fc7\u7a0b\u4e2d\u7528\u5230\u7684\u51e0\u4e2a\u5de5\u5177\uff0c\u90fd\u662f\u4e34\u65f6google\u627e\u7684\uff1a\\n\\n[\u56fe\u7247\u80cc\u666f\u6d88\u9664](https://www.remove.bg/zh)\\n\\n[icon\u56fe\u6807\u751f\u6210\u5de5\u5177](https://www.logosc.cn/logo/favicon?s=d)\\n\\n[PNG\u8f6cSVG - \u5728\u7ebf\u8f6c\u6362\u56fe\u50cf\u6587\u4ef6](https://www.aconvert.com/cn/image/png-to-svg/)\\n\\n### \u4fee\u6539Footer\\n\\n![](./config-footer.png) \xa0\\n\\n## \u5220\u6389\u81ea\u5e26\u7684\u535a\u5ba2/\u6587\u6863Demo\\n\\n\u535a\u5ba2\u76ee\u5f55\uff1a`blog/`\\n\u6587\u6863\u76ee\u5f55\uff1a`docs/`\\n\\n\u6587\u6863\u76ee\u5f55\u53ea\u7559\u4e2a`intro.md`\uff0c\u56e0\u4e3a\u914d\u7f6e\u91cc\u7559\u4e86\u8fd9\u4e2a\u6587\u4ef6\u7684\u5f15\u7528\uff0c\u540e\u9762\u5f53\u4e2a\u4e3b\u9875\u5bfc\u822a\u7528\u3002"}]}')}}]);