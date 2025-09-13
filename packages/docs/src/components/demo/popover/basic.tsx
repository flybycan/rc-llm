import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const content = (
    <div>
      <p>简介："心之与声 明为二物"。乐队成立于2018年。乐队名取自梵康《声无哀乐论》，音乐的核心思想也是对其的...</p>
      <p>地区：湖北省 武汉市 社交账号：<span style={{ color: '#ff6b6b' }}>🎵</span></p>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <Popover content={content} title="详细信息">
        <span style={{ color: '#1890ff', cursor: 'pointer' }}>详情</span>
      </Popover>
    </div>
  );
};