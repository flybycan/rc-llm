# 组件总览

RC-LLM 是一个基于 React 的移动端组件库，提供了一系列高质量的基础组件，帮助开发者快速搭建移动应用。

## 特性

- 🚀 基于 React 18
- 📱 专注移动端体验
- 🎨 简洁美观的设计风格
- 💪 使用 TypeScript 开发，提供完整的类型定义
- 📦 支持按需引入

## 组件列表

### 基础组件

基础组件是构建应用程序的基本单元，包含了最常用的界面元素。

- [Button 按钮](/components/button) - 用于触发操作的按钮组件
- [Input 输入框](/components/input) - 用于输入内容的文本框组件

### 展示组件

展示组件用于展示内容和数据，帮助用户更好地理解和浏览信息。

- [Badge 徽标](/components/badge) - 用于显示徽标数或状态的组件
- [Calendar 日历](/components/calendar) - 用于日期展示和选择的组件

## 快速上手

### 安装

```bash
pnpm add @rc-llm/components
```

### 使用

```jsx
import { Button } from '@rc-llm/components';
// import '@rc-llm/components/dist/style.css';

function App() {
  return (
    <Button type="primary">开始使用</Button>
  );
}
```