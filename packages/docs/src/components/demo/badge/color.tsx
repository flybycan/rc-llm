import React from 'react';
import { Badge } from '@rc-llm/components';

const BadgeColorDemo = () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    <Badge content="6" color="primary">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
    <Badge content="8" color="success">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
    <Badge content="12" color="warning">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
    <Badge content="99+" color="#f50">
      <div style={{ width: '42px', height: '42px', background: '#eee' }} />
    </Badge>
  </div>
);

export default BadgeColorDemo;