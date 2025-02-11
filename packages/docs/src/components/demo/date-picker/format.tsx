import React from 'react';
import { DatePicker } from '@rc-llm/components';

export default () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    {/* 自定义日期格式 */}
    <DatePicker format="YYYY年MM月DD日" />

    {/* 简化格式 */}
    <DatePicker format="MM/DD" />
  </div>
);