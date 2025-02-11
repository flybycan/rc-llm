import React, { useState } from 'react';
import { Calendar } from '@rc-llm/components';

export default () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div style={{ maxWidth: '400px' }}>
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};