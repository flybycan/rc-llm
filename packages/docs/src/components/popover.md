# Popover 气泡卡片

点击/悬停弹出气泡式的卡片浮层。

## 何时使用

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
- 和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

### 基础用法

最简单的用法，浮层的大小由内容区域决定。

<code src="./demo/popover/basic.tsx"></code>

### 完整示例

仿照图片中的效果，展示详细信息。

<code src="./demo/popover/example.tsx"></code>

### 位置

位置有 5 个方向，默认以父元素中心为基准进行定位。

<code src="./demo/popover/placement.tsx"></code>

### 触发方式

鼠标移入、聚焦、点击。

<code src="./demo/popover/trigger.tsx"></code>

### 中心定位和浮动效果

弹窗以父元素中心为基准定位，展示效果比父元素大，漂浮在父元素上面，不受父元素 overflow: hidden 影响。包含 center 模式的完整演示。

<code src="./demo/popover/centered.tsx"></code>

### 文档流定位

弹窗以父元素中心为基准展示，不以点击位置为基准，跟随文档流滚动。

<code src="./demo/popover/flow.tsx"></code>

### 受控模式

可以通过 `visible` 属性来控制 Popover 的显示和隐藏。

<code src="./demo/popover/controlled.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 卡片内容 | ReactNode | - |
| title | 卡片标题 | ReactNode | - |
| placement | 气泡框位置，可选 `top` `bottom` `left` `right` `center` | string | `bottom` |
| trigger | 触发行为，可选 `hover` `click` | string | `click` |
| closable | 是否显示关闭按钮 | boolean | `true` |
| visible | 用于手动控制浮层显隐 | boolean | - |
| onVisibleChange | 显示隐藏的回调 | (visible: boolean) => void | - |
| containerId | 定位容器的ID，用于限制弹窗显示范围 | string | - |
| autoAdjustSize | 是否自动调整弹窗大小以适应容器 | boolean | `true` |
| style | 自定义样式 | CSSProperties | - |
| className | 自定义类名 | string | - |
| children | 触发 Popover 的元素 | ReactElement | - |