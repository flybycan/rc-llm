import React from 'react';
import { DatePicker } from '@rc-llm/components';

export default function DatePickerDisabledDemo() {
  // 禁用今天之前的日期
  const disabledDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getTime() < today.getTime();
  };

  return (
    <div style={{ width: '300px' }}>
      <DatePicker disabled />
      <div style={{ marginTop: 20 }} />
      <DatePicker disabledDate={disabledDate} />
    </div>
  );
}