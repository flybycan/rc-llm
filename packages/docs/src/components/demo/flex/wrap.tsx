import React, { useState } from 'react';
import { Flex, Button } from '@rc-llm/components';

export default function FlexWrapDemo() {
  const [wrap, setWrap] = useState<'nowrap' | 'wrap' | 'wrap-reverse'>('nowrap');
  const [itemCount, setItemCount] = useState(5);

  const wrapOptions: Array<'nowrap' | 'wrap' | 'wrap-reverse'> = ['nowrap', 'wrap', 'wrap-reverse'];

  return (
    <div style={{ padding: '20px' }}>
      <h3>换行演示（带控制面板）</h3>

      <div style={{ marginBottom: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h4>控制面板</h4>
        <Flex gap={16} wrapEnabled>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>换行方式:</label>
            <Flex gap={8} wrapEnabled>
              {wrapOptions.map(option => (
                <Button
                  key={option}
                  size="small"
                  type={wrap === option ? 'primary' : 'default'}
                  onClick={() => setWrap(option)}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>项目数量:</label>
            <Flex gap={8} wrapEnabled>
              {[3, 5, 8].map(count => (
                <Button
                  key={count}
                  size="small"
                  type={itemCount === count ? 'primary' : 'default'}
                  onClick={() => setItemCount(count)}
                >
                  {count} 个
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
        overflow: 'auto'
      }}>
        <Flex
          wrap={wrap}
          gap={16}
          style={{
            background: '#f0f0f0',
            padding: '20px',
            borderRadius: '4px',
            minWidth: '600px',
            border: '2px dashed #ccc'
          }}
        >
          {Array.from({ length: itemCount }, (_, i) => (
            <div
              key={i}
              style={{
                minWidth: '150px',
                padding: '20px',
                background: `hsl(${i * 45}, 70%, 50%)`,
                color: 'white',
                borderRadius: '4px',
                textAlign: 'center'
              }}
            >
              Item {i + 1}
            </div>
          ))}
        </Flex>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#f6ffed', borderRadius: '8px' }}>
        <h4>当前配置</h4>
        <Flex gap={16} wrapEnabled>
          <span>换行方式: <strong>{wrap}</strong></span>
          <span>项目数量: <strong>{itemCount}</strong></span>
        </Flex>
      </div>
    </div>
  );
}
