"use strict";(self.webpackChunkddupg_github_io=self.webpackChunkddupg_github_io||[]).push([[6601],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={slug:"20230921-hbase-metaspace-memory-leak",title:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",date:new Date("2023-09-21T09:53:04.578Z"),author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",tags:["\u6570\u636e\u5e93","HBase","JVM/metaspace"]},o=void 0,i={permalink:"/blog/20230921-hbase-metaspace-memory-leak",editUrl:"https://github.com/ddupg/ddupg.github.io/tree/main/blog/20230921-hbase-metaspace-memory-leak/index.md",source:"@site/blog/20230921-hbase-metaspace-memory-leak/index.md",title:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",description:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",date:"2023-09-21T09:53:04.578Z",formattedDate:"2023\u5e749\u670821\u65e5",tags:[{label:"\u6570\u636e\u5e93",permalink:"/blog/tags/\u6570\u636e\u5e93"},{label:"HBase",permalink:"/blog/tags/h-base"},{label:"JVM/metaspace",permalink:"/blog/tags/jvm-metaspace"}],readingTime:8.64,hasTruncateMarker:!0,authors:[{name:"Ddupg",title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",url:"https://ddupg.github.io"}],frontMatter:{slug:"20230921-hbase-metaspace-memory-leak",title:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",date:"2023-09-21T09:53:04.578Z",author:"Ddupg",author_title:"\u6570\u636e\u5e93\u5de5\u7a0b\u5e08",author_url:"https://ddupg.github.io",description:"\u8bb0\u4e00\u6b21\u7ebf\u4e0aHBase\u670d\u52a1JVM metaspace\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898",tags:["\u6570\u636e\u5e93","HBase","JVM/metaspace"]},nextItem:{title:"\u8bd1\uff1aThe Part of PostgreSQL We Hate the Most",permalink:"/blog/20230916-the-part-of-postgresql-we-hate-the-most"}},p={authorsImageUrls:[void 0]},s=[{value:"\u73b0\u8c61",id:"\u73b0\u8c61",level:2},{value:"\u73b0\u573a\u5904\u7406",id:"\u73b0\u573a\u5904\u7406",level:2},{value:"\u6392\u67e5",id:"\u6392\u67e5",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u540e\u7eed",id:"\u540e\u7eed",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u516c\u53f8\u7684HBase\u96c6\u7fa4\u5076\u5c14\u6709\u4e2a\u5f88\u5947\u602a\u7684\u73b0\u8c61\uff1a\u5185\u5b58\u5360\u7528\u4f1a\u9010\u6e10\u5347\u9ad8\uff0c\u8d85\u8fc7\u5806\u5185\u5806\u5916\u5185\u5b58\u9650\u5236\uff0c\u76f4\u5230\u628a\u64cd\u4f5c\u7cfb\u7edf\u5185\u5b58\u5360\u6ee1\u88aboom-killer\u6740\u6b7b\u3002\u5728\u5185\u5b58\u5360\u7528\u9010\u6b65\u5347\u9ad8\u7684\u671f\u95f4\uff0c\u54cd\u5e94\u5ef6\u8fdf\u8d8a\u6765\u8d8a\u9ad8\uff0c\u6700\u7ec8\u670d\u52a1\u5b95\u673a\u4e5f\u4f1a\u9020\u6210\u96c6\u7fa4\u6296\u52a8\uff0c\u5f71\u54cdSLA\u3002"),(0,r.kt)("p",null,"\u5185\u5b58\u589e\u957f\u8fc7\u7a0b\u975e\u5e38\u7f13\u6162\uff0c\u5927\u6982\u4e00\u4e24\u4e2a\u6708\u5b95\u673a\u4e00\u6b21\u3002\u4e4b\u524d\u4e00\u76f4\u82e6\u607c\u4e8e\u6ca1\u6709\u73b0\u573a\uff0c\u8fd9\u6b21\u7ec8\u4e8e\u6293\u5230\u4e86\u4e00\u4e2a\u7a33\u5b9a\u590d\u73b0\u7684\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u8fd8\u6ca1\u6b63\u5f0f\u4fee\u590d\uff0c\u4fee\u590d\u9a8c\u8bc1\u4e5f\u8981\u51e0\u5468\u65f6\u95f4\uff0c\u6240\u4ee5\u7b49\u6211\u9a8c\u8bc1\u540e\u518d\u8865\u5145\u6548\u679c\u3002"),(0,r.kt)("h2",{id:"\u73b0\u8c61"},"\u73b0\u8c61"),(0,r.kt)("p",null,"\u7528\u6237\u53cd\u9988\u96c6\u7fa4\u7684\u5ef6\u8fdf\u8fdc\u9ad8\u4e8e\u5176\u4ed6\u96c6\u7fa4\uff0c\u4e4b\u524dSRE\u8fdb\u884c\u8fc7\u6269\u5bb9\u4e5f\u6ca1\u6709\u6548\u679c\uff0c\u6240\u4ee5\u5f00\u53d1\u4ecb\u5165\u5f00\u59cb\u6392\u67e5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7528\u6237\u4fa7\u8bf7\u6c42\u7684P95\u5ef6\u8fdf",src:a(7845).Z,width:"1873",height:"452"})),(0,r.kt)("p",null,"\u67e5\u770b\u96c6\u7fa4\u76d1\u63a7\uff0c\u53d1\u73b0\u4e24\u53f0\u8282\u70b9\u7684\u5185\u5b58\u5360\u7528\u975e\u5e38\u9ad8\uff0c\u63a5\u8fd1100%\u3002\u968f\u540e\u5c31\u4f1a\u88aboom-killer\u6740\u6389\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"HBase\u96c6\u7fa4\u5185\u5b58\u76d1\u63a7\uff0c\u4e0d\u65ad\u589e\u957f\u63a5\u8fd1100%\uff0c\u8fdb\u7a0b\u88ab\u6740\u540e\u9661\u964d",src:a(3969).Z,width:"1875",height:"408"})),(0,r.kt)("p",null,"\u6211\u4eec\u7ebf\u4e0a\u673a\u5668128G\u5185\u5b58\uff0c\u8fd9\u4e2a\u96c6\u7fa4HBase\u914d\u7f6e\u5806\u518540G\u5806\u591650G\uff0c\u52a0\u4e0a\u5176\u4ed6\u8fdb\u7a0b\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u6574\u4f53\u5185\u5b58\u4f7f\u7528\u7387\u572880%\u7b97\u662f\u6bd4\u8f83\u5408\u7406\u7684\u3002"),(0,r.kt)("p",null,"\u5185\u5b58\u5360\u7528\u9ad8\u4e4b\u540e\uff0c\u64cd\u4f5c\u7cfb\u7edf\u6ca1\u6709\u53ef\u7528\u5185\u5b58\uff0c\u4f1a\u9891\u7e41\u7684\u8fdb\u884c\u5185\u5b58\u56de\u6536\uff0c\u5982\u679c\u56de\u6536\u901f\u5ea6\u8ddf\u4e0d\u4e0a\uff0c\u8fd8\u4f1a\u7531\u540e\u53f0\u56de\u6536\u53d8\u4e3a\u76f4\u63a5\u56de\u6536\uff0c\u6682\u505c\u8fdb\u7a0b\u7684\u5185\u5b58\u7533\u8bf7\u3002\u5728Java\u8fdb\u7a0b\u91cc\u4e5f\u4f1a\u770b\u5230\u83ab\u540d\u7684GC\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"sar -B"),"\u67e5\u770b\u5185\u5b58\u56de\u6536\u60c5\u51b5\u3002\u5fd8\u8bb0\u73b0\u573a\u7559\u56fe\u4e86\uff0c\u4e4b\u540e\u6709\u56fe\u518d\u8865\u3002"),(0,r.kt)("h2",{id:"\u73b0\u573a\u5904\u7406"},"\u73b0\u573a\u5904\u7406"),(0,r.kt)("p",null,"\u5f00\u59cb\u6392\u67e5\u65f6\u8fd8\u6709\u4e24\u4e2a\u8282\u70b9\u5185\u5b58\u5f02\u5e38\uff0c\u8bf7\u6c42\u6162\u65e5\u5fd7\u6570\u91cf\u660e\u663e\u9ad8\u4e8e\u5176\u4ed6\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"top"),"\u67e5\u770b\u5185\u5b58\u4f7f\u7528\uff0cRegionServer\u8fdb\u7a0b\u5360\u7528\u5728113G\u5de6\u53f3\uff0c\u8fdc\u8d85\u9650\u5236\uff0c\u53ef\u4ee5\u786e\u5b9a\u662f\u53d1\u751f\u5185\u5b58\u6cc4\u6f0f\u4e86\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\u4e00\u53f0\u5df2\u7ecf\u6ca1\u6cd5\u7528arthas\u8fdb\u884c\u6302\u8f7d\u4e86\uff0c\u53ea\u80fd\u5148\u91cd\u542f\u3002"),(0,r.kt)("p",null,"\u5269\u4f59\u4e00\u53f0\u8d76\u7d27\u7528arthas\u6302\u8fdb\u53bb\u770b\uff0c\u53d1\u73b0\u5806\u5185\u5806\u5916\u5927\u5c0f\u90fd\u6b63\u5e38\uff0c\u4f46metaspace\u8fbe\u523012G\u3002\u5f53\u65f6\u4e5f\u6ca1\u6709\u622a\u56fe\uff0c\u8fd9\u91cc\u7528\u76ee\u524d\u7ebf\u4e0a\u7684\u4e00\u53f0\u673a\u5668\u793a\u610f\u4e00\u4e0b\uff0c\u6709\u673a\u4f1a\u518d\u8865\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u975e\u6545\u969c\u73b0\u573a\u7684\u622a\u56fe\uff0c\u8fd9\u662f\u76ee\u524d\u7ebf\u4e0a\u673a\u5668\u7684\u60c5\u51b5\uff0c\u4ec5\u793a\u610f",src:a(6190).Z,width:"943",height:"205"})),(0,r.kt)("p",null,"\u8fd9\u65f6\u5019\u731c\u6d4b\u662fJVM\u7684metaspace\u53d1\u751f\u4e86\u5185\u5b58\u6cc4\u6f0f\uff0c\u56e0\u4e3ametaspace\u6ca1\u6709\u5927\u5c0f\u9650\u5236\uff0c\u4f1a\u4e00\u76f4\u50cf\u64cd\u4f5c\u7cfb\u7edf\u7533\u8bf7\u5185\u5b58\uff0c\u76f4\u81f3\u628a\u5185\u5b58\u5360\u6ee1\u3002"),(0,r.kt)("p",null,"\u8d76\u7d27\u6253\u4e2aheap dump\u597d\u6162\u6162\u67e5\u3002\u56e0\u4e3a\u6253dump\u4f1aFull GC\uff0c\u53d1\u751f\u957f\u65f6\u95f4\u7684STW\uff0c\u5927\u5185\u5b58\u7684RS\u4f1a\u56e0\u4e3a\u548cZK\u5931\u8054\u5b95\u673a\uff0c\u6240\u4ee5\u4e00\u822c\u7ebf\u4e0a\u4e0d\u8f7b\u6613\u6253dump\u3002"),(0,r.kt)("h2",{id:"\u6392\u67e5"},"\u6392\u67e5"),(0,r.kt)("p",null,"\u628aheap dump\u4e0b\u8f7d\u5230\u672c\u5730\u4e4b\u540e\uff0c\u7528MAT\u6253\u5f00\u3002\u597d\u5bb6\u4f19250\u591a\u4e07\u7684Class\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u786e\u5b9a\u662fmetaspace\u51fa\u95ee\u9898\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MAT\u5206\u6790heap dump",src:a(8088).Z,width:"875",height:"502"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u8fd8\u6709\u4e2a\u63d2\u66f2\uff0c\u5728\u7528MAT\u6253\u5f00\u7684\u65f6\u5019\uff0c\u4e00\u76f4\u5361\u5728\u5206\u6790unreachable objects\u7684\u8fd9\u4e00\u6b65\u3002\u8fd9\u4e2adump\u53ea\u67098G\uff0c\u4e4b\u524d\u5206\u679030G\u7684dump\u90fd\u6ca1\u5361\u4f4f\uff0c\u67e5\u4e86\u4e00\u4e0b\u628a\u8fd9\u4e00\u6b65\u8df3\u8fc7\u5c31\u987a\u5229\u6253\u5f00\u4e86\u3002")),(0,r.kt)("p",null,"\u76f4\u63a5\u901a\u8fc7MAT\u67e5\u770bClass\u7684\u5f15\u7528\u5173\u7cfb\uff0c\u5e76\u770b\u4e0d\u51fa\u662f\u600e\u4e48\u4ea7\u751f\u7684\u3002\u540e\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"DelegatingClassLoader"),"\u7684\u5f02\u5e38\uff0c\u4e5f\u662f\u540e\u6765\u53d1\u73b0\u7684\uff0c\u5f53\u65f6\u6ca1\u6ce8\u610f\u5230\u3002"),(0,r.kt)("p",null,"\u7f51\u4e0a\u4e00\u901a\u67e5\uff0c\u627e\u5230",(0,r.kt)("a",{parentName:"p",href:"https://heapdump.cn/article/54786"},"\u4ece\u4e00\u8d77GC\u8840\u6848\u8c08\u5230\u53cd\u5c04\u539f\u7406"),"\uff0c\u6309\u6b65\u9aa4\u53ef\u4ee5\u5b8c\u6574\u590d\u73b0\u3002"),(0,r.kt)("p",null,"\u7528sa-jni.jar dump\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"GeneratedMethodAccessor"),"\u7684\u5b57\u8282\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'20: aaload\n21: checkcast     #14                 // class "[B"\n24: invokestatic  #10                 // Method org/apache/hadoop/hbase/filter/FirstKeyOnlyFilter.parseFrom:([B)Lorg/apache/hadoop/hbase/filter/FirstKeyOnlyFilter;\n27: areturn\n')),(0,r.kt)("p",null,"\u770b24\u8fd9\u884c\uff0c\u8fd9\u91cc\u663e\u793a\u662f\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.hbase.filter.FirstKeyOnlyFilter.parseFrom()"),"\u65b9\u6cd5\uff0c\u8fd9\u662fHBase\u7684Filter\u529f\u80fd\u76f8\u5173\u7684\u7c7b\u3002\u90a3\u5c31\u76f4\u63a5\u53bb\u627e\u4ee3\u7801\uff0c\u770b\u4ec0\u4e48\u5730\u65b9\u4f1a\u7528\u53cd\u5c04\u5904\u7406Filter\u7684\u903b\u8f91\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"org.apache.hadoop.hbase.protobuf.ProtobufUtil#toFilter(org.apache.hadoop.hbase.protobuf.generated.FilterProtos.Filter)","org.apache.hadoop.hbase.protobuf.ProtobufUtil#toFilter(org.apache.hadoop.hbase.protobuf.generated.FilterProtos.Filter)":!0},'  /**\n   * Convert a protocol buffer Filter to a client Filter\n   *\n   * @param proto the protocol buffer Filter to convert\n   * @return the converted Filter\n   */\n  @SuppressWarnings("unchecked")\n  public static Filter toFilter(FilterProtos.Filter proto) throws IOException {\n    String type = proto.getName();\n    final byte [] value = proto.getSerializedFilter().toByteArray();\n    String funcName = "parseFrom";\n    try {\n      Class<?> c = Class.forName(type, true, ClassLoaderHolder.CLASS_LOADER);\n      Method parseFrom = c.getMethod(funcName, byte[].class);\n      if (parseFrom == null) {\n        throw new IOException("Unable to locate function: " + funcName + " in type: " + type);\n      }\n      return (Filter)parseFrom.invoke(c, value);\n    } catch (Exception e) {\n      // Either we couldn\'t instantiate the method object, or "parseFrom" failed.\n      // In either case, let\'s not retry.\n      throw new DoNotRetryIOException(e);\n    }\n  }\n')),(0,r.kt)("p",null,"\u627e\u5230\u552f\u4e00\u4e00\u5904\uff1aRS\u4ececlient\u53d1\u6765\u7684\u8bf7\u6c42\u4e2d\uff0c\u7528\u53cd\u5c04\u7684\u65b9\u5f0f\u89e3\u6790\u51faFilter\u3002\u90a3\u516b\u6210\u5c31\u662f\u8fd9\u4e2a\u5730\u65b9\u6709\u95ee\u9898\u4e86\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u8fd9\u4e2a\u5b57\u8282\u7801\u53ea\u80fd\u4ece\u8fd0\u884c\u4e2d\u7684\u8fdb\u7a0b\u4e2d\u53bb\u6293\uff0c\u6240\u4ee5\u5206\u6790dump\u7684\u8fdb\u7a0b\u548c\u6293\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"GeneratedMethodAccessor"),"\u5b57\u8282\u7801\u7684\u8fdb\u7a0b\u4e0d\u662f\u540c\u4e00\u4e2a\uff0c\u867d\u7136\u5b83\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"GeneratedMethodAccessor"),"\u6570\u91cf\u4e5f\u660e\u663e\u5f02\u5e38\uff0c\u5e76\u4e14\u7edd\u5927\u591a\u6570\u90fd\u548cFilter\u6709\u5173\uff0c\u4f46\u4e0d\u80fd\u767e\u5206\u767e\u8054\u7cfb\u8d77\u6765\uff0c\u540e\u9762\u6211\u4f1a\u518d\u6293\u4e00\u6b21\u73b0\u573a\u786e\u8ba4\u3002")),(0,r.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,r.kt)("p",null,"\u8865\u5145\u4e2a\u80cc\u666f\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u4f7f\u7528\u7684\u662fShenandoahGC\uff0c\u662f\u516c\u53f8\u5185\u81ea\u5df1\u7f16\u8bd1\u7684\u5305\u542bSGC\u7684JDK8\uff0c\u5e76\u4e0d\u662f\u793e\u533a\u7684\u53d1\u884c\u7248\u3002\u4e4b\u524d\u4e5f\u51fa\u73b0\u8fc7\u517c\u5bb9\u95ee\u9898\u5bfc\u81f4\u51facore dump\u3002\u800c\u4e14\u52a0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+ShenandoahAlwaysClearSoftRefs"),"\u914d\u7f6e\uff0c\u4e0d\u7ba1\u5176\u4ed6\u914d\u7f6e\uff0c\u76f4\u63a5\u6e05\u7406\u8f6f\u8fde\u63a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Unconditionally clear soft references, instead of using any \nother cleanup policy. This minimizes footprint at expense of\nmore soft reference churn in applications.\n")),(0,r.kt)("p",null,"\u7136\u540e\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://heapdump.cn/article/54786"},"\u4ece\u4e00\u8d77GC\u8840\u6848\u8c08\u5230\u53cd\u5c04\u539f\u7406"),"\u68b3\u7406\u4e0b\u539f\u56e0\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Java ",(0,r.kt)("inlineCode",{parentName:"li"},"Class"),"\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"reflectionData"),"\u662f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"SoftReference"),"\u4fee\u9970\u7684\uff0c\u4f1a\u5728GC\u65f6\u56de\u6536\uff0c\u800c\u56e0\u4e3a\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"-XX:+ShenandoahAlwaysClearSoftRefs"),"\u914d\u7f6e\uff0c\u56de\u6536\u8f6f\u8fde\u63a5\u4f1a\u66f4\u6fc0\u8fdb"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"Class"),"\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"li"},"Method"),"\u65f6\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"reflectionData"),"\u88ab\u56de\u6536\uff0c\u800c\u9700\u8981\u91cd\u65b0copy\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"Method")),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"Method.invoke"),"\u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"methodAccessor"),"\u53bb\u6267\u884c\u3002\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"Method"),"\u662fcopy\u4ea7\u751f\u7684\u65b0\u5bf9\u8c61\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"methodAccessor"),"\u4e5f\u662f\u65b0\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"methodAccessor"),"\u7684\u5b9e\u73b0\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"DelegatingMethodAccessorImpl"),"\uff0c\u8fd9\u662f\u4e2a\u5305\u88c5\u7c7b\uff0c\u5177\u4f53\u903b\u8f91\u4f1a\u59d4\u6d3e\u7ed9",(0,r.kt)("inlineCode",{parentName:"li"},"NativeMethodAccessorImpl"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"GeneratedMethodAccessorXXX"),"\uff0c\u540e\u9762XXX\u662f\u9012\u589e\u7684\u6570\u5b57\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"DelegatingMethodAccessorImpl"),"\u7684\u524d15\u6b21\u6267\u884c\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"NativeMethodAccessorImpl"),"\u5904\u7406\uff0c\u8d85\u51fa\u540e\u4ea7\u751f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"GeneratedMethodAccessorXXX"),"\u7c7b\u8fdb\u884c\u5904\u7406\uff0c\u800c\u8fd9\u4e9b\u5bf9\u4e8eJVM\u6765\u8bf4\u662f\u4e0d\u540c\u7684\u7c7b\uff0c\u5373\u90fd\u9700\u8981\u5728metaspace\u91cc\u5b58\u50a8\u81ea\u5df1\u7684\u5143\u4fe1\u606f\u3002\u8fd9\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"GeneratedMethodAccessorXXX"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"Class"),"\u6cdb\u6ee5\u7684\u539f\u56e0"),(0,r.kt)("li",{parentName:"ol"},"\u800c\u6bcf\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"GeneratedMethodAccessorXXX"),"\u90fd\u6709\u4e2a\u5355\u72ec\u7684ClassLoader\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"DelegatingClassLoader"),"\uff0c\u8fd9\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"DelegatingClassLoader"),"\u4e5f\u6709250\u591a\u4e07\u4e2a\u7684\u539f\u56e0")),(0,r.kt)("p",null,"\u76ee\u524d\u4e0d\u660e\u786e\u7684\u95ee\u9898\u8fd8\u6709\u4e3a\u4ec0\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"GeneratedMethodAccessor"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"DelegatingClassLoader"),"\u4e0d\u4f1a\u88ab\u56de\u6536\uff0c\u6211\u7406\u89e3\u5728metaspace\u4e0d\u65ad\u6269\u5927\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5e94\u8be5\u662f\u4f1a\u89e6\u53d1\u56de\u6536\u7684\u3002\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u548cSGC\u6709\u5173\u3002"),(0,r.kt)("h2",{id:"\u540e\u7eed"},"\u540e\u7eed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u56e0\u4e3aSGC\u540e\u7eed\u4e5f\u4e0d\u518d\u4f7f\u7528\uff0c\u5ef6\u8fdf\u654f\u611f\u7684\u4f1a\u4e0a\u5230JDK11\u7528ZGC\uff0c\u5ef6\u8fdf\u4e0d\u654f\u611f\u7684\u6362\u56deG1"),(0,r.kt)("li",{parentName:"ol"},"\u7b49\u5341\u4e00\u8282\u540e\uff0c\u5dee\u4e0d\u591a\u53c8\u6709\u8282\u70b9\u5185\u5b58\u98d9\u9ad8\u4e86\uff0c\u518d\u6293\u4e2a\u73b0\u573a\u9a8c\u8bc1\u4e0b\u524d\u6587\u5206\u6790\u7684\u903b\u8f91\uff0c \u8865\u4e0b\u56fe"),(0,r.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u4e0bG1\u5728\u9ad8\u5e76\u53d1\u7684\u60c5\u51b5\u4e0b\u75af\u72c2\u8c03\u7528\u8fd9\u4e2a\u53cd\u5c04\u7684\u903b\u8f91\uff0c\u4f1a\u4e0d\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u7684\u60c5\u51b5\uff0c\u5982\u679c\u4ecd\u7136\u5b58\u5728\uff0c\u9700\u8981\u7ee7\u7eed\u8003\u8651\u8c03\u53c2\uff0c\u6216\u8005\u63d0\u7ed9\u793e\u533a\u8ba8\u8bba\u4e0b\u8fd9\u91cc\u80fd\u4e0d\u80fd\u51cf\u5c11\u6216\u907f\u514d\u53cd\u5c04\u3002")),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://heapdump.cn/article/54786"},"\u4ece\u4e00\u8d77GC\u8840\u6848\u8c08\u5230\u53cd\u5c04\u539f\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chriswhocodes.com/"},"VM Options Explorer - OpenJDK11 HotSpot"))))}m.isMDXComponent=!0},6190:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arthas-metaspace-f8fc98cb1d45cf0d0323fc91ea224dcb.png"},3969:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/falcon-hbase-memory-b47d00049acc996af339c00bdffc680d.png"},7845:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/falcon-user-p95-04f97fcea864c0737fc4f98b172bad1f.png"},8088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mat-histogram-1b1c617244280ca10d06642ce51ab517.png"}}]);