---
nav: 组件
group: 通用
title: Button 按钮
---

# RC-LLM 组件库

RC-LLM 是一个基于 React 的移动端 UI 组件库，提供了一系列高质量、可定制的组件，帮助开发者快速构建移动应用界面。

## 特性

- 🚀 基于 React 18 开发
- 📱 专注移动端交互体验
- 🎨 提供灵活的样式定制能力
- 📦 支持按需加载
- 🔧 使用 TypeScript 开发，提供完整的类型定义

## 安装

```bash
npm install @rc-llm/components
# 或者
yarn add @rc-llm/components
# 或者
pnpm add @rc-llm/components
```

## 快速上手

```jsx
import { Button } from '@rc-llm/components';
// import '@rc-llm/components/dist/index.css';

function App() {
  return (
    <Button type="primary">Hello RC-LLM!</Button>
  );
}
```

## 组件列表

目前提供了以下组件：

- Button 按钮：提供多种类型和尺寸的按钮组件

## 开发指南

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/your-username/rc-llm.git
cd rc-llm
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务
```bash
pnpm dev
```

### 项目结构

```
rc-llm/
  ├── packages/
  │   ├── components/     # 组件库源码
  │   └── docs/          # 文档站点
  └── package.json
```

### 贡献指南

1. Fork 项目并克隆到本地
2. 创建新的分支：`git checkout -b feature/your-feature`
3. 提交你的改动：`git commit -m 'feat: add some feature'`
4. 推送到远程分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 版本记录

### 1.0.0

- 🎉 首次发布
- ✨ 新增 Button 组件

## 协议

MIT License
