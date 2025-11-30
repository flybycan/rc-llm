import React from 'react';
import { AnimatedNumber, Flex } from '@rc-llm/components';

export default function AnimatedNumberColorsDemo() {
  return (
    <Flex vertical gap={16}>
      <AnimatedNumber value={8848.86} style={{ color: '#52c41a', fontSize: '24px' }} />
      <AnimatedNumber value={-123.45} style={{ color: '#ff4d4f', fontSize: '24px' }} />
    </Flex>
  );
}
