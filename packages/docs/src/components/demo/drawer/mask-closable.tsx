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
        Open Drawer (Mask not closable)
      </Button>
      <Drawer
        title="Mask Not Closable Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        maskClosable={false}
      >
        <p>Click mask will not close the drawer.</p>
      </Drawer>
    </>
  );
};
