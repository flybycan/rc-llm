# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 代码演示

### 基本使用

```tsx
import React from 'react';
import { Input } from '@rc-llm/components';

export default () => (
  <div style={{ width: '320px' }}>
    <Input placeholder="请输入" />
  </div>
);
```

### 三种大小

```tsx
import React from 'react';
import { Input } from '@rc-llm/components';

export default () => (
  <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input size="large" placeholder="大尺寸" />
    <Input placeholder="默认尺寸" />
    <Input size="small" placeholder="小尺寸" />
  </div>
);
```

### 前缀和后缀

```tsx
import React from 'react';
import { Input } from '@rc-llm/components';

export default () => (
  <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input prefix="￥" placeholder="带前缀" />
    <Input suffix="RMB" placeholder="带后缀" />
    <Input prefix="￥" suffix="RMB" placeholder="带前后缀" />
  </div>
);
```

### 状态

```tsx
import React from 'react';
import { Input } from '@rc-llm/components';

export default () => (
  <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input status="error" placeholder="错误状态" />
    <Input status="warning" placeholder="警告状态" />
    <Input disabled placeholder="禁用状态" />
  </div>
);
```

### 带移除图标

```tsx
import React from 'react';
import { Input } from '@rc-llm/components';

export default () => (
  <div style={{ width: '320px' }}>
    <Input allowClear placeholder="支持清除" />
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框的值 | `string` | - |
| defaultValue | 输入框默认值 | `string` | `''` |
| placeholder | 输入框占位符 | `string` | - |
| type | 输入框类型 | `'text'` \| `'password'` | `'text'` |
| size | 输入框大小 | `'large'` \| `'middle'` \| `'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| allowClear | 是否显示清除按钮 | `boolean` | `false` |
| prefix | 前缀图标 | `ReactNode` | - |
| suffix | 后缀图标 | `ReactNode` | - |
| status | 输入框状态 | `'error'` \| `'warning'` | - |
| onChange | 输入框内容变化时的回调 | `(value: string) => void` | - |
| onFocus | 输入框获得焦点时的回调 | `() => void` | - |
| onBlur | 输入框失去焦点时的回调 | `() => void` | - |