"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[3292],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(3117),a=(t(7294),t(3905));const i={},o=void 0,c={unversionedId:"\u5f00\u53d1\u73af\u5883/maven",id:"\u5f00\u53d1\u73af\u5883/maven",title:"maven",description:"Maven",source:"@site/docs/\u5f00\u53d1\u73af\u5883/maven.md",sourceDirName:"\u5f00\u53d1\u73af\u5883",slug:"/\u5f00\u53d1\u73af\u5883/maven",permalink:"/docs/\u5f00\u53d1\u73af\u5883/maven",draft:!1,editUrl:"https://github.com/ddupg/ddupg.github.io/blob/main/docs/\u5f00\u53d1\u73af\u5883/maven.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vim",permalink:"/docs/Shell/vim"},next:{title:"node",permalink:"/docs/\u5f00\u53d1\u73af\u5883/node"}},l={},s=[{value:"Maven",id:"maven",level:2},{value:"\u7528assembly\u63d2\u4ef6\u5c06\u4f9d\u8d56\u90fd\u6253\u8fdbjar\u5305",id:"\u7528assembly\u63d2\u4ef6\u5c06\u4f9d\u8d56\u90fd\u6253\u8fdbjar\u5305",level:3}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"maven"},"Maven"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/maven/maven-3/"},"\u4e0b\u8f7d")),(0,a.kt)("h3",{id:"\u7528assembly\u63d2\u4ef6\u5c06\u4f9d\u8d56\u90fd\u6253\u8fdbjar\u5305"},"\u7528assembly\u63d2\u4ef6\u5c06\u4f9d\u8d56\u90fd\u6253\u8fdbjar\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    \x3c!-- \u5728\u8fd9\u91cc\u5b9a\u4e49\u4f60\u7684\u5165\u53e3\u7c7b --\x3e\n    <main.class>Main</main.class>\n</properties>\n<build>\n    <plugins>\n        <plugin>\n            <artifactId>maven-assembly-plugin</artifactId>\n            <configuration>\n                <archive>\n                    <manifest>\n                        \x3c!-- \u4f60\u4e5f\u53ef\u4ee5\u5728\u8fd9\u91cc\u81ea\u5df1\u5199MainClass --\x3e\n                        <mainClass>${main.class}</mainClass>\n                    </manifest>\n                </archive>\n                <descriptorRefs>\n                    <descriptorRef>jar-with-dependencies</descriptorRef>\n                </descriptorRefs>\n            </configuration>\n            <executions>\n                <execution>\n                    <id>make-assembly</id>\n                    <phase>package</phase>\n                    <goals>\n                        <goal>assembly</goal>\n                    </goals>\n                </execution>\n            </executions>\n        </plugin>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <configuration>\n                <source>8</source>\n                <target>8</target>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")))}m.isMDXComponent=!0}}]);