import React from 'react';
import { QRCode } from '@rc-llm/components';

export default function QRCodeCustomStyleDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h3>自定义颜色样式</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            fgColor="#1677ff"
            bgColor="#e6f4ff"
          />
          <p>蓝色主题</p>
        </div>

        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            fgColor="#52c41a"
            bgColor="#f6ffed"
          />
          <p>绿色主题</p>
        </div>

        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            fgColor="#faad14"
            bgColor="#fffbe6"
          />
          <p>橙色主题</p>
        </div>

        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            fgColor="#f5222d"
            bgColor="#fff1f0"
          />
          <p>红色主题</p>
        </div>
      </div>

      <h3 style={{ marginTop: '30px' }}>自定义样式类</h3>
      <QRCode
        value="https://github.com/flybycan/rc-llm"
        size={150}
        className="custom-qrcode"
        style={{ border: '2px solid #1677ff', borderRadius: '8px', padding: '10px' }}
      />
    </div>
  );
}
