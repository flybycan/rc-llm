---
title: Flex 弹性布局
---

# Flex 弹性布局

基于 CSS Flexbox 的弹性布局组件，提供灵活的布局解决方案。

## 何时使用

- 需要一维布局（水平或垂直）
- 需要响应式布局
- 需要动态调整子元素的对齐和分布
- 需要创建复杂的页面结构

## 代码演示

### 基础用法

<code src="./demo/flex/basic.tsx"></code>

### 对齐方式

<code src="./demo/flex/alignment.tsx"></code>

### 换行控制

<code src="./demo/flex/wrap.tsx"></code>

### 响应式布局

<code src="./demo/flex/responsive.tsx"></code>

## API

### FlexProps

| 属性名        | 说明           | 类型                     | 默认值   |
| ------------- | -------------- | ------------------------ | -------- |
| children      | 子元素         | `React.ReactNode`        | `-`      |
| className     | 自定义样式类名 | `string`                 | `''`     |
| style         | 自定义样式     | `React.CSSProperties`    | `-`      |
| direction     | 主轴方向       | `FlexDirection`          | `'row'`  |
| wrap          | 是否换行       | `FlexWrap`               | `'nowrap'` |
| justify       | 主轴对齐方式   | `JustifyContent`         | `-`      |
| align         | 交叉轴对齐方式 | `AlignItems`             | `-`      |
| alignContent  | 多行对齐方式   | `AlignContent`           | `-`      |
| vertical      | 是否垂直布局   | `boolean`                | `false`  |
| horizontal    | 是否水平布局   | `boolean`                | `false`  |
| wrapEnabled   | 是否自动换行   | `boolean`                | `false`  |
| fill          | 是否填充父容器 | `boolean`                | `false`  |
| inline        | 是否内联显示   | `boolean`                | `false`  |
| gap           | 间距大小       | `number \| string`       | `-`      |
| space         | 子元素间距     | `number \| string`       | `-`      |
| responsive    | 是否响应式     | `boolean`                | `false`  |

### 类型定义

```typescript
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
```

## 注意事项

1. **性能优化**：组件使用纯 CSS 实现，无额外性能开销
2. **响应式设计**：支持响应式布局，可通过 `responsive` 属性启用
3. **浏览器兼容**：支持所有现代浏览器的 Flexbox 特性
4. **嵌套使用**：支持无限嵌套使用，创建复杂的布局结构
5. **间距控制**：支持 `gap` 和 `space` 属性控制子元素间距


