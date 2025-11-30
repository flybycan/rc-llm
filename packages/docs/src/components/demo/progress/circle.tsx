import React from 'react';
import { Progress } from '@rc-llm/components';

export default function ProgressCircleDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {/* 基础环形进度条 */}
      <Progress percent={75} circle />

      {/* 不同尺寸 */}
      <Progress percent={75} circle size="small" />
      <Progress percent={75} circle size="large" />

      {/* 自定义颜色 */}
      <Progress percent={75} circle color="#52c41a" />
      <Progress percent={75} circle color="#f5222d" />
      <Progress percent={100} circle color="#f5222d" />
      {/* 不显示进度文本 */}
      <Progress percent={75} circle showText={false} />
    </div>
  );
}