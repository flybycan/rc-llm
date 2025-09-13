import { defineConfig } from "dumi";
import { resolve } from "path";

export default defineConfig({
  base: "/docs/",
  publicPath: "/docs/",
  themeConfig: {
    name: "RC-LLM",
    // logo: "/logo.png",
    nav: [{ title: "组件", link: "/components/overview" }],
    socialLinks: {
      github: "https://github.com/flybycan/rc-llm",
    },
    footer: "Made with ❤️ by RC-LLM Team",
    prefersColor: { default: "auto" },
    showLineNum: true,
    hd: {
      rules: [{ mode: "vw", options: [100, 750] }],
    },
    deviceWidth: 375,
    sidebar: {
      "/components": [
        {
          title: "组件总览",
          children: [{ title: "组件总览", link: "/components/overview" }],
        },
        {
          title: "基础组件",
          children: [
            { title: "Button 按钮", link: "/components/button" },
            { title: "FloatButton 浮动按钮", link: "/components/float-button" },
            { title: "Flex 弹性布局", link: "/components/flex" },
            { title: "Ellipsis 文本省略", link: "/components/ellipsis" },
          ],
        },
        {
          title: "数据录入",
          children: [
            { title: "Input 输入框", link: "/components/input" },
            { title: "DatePicker 日期选择", link: "/components/date-picker" },
            { title: "Cascader 级联选择", link: "/components/cascader" },
            { title: "Upload 上传", link: "/components/upload" },
          ],
        },
        {
          title: "数据展示",
          children: [
            { title: "Badge 徽标", link: "/components/badge" },
              { title: "Popover 浮窗", link: "/components/popover" },
            { title: "Calendar 日历", link: "/components/calendar" },
            { title: "Carousel 走马灯", link: "/components/carousel" },
            { title: "Image 图片", link: "/components/image" },
            { title: "lazyImage 懒加载图片", link: "/components/lazy-image" },
            { title: "Table 表格", link: "/components/table" },
            { title: "Tooltip 文字提示", link: "/components/tooltip" },
            { title: "Progress 进度条", link: "/components/progress" },
            { title: "QRCode 二维码", link: "/components/qrcode" },
            { title: "Skeleton 骨架屏", link: "/components/skeleton" },
            {
              title: "AnimatedNumber 数字动画",
              link: "/components/animated-number",
            },
            {
              title: "NumberTransition 数字滚动",
              link: "/components/number-transition",
            },
          ],
        },
        {
          title: "反馈组件",
          children: [
            { title: "Modal 对话框", link: "/components/modal" },
            { title: "Drawer 抽屉", link: "/components/drawer" },
          ],
        },
      ],
    },
  },
  locales: [
    // { id: "zh-CN", name: "中文" },
    // { id: "en-US", name: "English" },
  ],
  resolve: {
    atomDirs: [{ type: "component", dir: "src/components" }],
  },
  favicons: ["/logo.png"],
  outputPath: "dist",
  alias: {
    "@rc-llm/components": resolve(__dirname, "../components/src"),
  },
  styles: ["@rc-llm/components/dist/style.css"],
  theme: {
    "@c-primary": "#1677ff",
    "@c-primary-light": "#e6f4ff",
    "@c-text": "#333",
    "@c-text-secondary": "#666",
    "@c-border": "#f0f0f0",
    "@c-background": "#fff",
  },
});
