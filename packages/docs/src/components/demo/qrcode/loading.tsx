import React, { useState } from 'react';
import { QRCode } from '@rc-llm/components';
import { Button } from '@rc-llm/components';

export default () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>加载状态演示</h3>
      <Button onClick={handleLoad} style={{ marginBottom: '20px' }}>
        模拟加载
      </Button>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            loading={loading}
          />
          <p>默认加载状态</p>
        </div>
        
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            loading={loading}
            loadingIcon={
              <div style={{ 
                width: '40px', 
                height: '40px', 
                border: '3px solid #f3f3f3',
                borderTop: '3px solid #52c41a',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            }
          />
          <p>自定义加载图标</p>
        </div>
      </div>
    </div>
  );
};
