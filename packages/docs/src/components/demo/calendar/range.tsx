import React, { useState } from 'react';
import { Calendar } from '@rc-llm/components';

export default () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3); // 设置最大可选日期为3个月后

  return (
    <div style={{ maxWidth: '400px' }}>
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
};