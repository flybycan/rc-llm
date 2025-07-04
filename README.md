# RC-LLM

🚀 一个基于 React 的移动端UI组件库 | A Mobile UI Component Library Based on React

[![NPM version](https://img.shields.io/npm/v/@rc-llm/components.svg?style=flat)](https://npmjs.org/package/@rc-llm/components)
[![NPM downloads](https://img.shields.io/npm/dm/@rc-llm/components.svg?style=flat)](https://npmjs.org/package/@rc-llm/components)

## ✨ 特性 | Features

- 🚀 **基于 React 18**: 充分利用 React 最新特性，提供高性能和流畅的用户体验。
- 📱 **专注移动端体验**: 组件设计和实现充分考虑移动设备特点，提供优秀的触控和响应式支持。
- 🎨 **简洁美观的设计风格**: 遵循现代设计趋势，提供一致且美观的视觉效果。
- 💪 **使用 TypeScript 开发**: 提供完整的类型定义，增强代码的可维护性和开发效率。
- 📦 **支持按需引入**: 减小打包体积，优化应用加载速度。

## 📦 安装 | Installation

```bash
bun add @rc-llm/components
```

## 🔨 使用 | Usage

```jsx
import { Button } from '@rc-llm/components';
import '@rc-llm/components/dist/style.css';

function App() {
  return (
    <Button type="primary">Hello RC-LLM!</Button>
  );
}
```

## 💻 本地开发 | Local Development

1. **克隆仓库** | Clone the repository

```bash
git clone https://github.com/flybycan/rc-llm.git
cd rc-llm
```

2. **安装依赖** | Install dependencies

```bash
bun install
```

3. **启动开发服务** | Start development server

```bash
bun run dev
```

## 📂 项目结构 | Project Structure

```
rc-llm/
  ├── packages/
  │   ├── components/     # 核心组件库源码 | Core component library source code
  │   └── docs/          # 文档站点 | Documentation site
  ├── package.json        # 项目配置与脚本 | Project configuration and scripts
  └── README.md           # 项目说明 | Project README
```


## 📄 License

[MIT License](LICENSE)
