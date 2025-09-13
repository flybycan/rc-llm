import React from 'react';
// @ts-ignore
import { Popover } from '@rc-llm/components';

export default () => {
  const fullContent = (
    <div style={{ lineHeight: '1.6' }}>
      <p><strong>简介：</strong>"心之与声 明为二物"。乐队成立于2018年。乐队名取自梵康《声无哀乐论》，音乐的核心思想也是对其的拓充。</p>
      <p>不多加于涉对世界万物的各种感受。你我在期间摸得一轮月，撸碎一池白色。正解即是天各一方。乐队成员，主创杨宗啊;古筝熊者昀;打手杨云钦;贝吉他张博。</p>
      <p><strong>商务联系。经纪人+v 188。1029。3262</strong></p>
      <hr style={{ margin: '12px 0', border: 'none', borderTop: '1px solid #f0f0f0' }} />
      <p><strong>地区：</strong>湖北省 武汉市 <strong>社交账号：</strong><span style={{ color: '#ff6b6b' }}>🎵</span></p>
    </div>
  );

  const shortIntro = '"心之与声 明为二物"。乐队成立于2018年。乐队名取自梵康《声无哀乐论》，音乐的核心思想也是对其...';
  
  return (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <div style={{ 
        backgroundColor: '#fafafa', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #e8e8e8'
      }}>
        <div style={{ marginBottom: '12px' }}>
          <strong>简介：</strong> {shortIntro} 
          <Popover content={fullContent} placement="bottom" title="详细信息">
            <span style={{ 
              color: '#1890ff', 
              cursor: 'pointer',
              marginLeft: '8px',
              textDecoration: 'underline'
            }}>
              详情
            </span>
          </Popover>
        </div>
        
        <div style={{ color: '#666', fontSize: '14px' }}>
          <strong>地区：</strong>湖北省 武汉市 <strong>社交账号：</strong><span style={{ color: '#ff6b6b' }}>🎵</span>
        </div>
      </div>
    </div>
  );
};