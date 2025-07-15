
---
title: DraggableFloat 可拖拽浮动
nav: components
group:
  title: 其他
---

## DraggableFloat 可拖拽浮动

一个可以自由拖拽的浮动容器，支持在整个视口或指定元素内进行拖拽。

### 何时使用

- 需要创建一个可由用户自由移动位置的悬浮窗，如工具面板、辅助信息窗等。
- 在开发或配置阶段，需要模拟一个固定区域（如移动端视口），并在此区域内移动组件。

### 代码演示

<code src="./demo/draggable-float/basic.tsx" title="基本用法"></code>

<code src="./demo/draggable-float/boundary.tsx" title="限制在父元素内拖拽"></code>

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `children` | 浮动窗体的内容 | `React.ReactNode` | - |
| `initialPosition` | 初始位置，格式为 `{ x: number, y: number }` | `object` | `{ x: 100, y: 100 }` |
| `boundaryRef` | 拖拽边界元素的引用，如果提供，则只能在该元素内部拖拽 | `React.RefObject<HTMLElement>` | - |
| `style` | 自定义内联样式 | `CSSProperties` | - |
| `className` | 自定义 CSS 类名 | `string` | - |
