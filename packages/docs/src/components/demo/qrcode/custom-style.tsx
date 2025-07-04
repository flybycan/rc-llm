import React from 'react';
import { QRCode } from '@rc-llm/components';

export default () => {
  return (
    <QRCode
      value="https://github.com/flybycan/rc-llm"
      size={200}
      fgColor="#1677ff"
      bgColor="#e6f4ff"
    />
  );
};
