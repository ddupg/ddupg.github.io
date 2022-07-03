import { Classify } from "./interface";
const navigationData: Classify[] = [
  {
    name: "常用",
    intro: "常用网站",
    websites: [
      {
        name: "Github",
        url: "https://github.com",
        // icon: "qqemail",
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
    ],
  },
];
export default navigationData;
