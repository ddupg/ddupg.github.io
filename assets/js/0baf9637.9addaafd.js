"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={slug:"CompletableFuture-in-high-concurrent",title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",date:"2019-10-11T19:30",author:"Ddupg",author_url:"https://ddupg.github.io",tags:["Jdk","Java"]},l=void 0,i={permalink:"/blog/CompletableFuture-in-high-concurrent",editUrl:"https://github.com/ddupg/ddupg.github.io/tree/main/blog/CompletableFuture-in-high-concurrent/index.md",source:"@site/blog/CompletableFuture-in-high-concurrent/index.md",title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",description:"\u6700\u8fd1\u7684\u5de5\u4f5c\u5185\u5bb9\u5c31\u662f\u5199\u4e00\u4e2a DualHBaseClient\uff0c\u5728\u67e5\u8be2\u6570\u636e\u65f6\u95f4\u8fc7\u957f\u65f6\uff0c\u80fd\u591f\u5c06\u540c\u6837\u7684\u8bf7\u6c42\u53d1\u7ed9 replication \u7684\u96c6\u7fa4\uff0c\u7f29\u5c0f client \u7aef\u7684 p99\u3001p999 \u5ef6\u8fdf\uff0c\u51cf\u5c0f\u6bdb\u523a\u3002",date:"2019-10-11T19:30:00.000Z",formattedDate:"2019\u5e7410\u670811\u65e5",tags:[{label:"Jdk",permalink:"/blog/tags/jdk"},{label:"Java",permalink:"/blog/tags/java"}],readingTime:4.19,hasTruncateMarker:!0,authors:[{name:"Ddupg",url:"https://ddupg.github.io"}],frontMatter:{slug:"CompletableFuture-in-high-concurrent",title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",date:"2019-10-11T19:30",author:"Ddupg",author_url:"https://ddupg.github.io",tags:["Jdk","Java"]},prevItem:{title:"\u521d\u6b65\u4e86\u89e3HBase Region Replicas",permalink:"/blog/Initial-Analysis-Region-Replicas"},nextItem:{title:"\u300c\u8bb0\u300d\u5b50\u7c7b\u590d\u5199\u7236\u7c7b\u65b9\u6cd5\u4e0e\u7c7b\u521d\u59cb\u5316\u987a\u5e8f\u5f15\u53d1\u7684bug",permalink:"/blog/class-init-order-in-inheritance"}},u={authorsImageUrls:[void 0]},p=[],c={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u7684\u5de5\u4f5c\u5185\u5bb9\u5c31\u662f\u5199\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"DualHBaseClient"),"\uff0c\u5728\u67e5\u8be2\u6570\u636e\u65f6\u95f4\u8fc7\u957f\u65f6\uff0c\u80fd\u591f\u5c06\u540c\u6837\u7684\u8bf7\u6c42\u53d1\u7ed9 replication \u7684\u96c6\u7fa4\uff0c\u7f29\u5c0f client \u7aef\u7684 p99\u3001p999 \u5ef6\u8fdf\uff0c\u51cf\u5c0f\u6bdb\u523a\u3002\n\u5b9e\u9645\u5f00\u53d1\u6700\u521d\u7684\u4e00\u7248\u4ee3\u7801\u90fd\u6ca1\u6709\u82b1\u8d391pd\uff0c\u6027\u80fd\u6d4b\u8bd5\u5012\u6d4b\u4e86\u597d\u51e0\u5929\u90fd\u4e0d\u53ca\u9884\u671f\uff0c\u751a\u81f3\u4f18\u5316\u4e4b\u540e\u5404\u65b9\u9762\u6027\u80fd\u66f4\u5dee\u52b2\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c31\u662f\u8bb0\u5f55\u4e0b\u5bfc\u81f4\u6b64\u6b21\u6027\u80fd\u95ee\u9898\u7684\u4e3b\u8981\u539f\u56e0\uff1aCompletableFuture."),(0,a.kt)("p",null,"\u4f7f\u7528 Java \u5f02\u6b65\u7f16\u7a0b\u7684\u65f6\u5019\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u7528\u8d77\u6765\u8fd8\u662f\u76f8\u5f53\u8212\u670d\u7684\uff0c\u5728HBase\u7684\u5f02\u6b65API\u91cc\uff0c\u4e5f\u5927\u91cf\u7684\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u6709\u6027\u80fd\u95ee\u9898\uff0c\u90a3\u53ef\u5c31\u60b2\u50ac\u4e86\u3002"))}s.isMDXComponent=!0}}]);