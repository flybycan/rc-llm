# Carousel 轮播

轮播组件用于循环播放图片、文本等内容。支持自动轮播、自定义切换时间、指示器样式等功能。

## 基础用法

最简单的用法，展示基本的轮播功能。

<code src="./demo/carousel/basic.tsx"></code>

## 自定义配置

可以自定义轮播间隔时间、动画时长、指示器样式等。

<code src="./demo/carousel/custom.tsx"></code>

## API

### Carousel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplayInterval | 自动轮播间隔时间（毫秒），设置为 0 时禁用自动轮播 | `number` | 3000 |
| showIndicators | 是否显示指示器 | `boolean` | true |
| showArrows | 是否显示切换按钮 | `boolean` | true |
| animationDuration | 切换动画时长（毫秒） | `number` | 300 |
| indicatorRender | 自定义指示器渲染 | `(index: number, isActive: boolean) => ReactNode` | - |
| onChange | 切换时的回调 | `(current: number) => void` | - |