import React from 'react';
import { Skeleton } from '@rc-llm/components';

export default function SkeletonListDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* 列表项 */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          style={{
            display: 'flex',
            gap: '16px',
            padding: '16px',
            background: '#fff',
            borderRadius: '8px',
          }}
        >
          <Skeleton circle width={48} height={48} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            <Skeleton width={120} height={20} />
            <Skeleton width="60%" />
          </div>
        </div>
      ))}
    </div>
  );
}