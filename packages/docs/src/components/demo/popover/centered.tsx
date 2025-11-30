import React from 'react';
import { Popover, Button } from '@rc-llm/components';

export default function PopoverCenteredDemo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <Popover content={content} title="Title" placement="center">
        <Button>Center</Button>
      </Popover>
    </div>
  );
}