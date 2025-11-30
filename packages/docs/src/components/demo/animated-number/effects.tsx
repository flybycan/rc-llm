import React, { useState } from 'react';
import { AnimatedNumber, Button, Flex } from '@rc-llm/components';

export default function AnimatedNumberEffectsDemo() {
  const [value, setValue] = useState(1000);

  return (
    <Flex vertical gap={16}>
      <AnimatedNumber value={value} style={{ fontSize: '32px', fontWeight: 'bold' }} />
      <Button onClick={() => setValue(value + 100)}>Add 100</Button>
    </Flex>
  );
}
