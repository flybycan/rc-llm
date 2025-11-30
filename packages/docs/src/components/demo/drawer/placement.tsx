import React, { useState } from 'react';
import { Button, Drawer } from '@rc-llm/components';

type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';

export default function DrawerPlacementDemo() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerPlacement>('right');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlacement(e.target.value as DrawerPlacement);
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <label style={{ marginRight: 8 }}>
          <input type="radio" value="top" checked={placement === 'top'} onChange={onChange} />
          top
        </label>
        <label style={{ marginRight: 8 }}>
          <input type="radio" value="right" checked={placement === 'right'} onChange={onChange} />
          right
        </label>
        <label style={{ marginRight: 8 }}>
          <input type="radio" value="bottom" checked={placement === 'bottom'} onChange={onChange} />
          bottom
        </label>
        <label style={{ marginRight: 8 }}>
          <input type="radio" value="left" checked={placement === 'left'} onChange={onChange} />
          left
        </label>
      </div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
