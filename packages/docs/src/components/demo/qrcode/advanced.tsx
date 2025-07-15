import React, { useState } from 'react';
import { QRCode } from '@rc-llm/components';
import { Button } from '@rc-llm/components';

export default () => {
  const [clickCount, setClickCount] = useState(0);
  const [showMask, setShowMask] = useState(true);
  const [maskOpacity, setMaskOpacity] = useState(0.8);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  const toggleMask = () => {
    setShowMask(!showMask);
  };

  const changeOpacity = () => {
    setMaskOpacity(prev => prev === 0.8 ? 0.5 : 0.8);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>高级配置演示</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={toggleMask} style={{ marginRight: '10px' }}>
          {showMask ? '隐藏遮罩' : '显示遮罩'}
        </Button>
        <Button onClick={changeOpacity} style={{ marginRight: '10px' }}>
          切换透明度
        </Button>
        <span>点击次数: {clickCount}</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            clickable={true}
            onClick={handleClick}
            showMask={showMask}
            maskOpacity={maskOpacity}
            maskColor="#f0f0f0"
          />
          <p>可点击的二维码</p>
        </div>
        
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            showMask={false}
            style={{ 
              border: '2px dashed #1677ff', 
              borderRadius: '12px',
              padding: '10px'
            }}
          />
          <p>无遮罩 + 自定义边框</p>
        </div>
        
        <div>
          <QRCode
            value="https://github.com/flybycan/rc-llm"
            size={150}
            maskColor="#e6f4ff"
            maskOpacity={0.9}
          />
          <p>自定义遮罩颜色</p>
        </div>
      </div>
    </div>
  );
};
