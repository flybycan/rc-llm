import React from 'react';
import { Carousel } from '@rc-llm/components';

export default () => (
  <div style={{ width: '100%', maxWidth: '600px' }}>
    <Carousel>
      <div style={{ height: '300px', background: '#364d79', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        第一页
      </div>
      <div style={{ height: '300px', background: '#64a19d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        第二页
      </div>
      <div style={{ height: '300px', background: '#2a4365', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        第三页
      </div>
    </Carousel>
  </div>
);