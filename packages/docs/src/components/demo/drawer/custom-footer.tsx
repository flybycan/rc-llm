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
        Open Drawer with Custom Footer
      </Button>
      <Drawer
        title="Custom Footer Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={onClose} style={{ marginRight: 8 }}>Cancel</Button>
            <Button type="primary" onClick={onClose}>Submit</Button>
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
