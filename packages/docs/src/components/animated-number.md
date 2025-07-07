# AnimatedNumber 数字动画

AnimatedNumber 组件用于创建具有动画效果的数字展示，支持多种动画效果和格式化选项。

## 何时使用

- 展示重要的数据指标变化
- 需要吸引用户注意的数值展示
- 数据仪表盘和统计页面
- 金融数据和计数器展示

## 代码演示

<code src="./demo/animated-number/basic.tsx">基础用法</code>
<code src="./demo/animated-number/effects.tsx">动画效果</code>
<code src="./demo/animated-number/formatting.tsx">数字格式化</code>
<code src="./demo/animated-number/colors.tsx">颜色模式</code>
<code src="./demo/animated-number/responsive.tsx">响应式大小</code>

## API

| 参数                | 说明                    | 类型                                                                                                                                   | 默认值      |
| ------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| value               | 当前数值                | `number`                                                                                                                               | -           |
| effect              | 动画效果                | `'none' \| 'rolling' \| 'flip' \| 'pulse' \| 'crossfade' \| 'particle' \| 'typewriter' \| 'liquid' \| 'matrix' \| 'glow' \| 'physics'` | `'none'`    |
| duration            | 动画持续时间（毫秒）    | `number`                                                                                                                               | `1000`      |
| delay               | 动画延迟（毫秒）        | `number`                                                                                                                               | `0`         |
| easing              | 动画缓动函数            | `'linear' \| 'easeIn' \| 'easeOut' \| 'easeInOut' \| 'elastic' \| 'bounce'`                                                            | `'easeOut'` |
| format              | 数字格式化方式          | `'plain' \| 'currency' \| 'percentage' \| 'compact'`                                                                                   | `'plain'`   |
| precision           | 小数点位数              | `number`                                                                                                                               | `0`         |
| separator           | 千位分隔符              | `string`                                                                                                                               | `','`       |
| colorMode           | 颜色模式                | `'static' \| 'dynamic' \| 'threshold' \| 'gradient'`                                                                                   | `'static'`  |
| color               | 静态颜色                | `string`                                                                                                                               | `'#000000'` |
| increaseColor       | 增长颜色                | `string`                                                                                                                               | `'#52c41a'` |
| decreaseColor       | 减少颜色                | `string`                                                                                                                               | `'#ff4d4f'` |
| thresholds          | 阈值颜色配置            | `Array<{value: number, color: string}>`                                                                                                | `[]`        |
| prefix              | 数字前缀                | `React.ReactNode`                                                                                                                      | -           |
| suffix              | 数字后缀                | `React.ReactNode`                                                                                                                      | -           |
| currencySymbol      | 货币符号 (用于货币格式) | `string`                                                                                                                               | `'$'`       |
| responsiveSize      | 响应式字体大小          | `boolean`                                                                                                                              | `false`     |
| fontSize            | 基础字体大小            | `string \| number`                                                                                                                     | -           |
| style               | 自定义样式              | `React.CSSProperties`                                                                                                                  | -           |
| className           | 自定义类名              | `string`                                                                                                                               | -           |
| onAnimationComplete | 动画完成回调            | `() => void`                                                                                                                           | -           |

## 动画效果说明

| 效果名称   | 说明                                       |
| ---------- | ------------------------------------------ |
| none       | 无动画效果，直接显示数字                   |
| rolling    | 滚动计数器效果，类似老式机械计数器         |
| flip       | 翻牌效果，数字变化时翻转显示               |
| pulse      | 缩放脉冲效果，数字变化时放大缩小           |
| crossfade  | 渐变过渡效果，旧数字淡出，新数字淡入       |
| particle   | 粒子爆炸效果，数字变化时分解为粒子         |
| typewriter | 打字机效果，数字变化时逐字显示             |
| matrix     | 代码雨效果，数字变化时显示随机数字转换过程 |
| glow       | 光影流光效果，数字变化时产生发光效果       |

## 格式化选项

| 格式名称   | 说明                                | 示例        |
| ---------- | ----------------------------------- | ----------- |
| plain      | 普通数字格式，支持千位分隔符        | `1,234.56`  |
| currency   | 货币格式，添加货币符号              | `$1,234.56` |
| percentage | 百分比格式，数值乘以100并添加百分号 | `12.34%`    |
| compact    | 紧凑格式，大数值使用K、M、B等后缀   | `1.2M`      |

## 颜色模式

| 模式名称  | 说明                               |
| --------- | ---------------------------------- |
| static    | 静态颜色，使用指定的color值        |
| dynamic   | 动态颜色，根据数值增减变化颜色     |
| threshold | 阈值颜色，根据数值大小应用不同颜色 |
