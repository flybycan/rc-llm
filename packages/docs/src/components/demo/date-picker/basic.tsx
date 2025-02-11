import React from 'react';
import { DatePicker } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    {/* 基础用法 */}
    <DatePicker />

    {/* 设置默认值 */}
    <DatePicker defaultValue={new Date()} />
  </div>
);