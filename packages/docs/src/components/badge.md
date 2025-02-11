# Badge 徽标

在元素右上角展示徽标数字或小红点。

## 何时使用

- 用于展示消息数量、新消息提醒
- 用于显示状态变化的数字或文字提示
- 用于显示新功能、活动等提醒

## 代码演示

<code src="./demo/badge/basic.tsx">基础用法</code>
<code src="./demo/badge/dot.tsx">小红点</code>
<code src="./demo/badge/color.tsx">多彩徽标</code>
<code src="./demo/badge/standalone.tsx">独立使用</code>

## API

### Badge

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | `ReactNode` | - |
| color | 徽标颜色，可以是预设的 'primary' \| 'success' \| 'warning' \| 'danger' 或自定义颜色 | `string` | `'danger'` |
| dot | 是否显示为小红点 | `boolean` | `false` |
| position | 徽标位置 | `'top-right'` \| `'top-left'` \| `'bottom-right'` \| `'bottom-left'` | `'top-right'` |
| standalone | 是否独立使用（不包裹任何元素） | `boolean` | `false` |
| children | 包裹的子元素 | `ReactNode` | - |