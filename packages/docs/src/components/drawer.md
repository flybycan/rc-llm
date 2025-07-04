---
title: Drawer 抽屉
---

# Drawer 抽屉

这是一个用于从屏幕边缘滑出的抽屉组件。

## 何时使用

需要一个临时性的侧边面板来展示额外信息或进行操作时。

## 代码演示

### 基本用法

<code src="./demo/drawer/basic.tsx"></code>

### 不同方向

<code src="./demo/drawer/placement.tsx"></code>

### 自定义页脚

<code src="./demo/drawer/custom-footer.tsx"></code>

### 蒙层不可关闭

<code src="./demo/drawer/mask-closable.tsx"></code>

### 自定义宽度和高度

<code src="./demo/drawer/custom-width-height.tsx"></code>

## API

### DrawerProps

| 属性名       | 说明                 | 类型                     | 默认值   |
| ------------ | -------------------- | ------------------------ | -------- |
| visible      | 是否可见             | `boolean`                | `false`  |
| title        | 标题                 | `React.ReactNode`        | `-`      |
| children     | 内容                 | `React.ReactNode`        | `-`      |
| onClose      | 关闭回调             | `() => void`             | `-`      |
| placement    | 抽屉方向             | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` |
| width        | 宽度                 | `string \| number`       | `256`    |
| height       | 高度                 | `string \| number`       | `256`    |
| maskClosable | 点击蒙层是否允许关闭 | `boolean`                | `true`   |
| footer       | 自定义页脚           | `React.ReactNode`        | `-`      |
