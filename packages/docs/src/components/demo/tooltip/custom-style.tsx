import React from 'react';
import { Tooltip } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ padding: '40px', display: 'flex', gap: '20px' }}>
      <Tooltip
        title="自定义背景色的提示"
        style={{ backgroundColor: '#1677ff', fontSize: '12px' }}
      >
        <span>蓝色背景</span>
      </Tooltip>

      <Tooltip
        title="自定义样式的提示"
        style={{
          backgroundColor: '#f6ffed',
          color: '#52c41a',
          border: '1px solid #b7eb8f',
        }}
      >
        <span>绿色提示</span>
      </Tooltip>
    </div>
  );
};