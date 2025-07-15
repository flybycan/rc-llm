import React from 'react';
import { QRCode } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>错误纠正级别对比</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <QRCode value="https://github.com/flybycan/rc-llm" level="L" size={120} />
          <p>Level L - 低 (~7%)</p>
        </div>
        <div>
          <QRCode value="https://github.com/flybycan/rc-llm" level="M" size={120} />
          <p>Level M - 中 (~15%)</p>
        </div>
        <div>
          <QRCode value="https://github.com/flybycan/rc-llm" level="Q" size={120} />
          <p>Level Q - 四分之一 (~25%)</p>
        </div>
        <div>
          <QRCode value="https://github.com/flybycan/rc-llm" level="H" size={120} />
          <p>Level H - 高 (~30%)</p>
        </div>
      </div>
      
      <h3 style={{ marginTop: '30px' }}>边距设置对比</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <QRCode value="https://github.com/flybycan/rc-llm" includeMargin={false} size={120} />
          <p>无边距</p>
        </div>
        <div>
          <QRCode value="https://github.com/flybycan/rc-llm" includeMargin={true} size={120} />
          <p>有边距</p>
        </div>
      </div>
    </div>
  );
};
