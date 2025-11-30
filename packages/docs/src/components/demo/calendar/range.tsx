import React from 'react';
import { Calendar } from '@rc-llm/components';

export default function CalendarRangeDemo() {
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <div style={{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
      <Calendar
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
}