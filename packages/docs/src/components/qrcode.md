---
title: QRCode 二维码
---

# QRCode 二维码

这是一个用于生成二维码的组件。

## 何时使用

当需要将文本、链接或其他数据转换为二维码时。

## 代码演示

### 基本用法

<code src="./demo/qrcode/basic.tsx"></code>

### 自定义样式

<code src="./demo/qrcode/custom-style.tsx"></code>

### 错误纠正级别

<code src="./demo/qrcode/error-level.tsx"></code>

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
