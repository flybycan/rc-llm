import React from 'react';
import { QRCode } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <QRCode value="https://github.com/flybycan/rc-llm" level="L" />
        <p>Level L</p>
      </div>
      <div>
        <QRCode value="https://github.com/flybycan/rc-llm" level="M" />
        <p>Level M</p>
      </div>
      <div>
        <QRCode value="https://github.com/flybycan/rc-llm" level="Q" />
        <p>Level Q</p>
      </div>
      <div>
        <QRCode value="https://github.com/flybycan/rc-llm" level="H" />
        <p>Level H</p>
      </div>
    </div>
  );
};
