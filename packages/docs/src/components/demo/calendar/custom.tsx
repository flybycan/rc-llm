import React, { useState } from 'react';
import { Calendar } from '@rc-llm/components';

export default () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const customDateRender = (date: Date) => {
    const day = date.getDate();
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: isWeekend ? '#ff4d4f' : 'inherit',
        }}
      >
        <span>{day}</span>
        {isWeekend && <span style={{ fontSize: '12px', marginTop: '2px' }}>周末</span>}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateRender={customDateRender}
      />
    </div>
  );
};