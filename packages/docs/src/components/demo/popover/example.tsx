import React from 'react';
import { Popover, Button } from '@rc-llm/components';

export default function PopoverExampleDemo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    </div>
  );
}