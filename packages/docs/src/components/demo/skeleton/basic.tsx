import React from 'react';
import { Skeleton } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {/* 基础用法 */}
    <Skeleton />

    {/* 自定义宽高 */}
    <Skeleton width={200} height={100} />

    {/* 圆形骨架屏 */}
    <Skeleton circle width={60} height={60} />

    {/* 无动画效果 */}
    <Skeleton active={false} />
  </div>
);