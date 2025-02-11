# DatePicker 日期选择器

用于选择日期的输入组件。

## 代码演示

<code src="./demo/date-picker/basic.tsx">基础用法</code>

<code src="./demo/date-picker/disabled.tsx">禁用状态</code>

<code src="./demo/date-picker/format.tsx">日期格式</code>

## API

### DatePicker

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的日期 | `Date` | - |
| defaultValue | 默认日期 | `Date` | - |
| onChange | 日期发生变化时的回调 | `(date: Date) => void` | - |
| format | 日期格式化 | `string` | `'YYYY-MM-DD'` |
| disabled | 是否禁用 | `boolean` | `false` |
| style | 自定义样式 | `CSSProperties` | - |
| className | 自定义类名 | `string` | - |
| showToday | 是否显示今天按钮 | `boolean` | `true` |
| disabledDate | 禁用的日期 | `(date: Date) => boolean` | - |