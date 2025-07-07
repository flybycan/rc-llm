# FloatButton 悬浮按钮

悬浮按钮是一种固定在页面角落的按钮，通常用于提供快捷操作。

## 何时使用

- 当页面需要一个不随页面滚动的操作按钮时
- 当需要提供返回顶部、快速创建等常用功能时
- 当页面空间有限，需要将次要操作收纳起来时

## 代码演示

<code src="./demo/float-button/basic.tsx">基础用法</code>
<code src="./demo/float-button/position.tsx">不同位置</code>
<code src="./demo/float-button/shape.tsx">不同形状</code>
<code src="./demo/float-button/text.tsx">带文本的按钮</code>
<code src="./demo/float-button/scroll.tsx">滚动显示</code>

## API

### FloatButton

| 参数             | 说明                                     | 类型                                                           | 默认值           |
| ---------------- | ---------------------------------------- | -------------------------------------------------------------- | ---------------- |
| type             | 按钮类型                                 | `'primary' \| 'default' \| 'danger'`                           | `'primary'`      |
| shape            | 按钮形状                                 | `'circle' \| 'square'`                                         | `'circle'`       |
| size             | 按钮尺寸                                 | `'large' \| 'middle' \| 'small'`                               | `'middle'`       |
| icon             | 按钮图标                                 | `React.ReactNode`                                              | -                |
| children         | 按钮内容（仅在 `shape="square"` 时有效） | `React.ReactNode`                                              | -                |
| position         | 按钮位置                                 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'bottom-right'` |
| offset           | 距离边缘的距离                           | `number`                                                       | `24`             |
| visible          | 是否显示                                 | `boolean`                                                      | `true`           |
| disabled         | 是否禁用                                 | `boolean`                                                      | `false`          |
| onClick          | 点击事件                                 | `(e: React.MouseEvent<HTMLButtonElement>) => void`             | -                |
| style            | 自定义样式                               | `React.CSSProperties`                                          | -                |
| className        | 自定义类名                               | `string`                                                       | -                |
| visibilityHeight | 触发显示的滚动高度                       | `number`                                                       | -                |
| shadow           | 是否有阴影                               | `boolean`                                                      | `true`           |
| ripple           | 是否有波纹效果                           | `boolean`                                                      | `true`           |

## 注意事项

1. FloatButton 组件使用 `position: fixed` 定位，在某些容器内可能会导致定位问题。
2. 当使用 `visibilityHeight` 属性时，按钮会根据页面滚动位置自动显示/隐藏。
3. 带文本的按钮需要设置 `shape="square"`，否则文本将不会显示。
