import React from 'react';
import { Carousel } from '@rc-llm/components';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function CarouselBasicDemo() {
  return (
    <div style={{ width: '400px' }}>
      <Carousel>
        <div style={contentStyle}>1</div>
        <div style={contentStyle}>2</div>
        <div style={contentStyle}>3</div>
        <div style={contentStyle}>4</div>
      </Carousel>
    </div>
  );
}