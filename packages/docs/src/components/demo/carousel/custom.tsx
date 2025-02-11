import React from 'react';
import { Carousel } from '@rc-llm/components';

export default () => {
  // 自定义指示器渲染
  const customIndicator = (index: number, isActive: boolean) => (
    <div
      style={{
        width: '24px',
        height: '4px',
        background: isActive ? '#1890ff' : '#ddd',
        borderRadius: '2px',
        transition: 'background-color 0.3s',
      }}
    />
  );

  return (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3>自定义配置</h3>
      <Carousel
        autoplayInterval={5000}
        animationDuration={500}
        indicatorRender={customIndicator}
        onChange={(current) => console.log('当前页面:', current)}
      >
        <div style={{ height: '300px', background: '#f6ad55', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          自定义配置示例 1
        </div>
        <div style={{ height: '300px', background: '#68d391', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          自定义配置示例 2
        </div>
        <div style={{ height: '300px', background: '#63b3ed', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          自定义配置示例 3
        </div>
      </Carousel>
    </div>
  );
};