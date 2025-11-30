import React from 'react';
import { Popover, Button } from '@rc-llm/components';

const PopoverPlacementDemo = () => {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div className="demo" style={{ padding: '40px', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
      <Popover placement="top" title={text} content={content}>
        <Button>Top</Button>
      </Popover>
      <Popover placement="bottom" title={text} content={content}>
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="left" title={text} content={content}>
        <Button>Left</Button>
      </Popover>
      <Popover placement="right" title={text} content={content}>
        <Button>Right</Button>
      </Popover>
      <Popover placement="center" title={text} content={content}>
        <Button>Center</Button>
      </Popover>
    </div>
  );
};

export default PopoverPlacementDemo;