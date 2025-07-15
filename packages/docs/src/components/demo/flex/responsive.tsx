import React, { useState } from 'react';
import { Flex, Button } from '@rc-llm/components';

export default () => {
  const [responsive, setResponsive] = useState(false);
  const [justify, setJustify] = useState<'flex-start' | 'center' | 'space-between'>('flex-start');
  const [layout, setLayout] = useState<'horizontal' | 'vertical' | 'sidebar'>('horizontal');

  return (
    <div style={{ padding: '20px' }}>
      <h3>响应式布局演示（带控制面板）</h3>
      
      <div style={{ marginBottom: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h4>控制面板</h4>
        <Flex vertical gap={16}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>响应式模式:</label>
            <Flex gap={8}>
              <Button
                size="small"
                type={responsive ? 'primary' : 'default'}
                onClick={() => setResponsive(true)}
              >
                启用
              </Button>
              <Button
                size="small"
                type={!responsive ? 'primary' : 'default'}
                onClick={() => setResponsive(false)}
              >
                禁用
              </Button>
            </Flex>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>主轴对齐:</label>
            <Flex gap={8} wrapEnabled>
              {['flex-start', 'center', 'space-between'].map(option => (
                <Button
                  key={option}
                  size="small"
                  type={justify === option ? 'primary' : 'default'}
                  onClick={() => setJustify(option as any)}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>布局类型:</label>
            <Flex gap={8} wrapEnabled>
              {['horizontal', 'vertical', 'sidebar'].map(option => (
                <Button
                  key={option}
                  size="small"
                  type={layout === option ? 'primary' : 'default'}
                  onClick={() => setLayout(option as any)}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          </div>
        </Flex>
      </div>

      {layout === 'horizontal' && (
        <div style={{ background: '#e6f4ff', padding: '20px', borderRadius: '8px' }}>
          <h4>水平布局示例</h4>
          <Flex 
            responsive={responsive} 
            justify={justify} 
            gap={16} 
            style={{ background: '#f0f0f0', padding: '20px', borderRadius: '4px' }}
          >
            <div style={{ flex: 1, padding: '20px', background: '#1677ff', color: 'white', borderRadius: '4px', minWidth: '150px' }}>响应式项目 1</div>
            <div style={{ flex: 1, padding: '20px', background: '#52c41a', color: 'white', borderRadius: '4px', minWidth: '150px' }}>响应式项目 2</div>
            <div style={{ flex: 1, padding: '20px', background: '#faad14', color: 'white', borderRadius: '4px', minWidth: '150px' }}>响应式项目 3</div>
          </Flex>
        </div>
      )}

      {layout === 'vertical' && (
        <div style={{ background: '#e6f4ff', padding: '20px', borderRadius: '8px' }}>
          <h4>垂直布局示例</h4>
          <Flex 
            vertical 
            responsive={responsive} 
            justify={justify} 
            gap={16} 
            style={{ background: '#f0f0f0', padding: '20px', borderRadius: '4px', minHeight: '200px' }}
          >
            <div style={{ padding: '20px', background: '#1677ff', color: 'white', borderRadius: '4px' }}>垂直项目 1</div>
            <div style={{ padding: '20px', background: '#52c41a', color: 'white', borderRadius: '4px' }}>垂直项目 2</div>
            <div style={{ padding: '20px', background: '#faad14', color: 'white', borderRadius: '4px' }}>垂直项目 3</div>
          </Flex>
        </div>
      )}

      {layout === 'sidebar' && (
        <div style={{ background: '#e6f4ff', padding: '20px', borderRadius: '8px' }}>
          <h4>侧边栏布局示例</h4>
          <Flex style={{ height: '250px', border: '1px solid #e8e8e8', borderRadius: '4px' }}>
            <div style={{ width: responsive ? '100%' : '200px', background: '#001529', color: 'white', padding: '20px', transition: 'width 0.3s' }}>
              <h5>侧边栏</h5>
              <Flex vertical gap={16}>
                <div>菜单项 1</div>
                <div>菜单项 2</div>
                <div>菜单项 3</div>
              </Flex>
            </div>
            <Flex fill style={{ padding: '20px', background: '#f5f5f5' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '4px', width: '100%' }}>
                <h5>主内容区</h5>
                <p>这是主内容区域，使用 Flex 布局实现侧边栏和主内容区的布局。</p>
                {responsive && <p style={{ color: '#52c41a', fontWeight: 'bold' }}>响应式模式已启用！</p>}
              </div>
            </Flex>
          </Flex>
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '15px', background: '#f6ffed', borderRadius: '8px' }}>
        <h4>当前配置</h4>
        <Flex gap={16} wrapEnabled>
          <span>响应式: <strong>{responsive ? '启用' : '禁用'}</strong></span>
          <span>主轴对齐: <strong>{justify}</strong></span>
          <span>布局类型: <strong>{layout}</strong></span>
        </Flex>
      </div>
    </div>
  );
};
