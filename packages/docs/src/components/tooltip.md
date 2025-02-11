# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 用于显示某个元素的详细信息
- 鼠标移入则显示提示，移出消失

## 代码演示

### 基础用法

最简单的用法。

<code src="./demo/tooltip/basic.tsx"></code>

### 不同的方向

Tooltip 支持 4 个方向的展示。

<code src="./demo/tooltip/placement.tsx"></code>

### 自定义样式

可以自定义背景颜色、文字颜色等样式。

<code src="./demo/tooltip/custom-style.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | ReactNode | - |
| placement | 气泡框位置，可选 `top` `bottom` `left` `right` | string | `top` |
| style | 自定义样式 | CSSProperties | - |
| className | 自定义类名 | string | - |
| children | 触发提示的元素 | ReactElement | - |