"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[2043],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},c=void 0,l={unversionedId:"Java/gc",id:"Java/gc",title:"gc",description:"GC",source:"@site/docs/Java/gc.md",sourceDirName:"Java",slug:"/Java/gc",permalink:"/docs/Java/gc",draft:!1,editUrl:"https://github.com/ddupg/ddupg.github.io/blob/main/docs/Java/gc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NMT",permalink:"/docs/Java/NMT"},next:{title:"copy",permalink:"/docs/MySQL/copy"}},i={},u=[{value:"GC",id:"gc",level:2},{value:"Full GC\u524d\u540e\u6253dump",id:"full-gc\u524d\u540e\u6253dump",level:3}],p={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gc"},"GC"),(0,o.kt)("h3",{id:"full-gc\u524d\u540e\u6253dump"},"Full GC\u524d\u540e\u6253dump"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-XX:+HeapDumpBeforeFullGC\n-XX:+HeapDumpAfterFullGC\n")),(0,o.kt)("p",null,"\u5c3d\u91cf\u53ea\u52a0\u7b2c\u4e00\u4e2a\uff0c\u5927\u5806\u5e94\u7528\u6253dump\u65f6\u95f4\u4f1a\u5f88\u957f\u300250G\u7684\u5806\u6253\u4e00\u6b21\u6709100s\u3002"))}s.isMDXComponent=!0}}]);