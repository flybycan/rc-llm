---
title: Upload 上传
---

# Upload 上传

这是一个用于文件上传的组件。

## 何时使用

当需要将文件或图片上传到服务器时。

## 代码演示

### 基本用法

<code src="./demo/upload/basic.tsx"></code>

### 多文件上传

<code src="./demo/upload/multiple.tsx"></code>

### 限制文件类型

<code src="./demo/upload/accept.tsx"></code>

### 自定义上传按钮

<code src="./demo/upload/custom-button.tsx"></code>

## API

### UploadProps

| 属性名     | 说明           | 类型                     | 默认值   |
| ---------- | -------------- | ------------------------ | -------- |
| action     | 上传地址       | `string`                 | `-`      |
| accept     | 接受的文件类型 | `string`                 | `-`      |
| multiple   | 是否支持多选   | `boolean`                | `false`  |
| onSuccess  | 上传成功回调   | `(response: any, file: File) => void` | `-`      |
| onError    | 上传失败回调   | `(error: any, file: File) => void` | `-`      |
| onProgress | 上传中回调     | `(percent: number, file: File) => void` | `-`      |
| onChange   | 文件改变回调   | `(fileList: File[]) => void` | `-`      |
| children   | 自定义上传按钮 | `React.ReactNode`        | `-`      |
