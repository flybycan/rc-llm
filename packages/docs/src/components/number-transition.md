# NumberTransition 数字过渡

数字过渡组件，用于展示数字变化时的动画效果。

## 何时使用

- 当需要展示数字变化时，提供平滑的过渡动画
- 适用于数据统计、计数器、金额变化等场景
- 需要突出数值变化的场景

## 代码演示

<code src="./demo/number-transition/basic.tsx">基础用法</code>
<code src="./demo/number-transition/precision.tsx">小数点精度</code>
<code src="./demo/number-transition/colorful.tsx">变化颜色</code>
<code src="./demo/number-transition/easing.tsx">不同缓动效果</code>
<code src="./demo/number-transition/prefix-suffix.tsx">前缀和后缀</code>

## API

| 参数      | 说明                     | 类型                                               | 默认值    |
| --------- | ------------------------ | -------------------------------------------------- | --------- |
| value     | 当前数值                 | `number`                                           | -         |
| duration  | 动画持续时间（毫秒）     | `number`                                           | 1000      |
| precision | 小数点位数               | `number`                                           | 0         |
| prefix    | 数字前缀                 | `React.ReactNode`                                  | -         |
| suffix    | 数字后缀                 | `React.ReactNode`                                  | -         |
| easing    | 动画缓动函数             | `'linear' \| 'easeInOut' \| 'easeIn' \| 'easeOut'` | 'easeOut' |
| colorful  | 是否在数值变化时改变颜色 | `boolean`                                          | false     |
| style     | 自定义样式               | `React.CSSProperties`                              | -         |
| className | 自定义类名               | `string`                                           | -         |
