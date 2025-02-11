# Calendar 日历

日历组件，用于展示和选择日期。

## 代码演示

### 基础用法

<code src="./demo/calendar/basic.tsx"></code>

### 日期范围限制

<code src="./demo/calendar/range.tsx"></code>

### 自定义日期单元格

<code src="./demo/calendar/custom.tsx"></code>

## API

### Calendar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的日期 | `Date` | - |
| defaultValue | 默认选中的日期 | `Date` | `new Date()` |
| onChange | 日期变化时的回调函数 | `(date: Date) => void` | - |
| minDate | 最小可选日期 | `Date` | - |
| maxDate | 最大可选日期 | `Date` | - |
| showLunar | 是否显示农历 | `boolean` | `false` |
| dateRender | 自定义日期单元格的渲染 | `(date: Date) => ReactNode` | - |