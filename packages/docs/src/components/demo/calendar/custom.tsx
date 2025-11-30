import React from 'react';
import { Calendar } from '@rc-llm/components';

export default function CalendarCustomDemo() {
  return (
    <div style={{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
      <Calendar
        dateRender={(date) => (
          <div style={{ textAlign: 'center' }}>
            {date.getDate()}
            {date.getDate() === 1 && <div style={{ fontSize: '10px', color: 'red' }}>1st</div>}
          </div>
        )}
      />
    </div>
  );
}