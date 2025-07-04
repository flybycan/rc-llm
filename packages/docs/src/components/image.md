---
title: Image 图片
---

# Image 图片

这是一个用于显示图片的组件。

## 何时使用

当需要展示图片，并可能需要加载状态、错误处理或图片预览功能时。

## 代码演示

### 基本用法

<code src="./demo/image/basic.tsx"></code>

### 错误处理

<code src="./demo/image/error.tsx"></code>

### 图片预览

<code src="./demo/image/preview.tsx"></code>

### 填充模式

<code src="./demo/image/object-fit.tsx"></code>

### 加载占位符

<code src="./demo/image/placeholder.tsx"></code>

## API

### ImageProps

| 属性名      | 说明         | 类型                                     | 默认值   |
| ----------- | ------------ | ---------------------------------------- | -------- |
| src         | 图片地址     | `string`                                 | `-`      |
| alt         | 替代文本     | `string`                                 | `''`     |
| width       | 宽度         | `string \| number`                       | `-`      |
| height      | 高度         | `string \| number`                       | `-`      |
| objectFit   | 填充模式     | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'fill'` |
| preview     | 是否可预览   | `boolean`                                | `false`  |
