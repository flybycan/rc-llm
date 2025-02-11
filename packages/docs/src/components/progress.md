# Progress 进度条

用于展示操作的当前进度。

## 何时使用

- 当需要显示一个操作进度时。
- 当需要显示一个操作完成的百分比时。

## 代码演示

### 基础用法

最简单的进度条。

<code src="./demo/progress/basic.tsx"></code>

### 环形进度条

圆形的进度条。

<code src="./demo/progress/circle.tsx"></code>

## API

### Progress

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度值，范围 0-100 | `number` | `0` |
| size | 进度条尺寸 | `'small' \| 'normal' \| 'large'` | `'normal'` |
| circle | 是否为环形进度条 | `boolean` | `false` |
| color | 进度条颜色 | `string` | `'#1677ff'` |
| showText | 是否显示进度文本 | `boolean` | `true` |
| style | 自定义样式 | `CSSProperties` | - |
| className | 自定义类名 | `string` | - |