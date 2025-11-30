import React, { useState } from 'react';
import { Flex, Button } from '@rc-llm/components';

export default function FlexAlignmentDemo() {
  const [justify, setJustify] = useState<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>('flex-start');
  const [align, setAlign] = useState<'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'>('flex-start');
  const [direction, setDirection] = useState<'row' | 'column'>('row');

  const justifyOptions: Array<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'> = [
    'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
  ];

  const alignOptions: Array<'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'> = [
    'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
  ];

  const directionOptions: Array<'row' | 'column'> = ['row', 'column'];

  return (
    <div style={{ padding: '20px' }}>
      <h3>对齐方式演示（带控制面板）</h3>

      <div style={{ marginBottom: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h4>控制面板</h4>
        <Flex vertical gap={16}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>主轴对齐 (justify):</label>
            <Flex gap={8} wrapEnabled>
              {justifyOptions.map(option => (
                <Button
                  key={option}
                  size="small"
                  type={justify === option ? 'primary' : 'default'}
                  onClick={() => setJustify(option)}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>交叉轴对齐 (align):</label>
            <Flex gap={8} wrapEnabled>
              {alignOptions.map(option => (
                <Button
                  key={option}
                  size="small"
                  type={align === option ? 'primary' : 'default'}
                  onClick={() => setAlign(option)}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>方向 (direction):</label>
            <Flex gap={8}>
              {directionOptions.map(option => (
                <Button
                  key={option}
                  size="small"
                  type={direction === option ? 'primary' : 'default'}
                  onClick={() => setDirection(option)}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          </div>
        </Flex>
      </div>

      <div style={{
        background: '#e6f4ff',
        padding: '20px',
        borderRadius: '8px',
        minHeight: direction === 'column' ? '300px' : '200px'
      }}>
        <Flex
          direction={direction}
          justify={justify}
          align={align}
          gap={16}
          style={{
            background: '#f0f0f0',
            padding: '20px',
            borderRadius: '4px',
            minHeight: direction === 'column' ? '200px' : '100px',
            border: '2px dashed #ccc'
          }}
        >
          <div style={{ padding: '20px', background: '#1677ff', color: 'white', borderRadius: '4px', minWidth: '100px', textAlign: 'center' }}>Item 1</div>
          <div style={{ padding: '30px', background: '#52c41a', color: 'white', borderRadius: '4px', minWidth: '100px', textAlign: 'center' }}>Item 2</div>
          <div style={{ padding: '25px', background: '#faad14', color: 'white', borderRadius: '4px', minWidth: '100px', textAlign: 'center' }}>Item 3</div>
        </Flex>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#f6ffed', borderRadius: '8px' }}>
        <h4>当前配置</h4>
        <Flex gap={16} wrapEnabled>
          <span>方向: <strong>{direction}</strong></span>
          <span>主轴对齐: <strong>{justify}</strong></span>
          <span>交叉轴对齐: <strong>{align}</strong></span>
        </Flex>
      </div>
    </div>
  );
}
