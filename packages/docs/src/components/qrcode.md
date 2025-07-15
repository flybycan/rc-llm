---
title: QRCode 二维码
---

# QRCode 二维码

这是一个用于生成二维码的组件，支持错误展示、刷新机制和高度可配置化。

## 何时使用

当需要将文本、链接或其他数据转换为二维码时，支持以下场景：
- 需要显示加载状态
- 需要处理错误情况并提供刷新功能
- 需要自定义样式和交互行为
- 需要响应式设计

## 代码演示

### 基本用法

<code src="./demo/qrcode/basic.tsx"></code>

### 自定义样式

<code src="./demo/qrcode/custom-style.tsx"></code>

### 错误纠正级别

<code src="./demo/qrcode/error-level.tsx"></code>

### 加载状态

<code src="./demo/qrcode/loading.tsx"></code>

### 错误处理

<code src="./demo/qrcode/error-handling.tsx"></code>

### 高级配置

<code src="./demo/qrcode/advanced.tsx"></code>

## API

### QRCodeProps

| 属性名        | 说明           | 类型                     | 默认值   |
| ------------- | -------------- | ------------------------ | -------- |
| value         | 二维码内容     | `string`                 | `-`      |
| size          | 二维码大小     | `number`                 | `128`    |
| fgColor       | 二维码颜色     | `string`                 | `'#000000'` |
| bgColor       | 二维码背景色   | `string`                 | `'#FFFFFF'` |
| level         | 错误纠正级别   | `'L' \| 'M' \| 'Q' \| 'H'` | `'L'`    |
| includeMargin | 是否包含边距   | `boolean`                | `false`  |
| loading       | 是否显示加载状态 | `boolean`               | `false`  |
| error         | 错误信息       | `string`                 | `-`      |
| refreshable   | 是否可刷新     | `boolean`                | `true`   |
| onRefresh     | 刷新回调函数   | `() => void`             | `-`      |
| refreshIcon   | 自定义刷新图标 | `React.ReactNode`        | `-`      |
| errorIcon     | 自定义错误图标 | `React.ReactNode`        | `-`      |
| loadingIcon   | 自定义加载图标 | `React.ReactNode`        | `-`      |
| className     | 自定义样式类名 | `string`                 | `''`     |
| style         | 自定义样式     | `React.CSSProperties`    | `-`      |
| clickable     | 是否支持点击   | `boolean`                | `false`  |
| onClick       | 点击回调函数   | `() => void`             | `-`      |
| showMask      | 是否显示遮罩   | `boolean`                | `true`   |
| maskOpacity   | 遮罩透明度     | `number`                 | `0.8`    |
| maskColor     | 遮罩背景色     | `string`                 | `'#ffffff'` |

## 注意事项

1. **性能优化**：组件内部使用 `useCallback` 和 `useEffect` 进行性能优化，避免不必要的重渲染
2. **响应式设计**：支持响应式布局，在移动设备上自动调整字体大小和按钮尺寸
3. **无障碍支持**：所有交互元素都支持键盘操作和屏幕阅读器
4. **错误边界**：组件内部处理了错误状态，确保在异常情况下仍能正常显示
5. **刷新机制**：支持点击错误状态下的二维码进行刷新，也支持自定义刷新回调

## 更新日志

### v2.0.0
- ✅ 新增错误状态展示
- ✅ 新增刷新机制
- ✅ 新增加载状态
- ✅ 新增自定义图标支持
- ✅ 新增点击交互功能
- ✅ 新增遮罩层配置
- ✅ 新增样式自定义选项
- ✅ 优化响应式设计
- ✅ 提升可访问性
