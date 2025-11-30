import React from 'react';
import { AnimatedNumber, Flex } from '@rc-llm/components';

export default function AnimatedNumberFormattingDemo() {
  return (
    <Flex vertical gap={16}>
      <AnimatedNumber value={1234567.89} prefix="$" precision={2} />
      <AnimatedNumber value={98.76} suffix="%" precision={1} />
    </Flex>
  );
}
