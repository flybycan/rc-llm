import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const content = (
    <div style={{ lineHeight: '1.6' }}>
      <p>这是一个跟随文档流的弹窗，滚动页面时会跟随移动。</p>
      <p>弹窗以父元素中心为基准进行定位，而不是以点击位置为基准。</p>
      <p>这样可以确保弹窗始终与触发元素保持相对位置关系。</p>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>文档流定位演示</h3>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        弹窗使用 absolute 定位，会跟随页面滚动。以父元素中心为基准定位，不以点击位置为基准。
      </p>
      
      {/* 创建一个长页面来测试滚动效果 */}
      <div style={{ height: '200px', backgroundColor: '#f5f5f5', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <h4>区域 1</h4>
        <p>这是第一个区域的内容...</p>
        <Popover content={content} placement="right" title="右侧弹窗">
          <button style={{ marginTop: '10px' }}>点击我（右侧）</button>
        </Popover>
      </div>

      <div style={{ height: '200px', backgroundColor: '#fff2e8', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <h4>区域 2</h4>
        <p>这是第二个区域的内容...</p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Popover content={content} placement="top" title="顶部弹窗">
            <span style={{ color: '#1890ff', cursor: 'pointer', textDecoration: 'underline' }}>
              中心位置触发（顶部）
            </span>
          </Popover>
        </div>
      </div>

      <div style={{ height: '200px', backgroundColor: '#f6ffed', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <h4>区域 3</h4>
        <p>这是第三个区域的内容...</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <Popover content={content} placement="bottom" title="底部弹窗">
            <button style={{ padding: '8px 16px' }}>左侧按钮</button>
          </Popover>
          
          <Popover content={content} placement="left" title="左侧弹窗">
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#52c41a', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              fontSize: '12px'
            }}>
              点我
            </div>
          </Popover>
        </div>
      </div>

      <div style={{ height: '200px', backgroundColor: '#fff0f6', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <h4>区域 4</h4>
        <p>测试不同大小的触发元素...</p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '20px' }}>
          {/* 小元素 */}
          <Popover content={content} placement="top" title="小元素弹窗">
            <span style={{ 
              display: 'inline-block',
              width: '10px', 
              height: '10px', 
              backgroundColor: '#eb2f96', 
              borderRadius: '50%',
              cursor: 'pointer'
            }}></span>
          </Popover>
          
          {/* 中等元素 */}
          <Popover content={content} placement="bottom" title="中等元素弹窗">
            <button style={{ padding: '4px 12px', fontSize: '12px' }}>中等按钮</button>
          </Popover>
          
          {/* 大元素 */}
          <Popover content={content} placement="right" title="大元素弹窗">
            <div style={{ 
              padding: '16px 24px', 
              backgroundColor: '#eb2f96', 
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              大的触发区域
            </div>
          </Popover>
        </div>
      </div>

      <div style={{ height: '300px', backgroundColor: '#e6f7ff', padding: '20px', borderRadius: '8px' }}>
        <h4>区域 5 - 滚动测试区域</h4>
        <p style={{ marginBottom: '20px' }}>
          <strong>测试说明：</strong>点击下面的按钮打开弹窗，然后滚动页面，观察弹窗是否跟随文档流移动。
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Popover content={content} placement="top" title="滚动跟随测试">
            <button style={{ 
              padding: '12px 24px', 
              fontSize: '16px',
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              点击测试滚动跟随
            </button>
          </Popover>
        </div>
        
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            继续向下滚动查看更多内容...
          </p>
        </div>
      </div>

      {/* 添加 center 模式演示 */}
      <div style={{ marginBottom: '40px' }}>
        <h4>Center 模式演示</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          center 模式下，弹窗会充满容器大小，展示浮动效果
        </p>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {/* 指定容器的 center 模式 */}
          <div 
            id="center-container-1"
            style={{ 
              width: '300px', 
              height: '200px', 
              border: '2px solid #1890ff', 
              position: 'relative',
              padding: '20px',
              backgroundColor: '#f0f8ff',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Popover 
              content={
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h3>Center 模式弹窗</h3>
                  <p>这个弹窗充满了整个容器</p>
                  <p>滚动页面时会跟随容器一起移动</p>
                  <p>点击关闭按钮或点击外部可以关闭</p>
                </div>
              }
              // containerId="center-container-1"
              // @ts-ignore
              placement="center" 
              title="充满容器的弹窗"
            >
              <button style={{ padding: '12px 24px', backgroundColor: '#1890ff', color: 'white', border: 'none', borderRadius: '6px' }}>
                Center 模式
              </button>
            </Popover>
          </div>

          {/* 自动查找父容器的 center 模式 */}
          <div 
            style={{ 
              width: '250px', 
              height: '150px', 
              border: '2px solid #52c41a', 
              position: 'relative',
              overflow: 'hidden',
              padding: '15px',
              backgroundColor: '#f6ffed',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Popover 
              content={
                <div style={{ padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4>自动容器</h4>
                  <p>自动查找父容器并充满</p>
                  <p>overflow: hidden 不影响显示</p>
                </div>
              }
              // @ts-ignore
              placement="center" 
              title="自动容器模式"
            >
              <span style={{ color: '#52c41a', cursor: 'pointer', textDecoration: 'underline' }}>
                自动 Center
              </span>
            </Popover>
          </div>
        </div>
      </div>

      {/* 添加更多内容以便测试滚动 */}
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} style={{ 
          height: '150px', 
          backgroundColor: i % 2 === 0 ? '#fafafa' : '#ffffff', 
          padding: '20px', 
          marginTop: '20px',
          borderRadius: '8px',
          border: '1px solid #e8e8e8'
        }}>
          <h4>内容区域 {i + 6}</h4>
          <p>这里是第 {i + 6} 个区域的内容，用于测试页面滚动效果。</p>
          <div style={{ marginTop: '20px' }}>
            <Popover content={content} placement={i % 2 === 0 ? 'bottom' : 'top'} title={`区域 ${i + 6} 弹窗`}>
              <span style={{ color: '#1890ff', cursor: 'pointer', textDecoration: 'underline' }}>
                区域 {i + 6} 触发器
              </span>
            </Popover>
          </div>
        </div>
      ))}
      
      <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px' }}>
        <p style={{ color: '#666' }}>页面底部</p>
      </div>
    </div>
  );
};