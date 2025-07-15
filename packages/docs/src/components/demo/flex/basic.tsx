import React from 'react';
import { Flex } from '@rc-llm/components';

export default () => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>基础用法</h3>
      
      <h4>水平布局</h4>
      <Flex gap={16}>
        <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '4px' }}>Item 1</div>
        <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '4px' }}>Item 2</div>
        <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '4px' }}>Item 3</div>
      </Flex>
      
      <h4 style={{ marginTop: '20px' }}>垂直布局</h4>
      <Flex vertical gap={16}>
        <div style={{ padding: '20px', background: '#e6f4ff', borderRadius: '4px' }}>Item 1</div>
        <div style={{ padding: '20px', background: '#e6f4ff', borderRadius: '4px' }}>Item 2</div>
        <div style={{ padding: '20px', background: '#e6f4ff', borderRadius: '4px' }}>Item 3</div>
      </Flex>
      
      <h4 style={{ marginTop: '20px' }}>快捷方式</h4>
      <Flex horizontal gap={16}>
        <div style={{ padding: '20px', background: '#f6ffed', borderRadius: '4px' }}>Horizontal 1</div>
        <div style={{ padding: '20px', background: '#f6ffed', borderRadius: '4px' }}>Horizontal 2</div>
      </Flex>
      
      <Flex vertical gap={16} style={{ marginTop: '16px' }}>
        <div style={{ padding: '20px', background: '#fffbe6', borderRadius: '4px' }}>Vertical 1</div>
        <div style={{ padding: '20px', background: '#fffbe6', borderRadius: '4px' }}>Vertical 2</div>
      </Flex>
    </div>
  );
};
