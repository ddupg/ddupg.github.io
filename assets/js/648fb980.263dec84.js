"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[9620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const l={slug:"CompletableFuture-in-high-concurrent",title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",date:"2019-10-11T19:30",author:"Ddupg",author_url:"https://ddupg.github.io",tags:["Jdk","Java"]},i=void 0,o={permalink:"/blog/CompletableFuture-in-high-concurrent",editUrl:"https://github.com/ddupg/ddupg.github.io/tree/main/blog/CompletableFuture-in-high-concurrent/index.md",source:"@site/blog/CompletableFuture-in-high-concurrent/index.md",title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",description:"\u6700\u8fd1\u7684\u5de5\u4f5c\u5185\u5bb9\u5c31\u662f\u5199\u4e00\u4e2a DualHBaseClient\uff0c\u5728\u67e5\u8be2\u6570\u636e\u65f6\u95f4\u8fc7\u957f\u65f6\uff0c\u80fd\u591f\u5c06\u540c\u6837\u7684\u8bf7\u6c42\u53d1\u7ed9 replication \u7684\u96c6\u7fa4\uff0c\u7f29\u5c0f client \u7aef\u7684 p99\u3001p999 \u5ef6\u8fdf\uff0c\u51cf\u5c0f\u6bdb\u523a\u3002",date:"2019-10-11T19:30:00.000Z",formattedDate:"2019\u5e7410\u670811\u65e5",tags:[{label:"Jdk",permalink:"/blog/tags/jdk"},{label:"Java",permalink:"/blog/tags/java"}],readingTime:4.19,hasTruncateMarker:!0,authors:[{name:"Ddupg",url:"https://ddupg.github.io"}],frontMatter:{slug:"CompletableFuture-in-high-concurrent",title:"\u300c\u8bb0\u300dJdk8 CompletableFuture\u5728\u9ad8\u5e76\u53d1\u73af\u5883\u4e0b\u7684\u6027\u80fd\u95ee\u9898",date:"2019-10-11T19:30",author:"Ddupg",author_url:"https://ddupg.github.io",tags:["Jdk","Java"]},prevItem:{title:"\u521d\u6b65\u4e86\u89e3HBase Region Replicas",permalink:"/blog/Initial-Analysis-Region-Replicas"},nextItem:{title:"\u300c\u8bb0\u300d\u5b50\u7c7b\u590d\u5199\u7236\u7c7b\u65b9\u6cd5\u4e0e\u7c7b\u521d\u59cb\u5316\u987a\u5e8f\u5f15\u53d1\u7684bug",permalink:"/blog/class-init-order-in-inheritance"}},u={authorsImageUrls:[void 0]},p=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u7684\u5de5\u4f5c\u5185\u5bb9\u5c31\u662f\u5199\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"DualHBaseClient"),"\uff0c\u5728\u67e5\u8be2\u6570\u636e\u65f6\u95f4\u8fc7\u957f\u65f6\uff0c\u80fd\u591f\u5c06\u540c\u6837\u7684\u8bf7\u6c42\u53d1\u7ed9 replication \u7684\u96c6\u7fa4\uff0c\u7f29\u5c0f client \u7aef\u7684 p99\u3001p999 \u5ef6\u8fdf\uff0c\u51cf\u5c0f\u6bdb\u523a\u3002\n\u5b9e\u9645\u5f00\u53d1\u6700\u521d\u7684\u4e00\u7248\u4ee3\u7801\u90fd\u6ca1\u6709\u82b1\u8d391pd\uff0c\u6027\u80fd\u6d4b\u8bd5\u5012\u6d4b\u4e86\u597d\u51e0\u5929\u90fd\u4e0d\u53ca\u9884\u671f\uff0c\u751a\u81f3\u4f18\u5316\u4e4b\u540e\u5404\u65b9\u9762\u6027\u80fd\u66f4\u5dee\u52b2\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c31\u662f\u8bb0\u5f55\u4e0b\u5bfc\u81f4\u6b64\u6b21\u6027\u80fd\u95ee\u9898\u7684\u4e3b\u8981\u539f\u56e0\uff1aCompletableFuture."),(0,a.kt)("p",null,"\u4f7f\u7528 Java \u5f02\u6b65\u7f16\u7a0b\u7684\u65f6\u5019\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u7528\u8d77\u6765\u8fd8\u662f\u76f8\u5f53\u8212\u670d\u7684\uff0c\u5728HBase\u7684\u5f02\u6b65API\u91cc\uff0c\u4e5f\u5927\u91cf\u7684\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u6709\u6027\u80fd\u95ee\u9898\uff0c\u90a3\u53ef\u5c31\u60b2\u50ac\u4e86\u3002"),(0,a.kt)("p",null,"\u770b\u4e0b\u4ee5\u4e0b\u8fd9\u6bb5\u6d4b\u8bd5",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u7684\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import com.google.common.collect.Lists;\n\nimport java.util.List;\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class FutureTest {\n\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        new FutureTest().run();\n    }\n\n    private void run() throws ExecutionException, InterruptedException {\n        List<CompletableFuture> futures = Lists.newArrayList();\n        for (int i = 0; i < 1000; i++) {\n            CompletableFuture future = new CompletableFuture();\n            CompletableFuture f = CompletableFuture.runAsync(this::read);\n            f.whenComplete((r, e) -> future.complete(r));\n            futures.add(future);\n        }\n        for (CompletableFuture future : futures) {\n            future.get();\n        }\n    }\n\n    private void read() {\n        try {\n            Thread.sleep(100);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u8fd9\u6bb5\u4ee3\u7801\u5b9e\u9645\u53ea\u662f\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u7a7a\u8f6c\uff0c\u9664\u4e86 sleep \u6ca1\u518d\u505a\u5176\u4ed6\u7684\uff0c\u5faa\u73af1000\u8ba9\u8fd0\u884c\u65f6\u95f4\u5c3d\u91cf\u957f\u4e00\u4e9b\uff0c\u8db3\u591f\u8ba9\u6211\u4eec\u8dd1\u4e00\u4e2a\u706b\u7130\u56fe\u51fa\u6765\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u706b\u7130\u56fe",src:n(8820).Z,width:"1200",height:"742"})),(0,a.kt)("p",null,"\u706b\u7130\u56fe\u91cc\u6ce8\u610f\u5230\u6709\u4e2a\u6700\u5927\u7684\u5e73\u9876 ",(0,a.kt)("inlineCode",{parentName:"p"},"java.lang.Runtime.availableProcessors"),"\uff0c\u8be5\u65b9\u6cd5\u8017\u65f6\u6781\u5927\uff0c\u751a\u81f3\u8d85\u8fc7\u4e86 Thread.sleep\uff0c\u8fd9\u53ef\u4e0d\u6b63\u5e38\u5427\u3002"),(0,a.kt)("p",null,"\u968f\u540e\u6211\u4eec\u6d4b\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"java.lang.Runtime.availableProcessors()")," \u65b9\u6cd5\u662f\u4e0d\u662f\u771f\u7684\u6162\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import com.google.common.base.Stopwatch;\nimport org.junit.Assert;\nimport org.junit.Test;\n\nimport java.util.concurrent.TimeUnit;\n\npublic class AvailableProcessorsTest {\n\n    @Test\n    public void test() {\n        Stopwatch sw = Stopwatch.createStarted();\n        for (int i = 0; i < 1000000; i++) {\n            Runtime.getRuntime().availableProcessors();\n        }\n        Assert.assertTrue(sw.elapsed(TimeUnit.SECONDS) > 10);\n    }\n}\n")),(0,a.kt)("p",null,"\u5728\u6211\u7684\u673a\u5668\u4e0a\u5faa\u73af1000000\u6b21\uff0c\u8017\u65f6\u8d85\u8fc7\u4e8610s\uff0c\u4e0d\u7b97\u5feb\u3002"),(0,a.kt)("p",null,"\u518d\u6765\u770b\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u662f\u600e\u4e48\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.availableProcessors()")," \u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"private Object waitingGet(boolean interruptible) {\n    ...\n    while ((r = result) == null) {\n        if (spins < 0)\n            spins = (Runtime.getRuntime().availableProcessors() > 1) ?\n                1 << 8 : 0; // Use brief spin-wait on multiprocessors\n        else if (spins > 0) {\n            if (ThreadLocalRandom.nextSecondarySeed() >= 0)\n                --spins;\n        }\n        ...\n    }\n    ...\n}\n")),(0,a.kt)("p",null,"while \u6b7b\u5faa\u73af\u8981\u76f4\u5230\u51fa\u73b0\u5f02\u5e38\u6216\u83b7\u53d6\u5230\u6700\u7ec8\u7ed3\u679c\u624d\u4f1a\u7ed3\u675f\uff0c\u800c\u5faa\u73af\u4e2d\u53c8\u4f1a\u5927\u91cf\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.availableProcessors()"),"\uff0c\u8fd9\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u5b58\u5728\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u800c\u5b9e\u9645\u4e0aOpenjdk\u5df2\u6709\u5bf9\u8be5\u95ee\u9898\u7684\u8ba8\u8bba\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://bugs.openjdk.java.net/browse/JDK-8227018"},"JDK-8227018"),"\uff0c\u8be5\u4f18\u5316\u4e5f\u5f88\u7b80\u5355\uff0c\u5728\u8fd9\u91cc\u5176\u5b9e\u53ea\u662f\u9700\u8981\u77e5\u9053\u8fd0\u884c\u73af\u5883\u662f\u4e0d\u662f\u591a\u5904\u7406\u5668\u73af\u5883\u800c\u5df2\uff0c\u7f13\u5b58\u8d77\u6765\u5c31\u597d\uff0c\u5b8c\u5168\u6ca1\u5fc5\u8981\u6bcf\u6b21\u5faa\u73af\u90fd\u53bb\u83b7\u53d6\u3002\u5728jdk8u232\u7248\u672c\u5c31fix\u6389\u4e86\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\u6211\u8fd8\u770b\u4e86 jdk11\u3001jdk13 \u7684\u5b9e\u73b0\uff0c\u90fd\u4e0d\u518d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.availableProcessors()"),"\u4e86\uff0c\u6240\u4ee5\u7b97\u662f\u4f4e\u7248\u672c jdk8 \u7528\u6237\u72ec\u6709\u7684\u70e6\u607c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u4e2a\u5c0f\u63d2\u66f2"),(0,a.kt)("p",{parentName:"blockquote"},"jdk8u232\u7248\u672c\u662f2019.10.15\u624d\u6b63\u5f0frelease\u7684\uff0c\u800c\u6211\u53d1\u73b0\u8fd9\u4e2a\u95ee\u9898\u662f\u572810.13\u3002\n\u4e5f\u5e78\u8fd0\u4e5f\u4e0d\u5e78\uff0c\u5e78\u8fd0\u7684\u662f\u8d77\u7801\u95ee\u9898fix\u6389\u4e86\uff0c\u4e0d\u5e78\u7684\u662f DualHBaseClient \u4e0d\u80fd\u91c7\u7528 CompletableFuture \u5b9e\u73b0\u4e86\uff0c\u603b\u4e0d\u597d\u8981\u6c42\u7528\u6237\u5347\u7ea7jdk\u5427")),(0,a.kt)("p",null,"\u77e5\u9053\u4f4e\u7248\u672c\u7684 jdk8 \u6709\u95ee\u9898\u4e4b\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"DualHBaseClient")," \u8fd8\u662f\u8981\u5199\u7684\uff0c\u53ea\u80fd\u5bfb\u6c42\u5176\u4ed6\u7684\u5f02\u6b65\u6846\u67b6\u6765\u5b9e\u73b0\uff0c\u597d\u5728 guava \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ListenableFuture")," \u5b9e\u73b0\u5f88\u50cf",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u5982\u679c\u662fjdk8\u4f4e\u7248\u672c\u7528\u6237\uff08\u521a\u53d1\u5e03\u51e0\u5929\u4e0d\u4f1a\u6709\u516c\u53f8\u5347\u7ea7\u5427\uff09\u9891\u7e41\u7684\u5927\u91cf\u4f7f\u7528 CompletableFuture\uff0c\u662f\u5b58\u5728\u6027\u80fd\u95ee\u9898\uff0c\u5347\u7ea7 jdk \u662f\u6700\u7b80\u5355\u7684\u529e\u6cd5\uff0c\u4f7f\u7528 guava \u7684 Future \u5e93\u5b9e\u73b0\u4e5f\u53ef\u4ee5\uff0c\u4f46\u53ef\u80fd\u8981\u5927\u91cf\u4fee\u6539\u4ee3\u7801\u4e86\u3002"),(0,a.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.wangqi.love/articles/Java/%E7%81%AB%E7%84%B0%E5%9B%BE%E6%8E%92%E6%9F%A5Java%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98.html"},"\u706b\u7130\u56fe\u6392\u67e5Java\u6027\u80fd\u95ee\u9898")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bugs.openjdk.java.net/browse/JDK-8227018"},"JDK-8227018"))))}m.isMDXComponent=!0},8820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CompletableFuture-in-jdk8-traces-5268b75d0499fa3aef10b4efa6ab80c8.svg"}}]);