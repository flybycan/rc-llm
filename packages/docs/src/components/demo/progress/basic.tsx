import React from 'react';
import { Progress } from '@rc-llm/components';

export default function ProgressBasicDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* 基础进度条 */}
      <Progress percent={30} />

      {/* 不同尺寸 */}
      <Progress percent={50} size="small" />
      <Progress percent={70} size="large" />
      <Progress percent={100} size="large" />
      {/* 自定义颜色 */}
      <Progress percent={40} color="#52c41a" />

      {/* 不显示进度文本 */}
      <Progress percent={60} showText={false} />
    </div>
  );
}