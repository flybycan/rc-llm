import React from 'react';
import { Badge } from '@rc-llm/components';

const BadgeDotDemo = () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    <Badge dot>
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
    <Badge dot color="primary">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
  </div>
);

export default BadgeDotDemo;