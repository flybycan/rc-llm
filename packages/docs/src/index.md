# 欢迎来到 RC-LLM

RC-LLM 是一个基于 React 的移动端UI组件库，旨在提供高质量、易用且美观的组件，帮助开发者快速构建移动应用。

## 项目特性

- 🚀 **基于 React 18**: 充分利用 React 最新特性，提供高性能和流畅的用户体验。
- 📱 **专注移动端体验**: 组件设计和实现充分考虑移动设备特点，提供优秀的触控和响应式支持。
- 🎨 **简洁美观的设计风格**: 遵循现代设计趋势，提供一致且美观的视觉效果。
- 💪 **使用 TypeScript 开发**: 提供完整的类型定义，增强代码的可维护性和开发效率。
- 📦 **支持按需引入**: 减小打包体积，优化应用加载速度。

## 组件一览

以下是 RC-LLM 提供的所有组件，点击组件名称可查看详细文档和示例：

### 基础组件

- [Button 按钮](/components/button)
- [Input 输入框](/components/input)
- [Modal 对话框](/components/modal)
- [Cascader 级联选择](/components/cascader)
- [Upload 上传](/components/upload)

### 展示组件

- [Badge 徽标](/components/badge)
- [Calendar 日历](/components/calendar)
- [Drawer 抽屉](/components/drawer)
- [Image 图片](/components/image)
- [QRCode 二维码](/components/qrcode)

## 快速开始

### 安装

```bash
bun add @rc-llm/components
```

### 使用

```jsx
import { Button } from '@rc-llm/components';
import '@rc-llm/components/dist/style.css';

function App() {
  return (
    <Button type="primary">Hello RC-LLM</Button>
  );
}
```
