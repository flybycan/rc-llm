---
title: Ellipsis - 文本省略
nav:
  title: 组件
  path: /components
---

# Ellipsis 文本省略

用于在有限的空间内截断并显示文本，通常用于长文本的展示。

## 基本用法

最基础的文本省略用法。

<code src="./demo/ellipsis/basic.tsx"></code>

## 多行省略

可以设置 `rows` 属性来控制显示多行文本。

<code src="./demo/ellipsis/multiline.tsx"></code>

## 中间省略

通过设置 `mode="middle"`，可以实现文本从中间省略。

<code src="./demo/ellipsis/middle.tsx"></code>

## 可展开

通过设置 `expandable` 属性，可以提供展开和收起功能。

<code src="./demo/ellipsis/expandable.tsx"></code>

## API

| 属性         | 说明                                                 | 类型                                   | 默认值    |
| ------------ | ---------------------------------------------------- | -------------------------------------- | --------- |
| `children`   | 要省略的文本内容                                     | `string`                               | -         |
| `rows`       | 显示的行数 (在 `mode="tail"` 时生效)                 | `number`                               | `1`       |
| `expandable` | 是否可展开 (在 `mode="tail"` 时生效)                 | `boolean`                              | `false`   |
| `onExpand`   | 展开/收起时的回调                                    | `(expanded: boolean) => void`          | -         |
| `expandNode` | 自定义展开/收起按钮                                  | `(expanded: boolean) => React.ReactNode` | -         |
| `mode`       | 省略模式                                             | `'tail' \| 'middle'`                   | `'tail'`  |
| `style`      | 自定义样式                                           | `React.CSSProperties`                  | -         |
| `className`  | 自定义类名                                           | `string`                               | -         |
