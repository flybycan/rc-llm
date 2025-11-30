import React from 'react';
import { Popover, Button } from '@rc-llm/components';

export default function PopoverTriggerDemo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <Popover content={content} title="Title" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </div>
  );
}