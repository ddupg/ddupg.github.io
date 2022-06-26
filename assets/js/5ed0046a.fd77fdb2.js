"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[9732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,b=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"class-init-order-in-inheritance",title:"\u300c\u8bb0\u300d\u5b50\u7c7b\u590d\u5199\u7236\u7c7b\u65b9\u6cd5\u4e0e\u7c7b\u521d\u59cb\u5316\u987a\u5e8f\u5f15\u53d1\u7684bug",date:"2019-09-30T10:00",author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bf7\u8f93\u5165\u63cf\u8ff0",tags:["Java","Bug"]},i=void 0,u={permalink:"/blog/class-init-order-in-inheritance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/class-init-order-in-inheritance/index.md",source:"@site/blog/class-init-order-in-inheritance/index.md",title:"\u300c\u8bb0\u300d\u5b50\u7c7b\u590d\u5199\u7236\u7c7b\u65b9\u6cd5\u4e0e\u7c7b\u521d\u59cb\u5316\u987a\u5e8f\u5f15\u53d1\u7684bug",description:"\u8bf7\u8f93\u5165\u63cf\u8ff0",date:"2019-09-30T10:00:00.000Z",formattedDate:"2019\u5e749\u670830\u65e5",tags:[{label:"Java",permalink:"/blog/tags/java"},{label:"Bug",permalink:"/blog/tags/bug"}],readingTime:3.57,truncated:!0,authors:[{name:"Ddupg",title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",url:"https://ddupg.github.io"}],frontMatter:{slug:"class-init-order-in-inheritance",title:"\u300c\u8bb0\u300d\u5b50\u7c7b\u590d\u5199\u7236\u7c7b\u65b9\u6cd5\u4e0e\u7c7b\u521d\u59cb\u5316\u987a\u5e8f\u5f15\u53d1\u7684bug",date:"2019-09-30T10:00",author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bf7\u8f93\u5165\u63cf\u8ff0",tags:["Java","Bug"]},prevItem:{title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",permalink:"/blog/CompletableFuture-in-high-concurrent"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}))}s.isMDXComponent=!0}}]);