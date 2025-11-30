import React from 'react';
import { AnimatedNumber } from '@rc-llm/components';

export default function AnimatedNumberResponsiveDemo() {
  return (
    <div style={{ fontSize: 'clamp(24px, 5vw, 48px)' }}>
      <AnimatedNumber value={1000000} />
    </div>
  );
}
