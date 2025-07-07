---
title: RC-LLM - 为移动端而生的 React 组件库
hero:
  title: RC-LLM
  description: 一套高质量的移动端 React 组件库，助力开发者快速构建出色的移动应用。
  actions:
    - text: 快速上手
      link: /components/overview
    - text: GitHub
      link: https://github.com/flybycan/rc-llm
features:
  - title: 基于 React 18
    description: 全面拥抱 React 最新特性，如并发模式，带来更流畅的用户体验。
  - title: 专注移动端
    description: 以移动端体验为核心，确保在触摸设备上的高性能和优良交互。
  - title: 简洁美观的设计
    description: 采用简洁、现代的设计风格，为用户提供舒适的视觉体验。
  - title: 全面支持 TypeScript
    description: 使用 TypeScript 开发，提供完整的类型定义，提升代码质量和可维护性。
  - title: 支持按需加载
    description: 支持按需引入组件，有效减小应用打包体积。
  - title: 易于扩展和定制
    description: 提供灵活的 API 和主题定制能力，满足多样化的业务需求。
---

## 快速上手

### 安装

```bash
pnpm add @rc-llm/components
```

### 使用

```jsx
import { Button } from "@rc-llm/components";
// 样式文件需要单独引入
// import '@rc-llm/components/dist/style.css';

export default function App() {
  return <Button type="primary">开始使用</Button>;
}
```
