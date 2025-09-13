import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const content = (
    <div style={{ lineHeight: '1.6' }}>
      <p>这是一个很大的弹窗内容，展示了 popover 如何以父元素为中心进行定位。</p>
      <p>即使父元素设置了 overflow: hidden，popover 也会漂浮在上面，不会被裁剪。</p>
      <p>弹窗的大小通常会比触发元素大，创造出漂浮的视觉效果。</p>
      <p>位置计算以父元素的中心为基准，确保视觉平衡。</p>
    </div>
  );

  const centerContent = (
    <div style={{ padding: '20px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h3 style={{ margin: '0 0 16px', color: '#1890ff' }}>Center 模式弹窗</h3>
      <p style={{ margin: '0 0 12px' }}>这个弹窗充满了整个容器区域</p>
      <p style={{ margin: '0 0 12px' }}>滚动页面时会跟随容器一起移动</p>
      <p style={{ margin: '0 0 16px' }}>展示了浮动覆盖效果</p>
      <div style={{ padding: '12px', backgroundColor: '#f0f8ff', borderRadius: '6px', margin: '8px 0' }}>
        <strong>特性说明：</strong>
        <ul style={{ textAlign: 'left', margin: '8px 0 0', paddingLeft: '20px' }}>
          <li>自动充满父容器或指定容器</li>
          <li>跟随文档流滚动</li>
          <li>不受父元素 overflow 限制</li>
          <li>半透明背景增强视觉效果</li>
        </ul>
      </div>
      <p style={{ margin: '16px 0 0', fontSize: '14px', color: '#666' }}>
        点击关闭按钮或点击外部区域可以关闭弹窗
      </p>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <h3>🎯 中心定位和漂浮效果演示</h3>
      
      {/* 普通容器，展示中心定位 */}
      <div style={{ marginBottom: '40px' }}>
        <h4>🎯 普通中心定位效果</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          弹窗以触发元素中心为基准进行定位，创造平衡的视觉效果
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Popover content={content} placement="top" title="顶部弹出">
            <button style={{ padding: '8px 16px', backgroundColor: '#ff7875', color: 'white', border: 'none', borderRadius: '4px' }}>顶部</button>
          </Popover>
          
          <Popover content={content} placement="bottom" title="底部弹出">
            <button style={{ padding: '8px 16px', backgroundColor: '#40a9ff', color: 'white', border: 'none', borderRadius: '4px' }}>底部</button>
          </Popover>
          
          <Popover content={content} placement="left" title="左侧弹出">
            <button style={{ padding: '8px 16px', backgroundColor: '#73d13d', color: 'white', border: 'none', borderRadius: '4px' }}>左侧</button>
          </Popover>
          
          <Popover content={content} placement="right" title="右侧弹出">
            <button style={{ padding: '8px 16px', backgroundColor: '#ffc53d', color: 'white', border: 'none', borderRadius: '4px' }}>右侧</button>
          </Popover>
        </div>
      </div>

      {/* Center 模式演示 */}
      <div style={{ marginBottom: '40px' }}>
        <h4>📐 Center 模式 - 充满容器</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          center 模式下，弹窗会充满父容器或指定容器的大小，并展示浮动效果
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {/* 指定容器的 center 模式 */}
          <div 
            id="center-demo-container"
            style={{ 
              height: '200px', 
              border: '2px solid #1890ff', 
              position: 'relative',
              padding: '20px',
              backgroundColor: '#f0f8ff',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(24, 144, 255, 0.1) 0%, transparent 70%)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#666' }}>指定容器区域</p>
              <Popover 
                content={centerContent}
                // @ts-ignore
                placement="center" 
                // containerId="center-demo-container"
                title="充满指定容器"
              >
                <button style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#1890ff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)'
                }}>
                  🎪 Center 模式
                </button>
              </Popover>
            </div>
          </div>

          {/* 自动查找父容器的 center 模式 */}
          <div 
            style={{ 
              height: '200px', 
              border: '2px solid #52c41a', 
              position: 'relative',
              overflow: 'hidden',
              padding: '20px',
              backgroundColor: '#f6ffed',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(82, 196, 26, 0.1) 0%, transparent 70%)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#666' }}>自动容器查找</p>
              <Popover 
                content={centerContent}
                // @ts-ignore
                placement="center" 
                title="自动容器模式"
              >
                <span style={{ 
                  display: 'inline-block',
                  padding: '12px 20px',
                  color: '#52c41a', 
                  cursor: 'pointer', 
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  border: '2px solid #52c41a',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  🔍 自动 Center
                </span>
              </Popover>
            </div>
          </div>
        </div>
      </div>

      {/* overflow: hidden 容器测试 */}
      <div style={{ marginBottom: '40px' }}>
        <h4>🚫 Overflow Hidden 测试</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          下面的容器设置了 overflow: hidden，但 popover 不会被裁剪
        </p>
        
        <div 
          style={{ 
            width: '400px', 
            height: '120px', 
            border: '2px solid #ff4d4f', 
            overflow: 'hidden',
            position: 'relative',
            padding: '20px',
            backgroundColor: '#fff2f0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 auto'
          }}
        >
          <div>
            <p style={{ margin: '0 0 8px', fontWeight: 'bold', color: '#ff4d4f' }}>限制容器</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>overflow: hidden</p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <Popover content={content} placement="top" title="不被裁剪的弹窗">
              <button style={{ 
                padding: '8px 12px', 
                backgroundColor: '#ff4d4f', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                顶部测试
              </button>
            </Popover>
            
            <Popover 
              content={centerContent} 
              // @ts-ignore
              placement="center" 
              title="Center 不被限制"
            >
              <button style={{ 
                padding: '8px 12px', 
                backgroundColor: '#ff4d4f', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                Center 测试
              </button>
            </Popover>
          </div>
        </div>
      </div>

      {/* 小元素，大弹窗测试 */}
      <div style={{ marginBottom: '40px' }}>
        <h4>🎨 小元素，大弹窗</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          小的触发元素，大的弹窗内容，展示中心对齐效果
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '60px', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#999' }}>圆点触发器</p>
            <Popover content={content} placement="bottom" title="底部大弹窗">
              <span style={{ 
                display: 'inline-block',
                width: '16px', 
                height: '16px', 
                backgroundColor: '#1890ff', 
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(24, 144, 255, 0.4)'
              }}></span>
            </Popover>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#999' }}>文字链接</p>
            <Popover content={content} placement="right" title="右侧大弹窗">
              <span style={{ 
                color: '#1890ff', 
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}>
                详情
              </span>
            </Popover>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#999' }}>小按钮</p>
            <Popover content={content} placement="left" title="左侧大弹窗">
              <button style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '4px',
                border: '1px solid #d9d9d9',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                ?
              </button>
            </Popover>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#999' }}>图标</p>
            <Popover content={content} placement="top" title="顶部大弹窗">
              <span style={{ 
                display: 'inline-block',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#faad14',
                filter: 'drop-shadow(0 2px 4px rgba(250, 173, 20, 0.3))'
              }}>
                ⭐
              </span>
            </Popover>
          </div>
        </div>
      </div>

      {/* 滚动跟随测试 */}
      <div>
        <h4>📜 滚动跟随测试</h4>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          打开弹窗后滚动页面，观察弹窗是否跟随文档流移动
        </p>
        
        <div style={{ 
          height: '300px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <h3 style={{ margin: '0 0 16px', fontSize: '24px' }}>滚动测试区域</h3>
            <p style={{ margin: '0 0 24px', opacity: 0.9 }}>点击按钮打开弹窗，然后滚动页面观察效果</p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Popover content={content} placement="top" title="跟随滚动测试">
                <button style={{ 
                  padding: '14px 28px', 
                  fontSize: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 'bold'
                }}>
                  🎪 普通模式测试
                </button>
              </Popover>
              
              <Popover 
                content={centerContent} 
                // @ts-ignore
                placement="center" 
                title="Center 跟随测试"
              >
                <button style={{ 
                  padding: '14px 28px', 
                  fontSize: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 'bold'
                }}>
                  🌟 Center 模式测试
                </button>
              </Popover>
            </div>
          </div>
          
          {/* 装饰性背景元素 */}
          <div style={{ 
            position: 'absolute', 
            top: '-50px', 
            right: '-50px', 
            width: '200px', 
            height: '200px', 
            background: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '50%' 
          }}></div>
          <div style={{ 
            position: 'absolute', 
            bottom: '-30px', 
            left: '-30px', 
            width: '150px', 
            height: '150px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: '50%' 
          }}></div>
        </div>
      </div>
      
      {/* 添加底部空间用于滚动测试 */}
      <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#999' }}>
          <p style={{ fontSize: '18px', margin: '0 0 8px' }}>继续滚动测试区域</p>
          <p style={{ fontSize: '14px', margin: '0' }}>观察上方打开的弹窗是否跟随滚动</p>
        </div>
      </div>
    </div>
  );
};