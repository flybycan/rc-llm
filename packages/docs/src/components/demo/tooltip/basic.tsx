import React from 'react';
import { Tooltip } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ padding: '40px' }}>
      <Tooltip title="这是一个简单的提示">
        <span>鼠标移到这里</span>
      </Tooltip>
    </div>
  );
};