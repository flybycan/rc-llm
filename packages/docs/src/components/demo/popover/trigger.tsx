import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const content = (
    <div>
      <p>这里是弹出的内容</p>
      <p>可以包含任意的 React 组件</p>
    </div>
  );

  return (
    <div style={{ padding: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Popover content={content} trigger="click" title="点击触发">
        <button>点击我</button>
      </Popover>
      
      <Popover content={content} trigger="hover" title="悬停触发">
        <button>悬停我</button>
      </Popover>
    </div>
  );
};