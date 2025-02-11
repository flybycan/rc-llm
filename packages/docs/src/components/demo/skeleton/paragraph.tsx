import React from 'react';
import { Skeleton } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {/* 标题 */}
    <Skeleton width={200} height={24} />

    {/* 段落内容 */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Skeleton width="100%" />
      <Skeleton width="95%" />
      <Skeleton width="90%" />
    </div>

    {/* 图文混排 */}
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <Skeleton circle width={60} height={60} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <Skeleton width={120} height={20} />
        <Skeleton width="100%" />
        <Skeleton width="90%" />
      </div>
    </div>
  </div>
);