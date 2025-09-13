import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const content = (
    <div>
      <p>这是一个详细的内容展示，包含了很多信息。</p>
      <p>可以有多行文本和各种内容。</p>
    </div>
  );

  return (
    <div style={{ padding: '80px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
      <Popover content={content} placement="top">
        <button>顶部显示</button>
      </Popover>
      
      <Popover content={content} placement="bottom">
        <button>底部显示</button>
      </Popover>
      
      <Popover content={content} placement="left">
        <button>左侧显示</button>
      </Popover>
      
      <Popover content={content} placement="right">
        <button>右侧显示</button>
      </Popover>
    </div>
  );
};