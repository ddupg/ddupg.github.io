"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[5422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={slug:"20230523-compaction-offload-paper",title:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",date:new Date("2023-05-23T18:25:10.791Z"),author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",tags:["\u6570\u636e\u5e93","HBase","Compaction"]},i=void 0,c={permalink:"/blog/20230523-compaction-offload-paper",editUrl:"https://github.com/ddupg/ddupg.github.io/tree/main/blog/20230523-Compaction management in distributed key-value datastores/index.md",source:"@site/blog/20230523-Compaction management in distributed key-value datastores/index.md",title:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",description:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",date:"2023-05-23T18:25:10.791Z",formattedDate:"2023\u5e745\u670823\u65e5",tags:[{label:"\u6570\u636e\u5e93",permalink:"/blog/tags/\u6570\u636e\u5e93"},{label:"HBase",permalink:"/blog/tags/h-base"},{label:"Compaction",permalink:"/blog/tags/compaction"}],readingTime:48.95,hasTruncateMarker:!0,authors:[{name:"Ddupg",title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",url:"https://ddupg.github.io"}],frontMatter:{slug:"20230523-compaction-offload-paper",title:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",date:"2023-05-23T18:25:10.791Z",author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bba\u6587\uff1aCompaction management in distributed key-value datastores",tags:["\u6570\u636e\u5e93","HBase","Compaction"]},prevItem:{title:"HBase Snapshot\u57fa\u672c\u539f\u7406",permalink:"/blog/20230706-hbase-snapshot"},nextItem:{title:"\u8bba\u6587\uff1aColumn-Stores vs. Row-Stores How Different Are They Really?",permalink:"/blog/2022-10-21-column-stores-vs-row-stores"}},p={authorsImageUrls:[void 0]},s=[{value:"ABSTRACT",id:"abstract",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"abstract"},"ABSTRACT"),(0,o.kt)("p",null,"\u5728\u57fa\u4e8eLSMT\u5b9e\u73b0\u7684\u6570\u636e\u5e93\u4e2d\uff0ccompaction\u662f\u5f88\u91cd\u8981\u7684\u673a\u5236\u3002compaction\u867d\u7136\u6709\u52a9\u4e8e\u7ef4\u6301\u957f\u671f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7684\u8bfb\u4f4e\u5ef6\u8fdf\uff0c\u4f46\u5728compaction\u8fc7\u7a0b\u4e2d\u8bfb\u5ef6\u8fdf\u727a\u7272\u5927\u3002\u8fd9\u7bc7\u8bba\u6587\u4e2d\uff0c\u6df1\u5ea6\u5206\u6790\u4e86compaction\u76f8\u5173\u7684\u6027\u80fd\u635f\u8017\uff0c\u5e76\u63d0\u51fa\u4e86\u7f13\u89e3\u7684\u6280\u672f\u3002\u6211\u4eec\u5c06\u5927\u7684\u6602\u8d35\u7684compaction offload\u5230\u4e86\u5355\u72ec\u7684compaction server\uff0c\u8ba9datastore server\u66f4\u597d\u5730\u5229\u7528\u4ed6\u81ea\u5df1\u7684\u8d44\u6e90\u3002\u6b64\u5916\uff0c\u56e0\u4e3a\u65b0compact\u7684\u6570\u636e\u5df2\u7ecf\u5728compaction server\u7684\u4e3b\u5185\u5b58\u91cc\u4e86\uff0c\u6211\u4eec\u901a\u8fc7\u7f51\u7edc\u4ececompaction server\u628a\u6570\u636e\u6293\u5230datastore server\u7684\u672c\u5730\u5185\u5b58\uff0c\u907f\u514d\u8bfbfilesystem\u7684\u6027\u80fd\u635f\u8017\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5728\u628aworkload\u5207\u6362\u5230compaction server\u4e4b\u524d\uff0c\u9884\u53d6 compact\u7684\u6570\u636e\u5df2\u7ecf\u53ef\u4ee5\u6d88\u9664\u7f13\u5b58\u5931\u6548\u7684\u5f71\u54cd\uff0c\u8fd9\u65f6\u5019compaction server\u53ea\u5f53\u662f\u8fdc\u7a0b\u7f13\u5b58\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u66f4\u667a\u80fd\u7684\u9884\u70ed\u7b97\u6cd5\u786e\u4fdd\u6240\u6709\u8bfb\u8bf7\u6c42\u90fd\u80fd\u88abdatastore server\u7684\u672c\u5730\u7f13\u5b58\u670d\u52a1\uff0c\u5373\u4f7f\u5b83\u8fd8\u5728\u9884\u70ed\u3002\u6211\u4eec\u5df2\u7ecf\u96c6\u6210\u8fdb\u4e86hbase\uff0c\u4f7f\u7528YCSB\u548cTPC-C\u7684benchmark\u663e\u793a\u6211\u4eec\u7684\u65b9\u6cd5\u663e\u8457\u6d88\u9664\u4e86compaction\u76f8\u5173\u7684\u6027\u80fd\u95ee\u9898\u3002\u4e5f\u5c55\u793a\u4e86compaction server\u53ef\u6269\u5c55\u6027\u3002"))}m.isMDXComponent=!0}}]);