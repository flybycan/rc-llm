import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  themeConfig: {
    name: 'RC-LLM',
    nav: [
    //   { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/overview' },
    ],
    socialLinks: {
      github: 'https://github.com/flybycan/rc-llm',
    },
    footer: 'Made with ❤️ by RC-LLM Team',
    prefersColor: { default: 'auto' },
    showLineNum: true,
    hd: {
      rules: [{ mode: 'vw', options: [100, 750] }],
    },
    deviceWidth: 375,
    sidebarGroups: {
      '/guide': [
        {
          title: '介绍',
          children: [
            { title: '快速上手', link: '/guide' },
            { title: '开发指南', link: '/guide/development' },
          ],
        },
      ],
      '/components': [
        {
          title: '组件总览',
          children: [
            { title: '组件总览', link: '/components/overview' },
          ],
        },
        {
          title: '基础组件',
          children: [
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Input 输入框', link: '/components/input' },
          ],
        },
        {
          title: '展示组件',
          children: [
            { title: 'Badge 徽标', link: '/components/badge' },
            { title: 'Calendar 日历', link: '/components/calendar' },
          ],
        },
      ],
    },
  },
  locales: [{ id: 'zh-CN', name: '中文' }, { id: 'en-US', name: 'English' }],
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'docs', dir: 'src/docs' },
    ],
  },
  favicons: ['/logo.png'],
  logo: '/logo.png',
  outputPath: 'dist',
  alias: {
    '@rc-llm/components': resolve(__dirname, '../components/src')
  },
  styles: [
    '@rc-llm/components/dist/style.css'
  ],
  theme: {
    '@c-primary': '#1677ff',
    '@c-primary-light': '#e6f4ff',
    '@c-text': '#333',
    '@c-text-secondary': '#666',
    '@c-border': '#f0f0f0',
    '@c-background': '#fff',
  },
});