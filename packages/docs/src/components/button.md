---
nav: 组件
group: 通用
title: Button 按钮
---

# Button 按钮

按钮用于开始一个即时操作。

## 代码演示

### 按钮类型

按钮有三种类型：主按钮、次按钮、危险按钮。

```tsx
import React from 'react';
import { Button } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button type="primary">主按钮</Button>
    <Button>次按钮</Button>
    <Button type="danger">危险按钮</Button>
  </div>
);
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

```tsx
import React from 'react';
import { Button } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button size="large">大按钮</Button>
    <Button>中按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
);
```

### 禁用状态

按钮的禁用状态。

```tsx
import React from 'react';
import { Button } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button disabled>禁用按钮</Button>
    <Button type="primary" disabled>禁用主按钮</Button>
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary'` \| `'default'` \| `'danger'` | `'default'` |
| size | 按钮大小 | `'large'` \| `'middle'` \| `'small'` | `'middle'` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击按钮时的回调 | `(e: React.MouseEvent<HTMLButtonElement>) => void` | - |