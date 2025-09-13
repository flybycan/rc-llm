import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const longContent = (
    <div style={{ lineHeight: '1.6' }}>
      <p>这是一个很长的内容，用来测试容器约束功能。当内容超出容器范围时，弹窗会自动调整大小和位置。</p>
      <p>我们可以指定容器ID来限制弹窗的显示范围，或者让它自动寻找最近的有定位属性的父容器。</p>
      <p>这样可以确保弹窗始终在合适的位置显示，不会超出容器边界。</p>
      <p>内容较多时会自动显示滚动条。</p>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>容器约束演示</h3>
      
      {/* 自动寻找父容器的示例 */}
      <div 
        style={{ 
          width: '500px', 
          height: '150px', 
          border: '2px solid #52c41a', 
          position: 'relative',
          overflow: 'hidden',
          margin: '20px 0',
          padding: '10px',
          backgroundColor: '#f6ffed',
          borderRadius: '8px'
        }}
      >
        <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>自动寻找父容器</p>
        <p style={{ margin: '0 0 10px', fontSize: '14px', color: '#666' }}>
          弹窗将自动在这个绿色边框的容器内显示（有 overflow 属性）
        </p>
        <Popover 
          content={longContent} 
          title="自动容器"
          placement="top"
        >
          <button style={{ marginRight: '10px' }}>顶部弹出</button>
        </Popover>
        
        <Popover 
          content={longContent} 
          title="左侧弹出"
          placement="left"
        >
          <button>左侧弹出</button>
        </Popover>
      </div>

      {/* 小容器示例 */}
      <div 
        style={{ 
          width: '300px', 
          height: '100px', 
          border: '2px solid #ff7875', 
          position: 'relative',
          margin: '20px 0',
          padding: '10px',
          backgroundColor: '#fff2f0',
          borderRadius: '8px'
        }}
      >
        <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>小容器</p>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          弹窗会自动调整以适应容器大小
        </p>
        <Popover 
          content={longContent} 
          title="自动调整"
        >
          <button>点击测试</button>
        </Popover>
      </div>
    </div>
  );
};