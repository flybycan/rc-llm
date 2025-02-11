import React from 'react';
import { DatePicker } from '@rc-llm/components';

export default () => {
  // 禁用今天之前的日期
  const disabledDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getTime() < today.getTime();
  };

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      {/* 禁用状态 */}
      <DatePicker disabled />

      {/* 禁用特定日期 */}
      <DatePicker disabledDate={disabledDate} />
    </div>
  );
};