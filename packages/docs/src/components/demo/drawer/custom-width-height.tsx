import React, { useState } from 'react';
import { Button, Drawer } from '@rc-llm/components';

export default () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open Drawer with Custom Size
      </Button>
      <Drawer
        title="Custom Size Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={500}
        height={300}
      >
        <p>This drawer has custom width and height.</p>
      </Drawer>
    </>
  );
};
