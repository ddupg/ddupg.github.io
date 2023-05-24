"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[8713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),b=o,f=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(3117),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"Shell/bashrc",id:"Shell/bashrc",title:"bashrc",description:".bashrc\u914d\u7f6e",source:"@site/docs/Shell/bashrc.md",sourceDirName:"Shell",slug:"/Shell/bashrc",permalink:"/docs/Shell/bashrc",draft:!1,editUrl:"https://github.com/ddupg/ddupg.github.io/blob/main/docs/Shell/bashrc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tools",permalink:"/docs/Python/tools"},next:{title:"grep",permalink:"/docs/Shell/grep"}},l={},u=[{value:".bashrc\u914d\u7f6e",id:"bashrc\u914d\u7f6e",level:3},{value:"Linux\u7ec8\u7aef\u663e\u793agit\u5206\u652f",id:"linux\u7ec8\u7aef\u663e\u793agit\u5206\u652f",level:4}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"bashrc\u914d\u7f6e"},".bashrc\u914d\u7f6e"),(0,o.kt)("h4",{id:"linux\u7ec8\u7aef\u663e\u793agit\u5206\u652f"},"Linux\u7ec8\u7aef\u663e\u793agit\u5206\u652f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function git_branch {\n  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/ (\\1)/'\n}\n\nexport PS1=\"\\u@\\h: \\w [\\t]\\[\\033[32m\\]\\$(git_branch)\\[\\033[00m\\] $ \"\n")))}d.isMDXComponent=!0}}]);