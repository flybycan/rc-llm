# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。

## 代码演示

### 基础用法

最简单的占位效果。

<code src="./demo/skeleton/basic.tsx"></code>

### 段落示例

可以通过组合不同大小的骨架屏组件来模拟段落内容。

<code src="./demo/skeleton/paragraph.tsx"></code>

### 列表示例

在列表场景中使用骨架屏。

<code src="./demo/skeleton/list.tsx"></code>

## API

### Skeleton

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `true` |
| circle | 是否显示为圆形 | `boolean` | `false` |
| width | 宽度 | `number \| string` | - |
| height | 高度 | `number \| string` | `16px` |
| style | 自定义样式 | `CSSProperties` | - |
| className | 自定义类名 | `string` | - |