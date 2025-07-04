import React, { useState } from 'react';
import { Button, Modal } from '@rc-llm/components';

export default () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with custom footer
      </Button>
      <Modal
        title="Custom Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={(
          <Button type="danger" onClick={handleOk}>
            Custom Button
          </Button>
        )}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
