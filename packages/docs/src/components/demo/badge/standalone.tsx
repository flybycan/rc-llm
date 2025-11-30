import React from 'react';
import { Badge } from '@rc-llm/components';
const BadgeStandaloneDemo = () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    <Badge content="16" standalone />
    <Badge content="Hot" color="primary" standalone />
    <Badge content="New" color="success" standalone />
    <Badge dot color="warning" standalone />
  </div>
);

export default BadgeStandaloneDemo;