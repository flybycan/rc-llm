import React from 'react';
import { Popover, Button } from '@rc-llm/components';

export default function PopoverContainerDemo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <div id="container" style={{ position: 'relative', height: '200px', border: '1px solid #ccc', overflow: 'hidden' }}>
        <Popover content={content} title="Title" containerId="container">
          <Button>Container</Button>
        </Popover>
      </div>
    </div>
  );
}