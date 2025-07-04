---
title: Cascader 级联选择
---

# Cascader 级联选择

这是一个用于级联选择的组件。

## 何时使用

当需要从一组相关联的数据集合中进行选择时，例如省市区、公司层级、事物分类等。

## 代码演示

### 基本用法

<code src="./demo/cascader/basic.tsx"></code>

### 受控组件

<code src="./demo/cascader/controlled.tsx"></code>

### 禁用状态

<code src="./demo/cascader/disabled.tsx"></code>

### 自定义触发器

<code src="./demo/cascader/custom-trigger.tsx"></code>

## API

### CascaderProps

| 属性名       | 说明           | 类型                     | 默认值   |
| ------------ | -------------- | ------------------------ | -------- |
| options      | 选项数据       | `CascaderOption[]`       | `[]`     |
| value        | 当前值         | `string[]`               | `[]`     |
| onChange     | 选择后的回调   | `(value: string[]) => void` | `-`      |
| placeholder  | 占位符         | `string`                 | `请选择` |

### CascaderOption

| 属性名   | 说明     | 类型     | 默认值 |
| -------- | -------- | -------- | ------ |
| value    | 选项值   | `string` | `-`    |
| label    | 选项标签 | `string` | `-`    |
| children | 子选项   | `CascaderOption[]` | `-`    |
