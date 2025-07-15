import React from 'react';
import { QRCode } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>基础用法</h3>
      <QRCode value="https://github.com/flybycan/rc-llm" size={150} />
      
      <h3 style={{ marginTop: '20px' }}>自定义大小</h3>
      <QRCode value="https://github.com/flybycan/rc-llm" size={200} />
      
      <h3 style={{ marginTop: '20px' }}>小尺寸</h3>
      <QRCode value="https://github.com/flybycan/rc-llm" size={80} />
    </div>
  );
};
