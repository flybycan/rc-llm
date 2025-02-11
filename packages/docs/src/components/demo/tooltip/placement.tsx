import React from 'react';
import { Tooltip } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ padding: '40px', display: 'flex', gap: '100px', flexWrap: 'wrap' }}>
      <Tooltip title="上方的提示" placement="top">
        <span>上方</span>
      </Tooltip>
      <Tooltip title="下方的提示" placement="bottom">
        <span>下方</span>
      </Tooltip>
      <Tooltip title="左侧的提示" placement="left">
        <span>左侧</span>
      </Tooltip>
      <Tooltip title="右侧的提示" placement="right">
        <span>右侧</span>
      </Tooltip>
    </div>
  );
};