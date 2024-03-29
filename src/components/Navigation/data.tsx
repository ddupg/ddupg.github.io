import { Classify } from "./interface";
const navigationData: Classify[] = [
  {
    name: "常用",
    intro: "常用网站",
    websites: [
      {
        name: "Github",
        url: "https://github.com",
        intro: "全球最大同性交友网站。"
      },
      {
        name: "Linux命令搜索",
        url: "https://wangchujiang.com/linux-command/",
        intro: "Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集。"
      },
    ],
  },
  {
    name: "工具",
    intro: "工具类网站",
    websites: [
      {
        name: "可视化正则",
        url: "https://jex.im/regulex",
        intro: "可视化正则"
      },
      {
        name: "图片压缩",
        url: "https://picdiet.eula.club/",
        intro: "能极速压缩80%的图片大小，而不损害其质量"
      },
      {
        name: "Mermaid文档",
        url: "https://mermaid-js.github.io/mermaid/",
        intro: "Mermaid：Markdown画图"
      },
      {
        name: "Excalidraw",
        url: "https://excalidraw.com/",
        intro: "免费的手绘风格白板应用，能够画各种流程图、示意图、架构图"
      },
      {
        name: "6PEN Art",
        url: "https://6pen.art/",
        intro: "AI生成配图"
      },
      {
        name: "本机IP地址",
        url: "https://zh-hans.ipshu.com/my_info",
        intro: "自测发现，查询本机IP最准的网站"
      },
    ],
  },
  {
    name: "后端",
    intro: "后端开发相关资料网站",
    websites: [
      {
        name: "OpenJDK",
        url: "https://openjdk.org/",
        intro: "OpenJDK官网",
      },
      {
        name: "Maven官网",
        url: "https://maven.apache.org/",
        intro:  "Maven官网",
      },
      {
        name: "Maven历史版本下载",
        url: "https://archive.apache.org/dist/maven/maven-3/",
        intro: "maven3.x 历史版本下载"
      },
      {
        name: "GCeasy",
        url: "https://gceasy.io/",
        intro: "Java GC日志分析"
      },
      {
        name: "fastThread",
        url: "https://fastthread.io/",
        intro: "Java Thread Dump分析"
      },
      {
        name: "HeapHero",
        url: "https://heaphero.io/",
        intro: "Java Heap Dump分析"
      },
    ],
  },
  {
    name: "前端",
    intro: "前端开发相关资料网站",
    websites: [
      {
        name: "Docusaurus",
        url: "https://docusaurus.io/zh-CN/",
        intro: "快速构建以内容为核心的最佳网站",
      },
      {
        name: "Ant Design",
        url: "https://ant.design/index-cn",
        intro: "React UI 组件库，主要用于研发企业级中后台产品。",
      },
      {
        name: "Ant Design Pro",
        url: "https://pro.ant.design/zh-CN/",
        intro: "基于 Ant Design 和 umi 的封装的一整套企业级中后台前端/设计解决方案",
      },
      {
        name: "ProComponents",
        url: "https://procomponents.ant.design/",
        intro: "ProComponents 是基于 Ant Design 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。",
      },
      {
        name: "Matrial UI",
        url: "https://mui.com/zh/",
        intro: "Move faster with intuitive React UI tools",
      },
      {
        name: "Tailwind CSS",
        url: "https://www.tailwindcss.cn/",
        intro: "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
      },
      {
        name: "manypixels插图素材库",
        url: "https://www.manypixels.co/gallery",
        intro: "插画插图素材库免费下载，支持SVG/PNG",
      },
    ],
  },
  {
    name: "教程",
    intro: "开发教程类",
    websites: [
      {
        name: "Comprehensive Rust",
        url: "https://google.github.io/comprehensive-rust/",
        intro: "Google内部Rust教程",
      },
      {
        name: "凤凰架构",
        url: "https://icyfenix.cn/",
        intro: "构建可靠的大型分布式系统",
      },
      {
        name: "互联网公司常用框架源码赏析",
        url: "https://doocs.github.io/source-code-hunter/",
        intro: "互联网公司常用框架源码赏析",
      },
    ],
  },
];
export default navigationData;
