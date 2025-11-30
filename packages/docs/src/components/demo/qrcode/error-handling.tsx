import React, { useState } from 'react';
import { QRCode } from '@rc-llm/components';
import { Button } from '@rc-llm/components';

export default function QRCodeErrorHandlingDemo() {
  const [error, setError] = useState<string | undefined>(undefined);

  const showError = () => {
    setError('网络连接失败，请检查网络后重试');
  };

  const clearError = () => {
    setError(undefined);
  };

  const handleRefresh = () => {
    setError(undefined);
    // 模拟重新加载
    setTimeout(() => {
      setError('刷新后仍然失败，请稍后重试');
    }, 1000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>错误处理演示</h3>
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={showError} style={{ marginRight: '10px' }}>
          显示错误
        </Button>
        <Button onClick={clearError} style={{ marginRight: '10px' }}>
          清除错误
        </Button>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            error={error}
            onRefresh={handleRefresh}
          />
          <p>默认错误处理</p>
        </div>

        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            error={error}
            onRefresh={handleRefresh}
            errorIcon={
              <div style={{
                width: '40px',
                height: '40px',
                color: '#faad14',
                fontSize: '40px'
              }}>⚠️</div>
            }
            refreshIcon={
              <span style={{ fontSize: '12px' }}>🔄</span>
            }
          />
          <p>自定义错误图标</p>
        </div>

        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            error={error}
            refreshable={false}
          />
          <p>禁用刷新功能</p>
        </div>
      </div>
    </div>
  );
}
