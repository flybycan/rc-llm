import React from 'react';
import { Badge } from '@rc-llm/components';

const BadgeBasicDemo = () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    <Badge content="5">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
    <Badge content="99+">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
  </div>
);

export default BadgeBasicDemo;