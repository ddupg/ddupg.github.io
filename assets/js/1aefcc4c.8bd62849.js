"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[9451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),s=a,g=m["".concat(u,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(3117),a=(r(7294),r(3905));const o={slug:"20220921-dynamodb-2022-paper",title:"DynamoDB 2022 paper\u5185\u90e8\u5206\u4eab",date:new Date("2022-09-21T06:32:10.791Z"),author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"DynamoDB 2022 paper\u5185\u90e8\u5206\u4eab",tags:["\u6570\u636e\u5e93","DynamoDB"]},p=void 0,i={permalink:"/blog/20220921-dynamodb-2022-paper",editUrl:"https://github.com/ddupg/ddupg.github.io/tree/main/blog/20220921-DynamoDB-2022-paper/index.md",source:"@site/blog/20220921-DynamoDB-2022-paper/index.md",title:"DynamoDB 2022 paper\u5185\u90e8\u5206\u4eab",description:"DynamoDB 2022 paper\u5185\u90e8\u5206\u4eab",date:"2022-09-21T06:32:10.791Z",formattedDate:"2022\u5e749\u670821\u65e5",tags:[{label:"\u6570\u636e\u5e93",permalink:"/blog/tags/\u6570\u636e\u5e93"},{label:"DynamoDB",permalink:"/blog/tags/dynamo-db"}],readingTime:50.355,truncated:!0,authors:[{name:"Ddupg",title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",url:"https://ddupg.github.io"}],frontMatter:{slug:"20220921-dynamodb-2022-paper",title:"DynamoDB 2022 paper\u5185\u90e8\u5206\u4eab",date:"2022-09-21T06:32:10.791Z",author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"DynamoDB 2022 paper\u5185\u90e8\u5206\u4eab",tags:["\u6570\u636e\u5e93","DynamoDB"]},prevItem:{title:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",permalink:"/blog/20230523-compaction-offload-paper"},nextItem:{title:"Docusaurus\u5efa\u7ad9\uff084\uff09- \u81ea\u5b9a\u4e49\u9875\u9762",permalink:"/blog/docusaurus-website-4"}},u={authorsImageUrls:[void 0]},l=[],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1AWS\u53d1\u5e03\u4e86DynamoDB\u65b0\u8bba\u6587\uff0c\u4e0d\u662f\u6d89\u53ca\u7ec6\u8282\u7684\u5b66\u672f\u8bba\u6587\uff0c\u800c\u662f\u4ecb\u7ecd\u4e86\u516c\u6709\u4e91\u5728\u5de5\u4e1a\u751f\u4ea7\u5b9e\u8df5\u4e0a\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u8df5\u3002\u503c\u5f97\u601d\u8003\u548c\u5b66\u4e60\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u5728\u5185\u90e8\u5206\u4eab\u4f7f\u7528\u7684\uff0c\u57fa\u672c\u662f\u8bba\u6587\u7ffb\u8bd1\u4e86\u3002"))}d.isMDXComponent=!0}}]);