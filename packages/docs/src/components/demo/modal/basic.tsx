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
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
