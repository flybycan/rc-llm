import React, { useState } from 'react';
import { Button, Drawer } from '@rc-llm/components';

export default () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(false);

  return (
    <>
      <Button onClick={() => setVisibleLeft(true)}>Left</Button>
      <Button onClick={() => setVisibleRight(true)}>Right</Button>
      <Button onClick={() => setVisibleTop(true)}>Top</Button>
      <Button onClick={() => setVisibleBottom(true)}>Bottom</Button>

      <Drawer
        title="Left Drawer"
        placement="left"
        onClose={() => setVisibleLeft(false)}
        visible={visibleLeft}
      >
        <p>This is a left drawer.</p>
      </Drawer>
      <Drawer
        title="Right Drawer"
        placement="right"
        onClose={() => setVisibleRight(false)}
        visible={visibleRight}
      >
        <p>This is a right drawer.</p>
      </Drawer>
      <Drawer
        title="Top Drawer"
        placement="top"
        onClose={() => setVisibleTop(false)}
        visible={visibleTop}
        height={200}
      >
        <p>This is a top drawer.</p>
      </Drawer>
      <Drawer
        title="Bottom Drawer"
        placement="bottom"
        onClose={() => setVisibleBottom(false)}
        visible={visibleBottom}
        height={200}
      >
        <p>This is a bottom drawer.</p>
      </Drawer>
    </>
  );
};
