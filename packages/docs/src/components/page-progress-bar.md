---
nav: 组件
group: 反馈
title: PageProgressBar 页面进度条
---

# PageProgressBar 页面进度条

页面进度条组件，用于显示页面滚动阅读进度，固定在页面顶部。

## 代码演示

### 基础用法

基础的页面进度条，自动跟踪页面滚动位置。

```tsx
import React from 'react';
import { PageProgressBar } from '@rc-llm/components';

export default () => (
  <div>
    <PageProgressBar />
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>滚动页面查看进度条</h1>
      <p>向下滚动页面，顶部的进度条会显示当前阅读进度。</p>
      <div style={{ height: '150vh' }}>
        <p>这里是一些内容...</p>
      </div>
      <p>继续滚动以查看进度条变化。</p>
    </div>
  </div>
);
```

### 自定义颜色

可以自定义进度条的颜色。

```tsx
import React from 'react';
import { PageProgressBar } from '@rc-llm/components';

export default () => (
  <div>
    <PageProgressBar color="#ff6b6b" />
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>自定义颜色的进度条</h1>
      <p>这个进度条使用了自定义的红色。</p>
      <div style={{ height: '150vh' }}>
        <p>向下滚动查看效果...</p>
      </div>
    </div>
  </div>
);
```

### 自定义高度

可以自定义进度条的高度。

```tsx
import React from 'react';
import { PageProgressBar } from '@rc-llm/components';

export default () => (
  <div>
    <PageProgressBar height="8px" color="#4ecdc4" />
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>自定义高度的进度条</h1>
      <p>这个进度条高度为 8px。</p>
      <div style={{ height: '150vh' }}>
        <p>向下滚动查看效果...</p>
      </div>
    </div>
  </div>
);
```

### 完成回调

当进度条达到 100% 时触发回调函数。

```tsx
import React from 'react';
import { PageProgressBar, message } from '@rc-llm/components';

export default () => {
  const handleComplete = () => {
    alert('恭喜！您已阅读到页面底部');
  };

  return (
    <div>
      <PageProgressBar onComplete={handleComplete} color="#51cf66" />
      <div style={{ height: '200vh', padding: '20px' }}>
        <h1>带完成回调的进度条</h1>
        <p>滚动到页面底部会触发完成回调。</p>
        <div style={{ height: '150vh' }}>
          <p>继续向下滚动...</p>
        </div>
        <p>当您滚动到这里时，会显示完成消息。</p>
      </div>
    </div>
  );
};
```

### 自定义样式

可以使用自定义样式和类名。

```tsx
import React from 'react';
import { PageProgressBar } from '@rc-llm/components';

export default () => (
  <div>
    <PageProgressBar
      color="#845ef7"
      height="6px"
      className="my-custom-progress"
      style={{
        borderRadius: '3px',
        boxShadow: '0 2px 8px rgba(132, 94, 247, 0.3)'
      }}
    />
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>自定义样式的进度条</h1>
      <p>这个进度条使用了自定义样式。</p>
      <div style={{ height: '150vh' }}>
        <p>向下滚动查看效果...</p>
      </div>
    </div>
  </div>
);
```

### 指定容器

通过 `containerSelector` 属性指定滚动的容器。

```tsx
import React from 'react';
import { PageProgressBar } from '@rc-llm/components';

export default () => (
  <div>
    <PageProgressBar containerSelector="#demo-scroll-container" color="#faad14" />
    <div
      id="demo-scroll-container"
      style={{
        height: '300px',
        overflow: 'auto',
        border: '1px solid #eee',
      }}
    >
      <h3>容器内滚动</h3>
      <p>顶部的黄色进度条会显示这个容器的滚动进度。</p>
      <div style={{ height: '800px', background: 'linear-gradient(to bottom, #fff, #f0f0f0)' }}>
        <p style={{ paddingTop: '20px' }}>向下滚动...</p>
        <p style={{ marginTop: '200px' }}>继续滚动...</p>
        <p style={{ marginTop: '200px' }}>还有一点...</p>
        <p style={{ marginTop: '200px' }}>到底了！</p>
      </div>
    </div>
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 进度条的颜色 | `string` | `'#4a90e2'` |
| height | 进度条的高度 | `string` | `'4px'` |
| onComplete | 进度条达到 100% 时触发的回调函数 | `() => void` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| className | 自定义类名 | `string` | - |
| containerSelector | 自定义容器选择器 | `string` | - |

## 使用说明

- 组件会自动固定在页面顶部（`position: fixed`）
- 进度条宽度会根据页面滚动位置自动计算
- 当页面内容不足一屏时，进度条会显示为 100%
- 使用 `useRef` 优化，确保 `onComplete` 回调只触发一次
- 支持用户向上滚动时重置完成状态，允许再次触发回调
- 使用平滑的 CSS 过渡动画，提供良好的用户体验
- 组件层级（z-index: 9999）确保始终显示在最上层
- 设置 `pointer-events: none` 避免影响页面交互