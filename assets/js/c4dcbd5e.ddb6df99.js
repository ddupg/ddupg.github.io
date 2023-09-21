"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[8213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={slug:"20230921-hbase-metaspace-memory-leak",title:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",date:new Date("2023-09-21T09:53:04.578Z"),author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",tags:["\u6570\u636e\u5e93","HBase","JVM/metaspace"]},l=void 0,p={permalink:"/blog/20230921-hbase-metaspace-memory-leak",editUrl:"https://github.com/ddupg/ddupg.github.io/tree/main/blog/20230921-hbase-metaspace-memory-leak/index.md",source:"@site/blog/20230921-hbase-metaspace-memory-leak/index.md",title:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",description:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",date:"2023-09-21T09:53:04.578Z",formattedDate:"2023\u5e749\u670821\u65e5",tags:[{label:"\u6570\u636e\u5e93",permalink:"/blog/tags/\u6570\u636e\u5e93"},{label:"HBase",permalink:"/blog/tags/h-base"},{label:"JVM/metaspace",permalink:"/blog/tags/jvm-metaspace"}],readingTime:8.755,hasTruncateMarker:!0,authors:[{name:"Ddupg",title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",url:"https://ddupg.github.io"}],frontMatter:{slug:"20230921-hbase-metaspace-memory-leak",title:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",date:"2023-09-21T09:53:04.578Z",author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",tags:["\u6570\u636e\u5e93","HBase","JVM/metaspace"]},nextItem:{title:"\u8bd1\uff1aThe Part of PostgreSQL We Hate the Most",permalink:"/blog/20230916-the-part-of-postgresql-we-hate-the-most"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u516c\u53f8\u7684HBase\u96c6\u7fa4\u5076\u5c14\u6709\u4e2a\u5f88\u5947\u602a\u7684\u73b0\u8c61\uff1a\u5185\u5b58\u5360\u7528\u4f1a\u9010\u6e10\u5347\u9ad8\uff0c\u8d85\u8fc7\u5806\u5185\u5806\u5916\u5185\u5b58\u9650\u5236\uff0c\u76f4\u5230\u628a\u64cd\u4f5c\u7cfb\u7edf\u5185\u5b58\u5360\u6ee1\u88aboom-killer\u6740\u6b7b\u3002\u5728\u5185\u5b58\u5360\u7528\u9010\u6b65\u5347\u9ad8\u7684\u671f\u95f4\uff0c\u54cd\u5e94\u5ef6\u8fdf\u8d8a\u6765\u8d8a\u9ad8\uff0c\u6700\u7ec8\u670d\u52a1\u5b95\u673a\u4e5f\u4f1a\u9020\u6210\u96c6\u7fa4\u6296\u52a8\uff0c\u5f71\u54cdSLA\u3002"),(0,n.kt)("p",null,"\u5185\u5b58\u589e\u957f\u8fc7\u7a0b\u975e\u5e38\u7f13\u6162\uff0c\u5927\u6982\u4e00\u4e24\u4e2a\u6708\u5b95\u673a\u4e00\u6b21\u3002\u4e4b\u524d\u4e00\u76f4\u82e6\u607c\u4e8e\u6ca1\u6709\u73b0\u573a\uff0c\u8fd9\u6b21\u7ec8\u4e8e\u6293\u5230\u4e86\u4e00\u4e2a\u7a33\u5b9a\u590d\u73b0\u7684\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\u8fd8\u6ca1\u6b63\u5f0f\u4fee\u590d\uff0c\u4fee\u590d\u9a8c\u8bc1\u4e5f\u8981\u51e0\u5468\u65f6\u95f4\uff0c\u6240\u4ee5\u7b49\u6211\u9a8c\u8bc1\u540e\u518d\u8865\u5145\u6548\u679c\u3002"))}m.isMDXComponent=!0}}]);