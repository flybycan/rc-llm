import React from 'react';
import { DatePicker, Flex } from '@rc-llm/components';

export default function DatePickerBasicDemo() {
  return (
    <Flex vertical gap={12}>
      <DatePicker />
    </Flex>
  );
}