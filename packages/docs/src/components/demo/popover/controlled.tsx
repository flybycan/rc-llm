import React, { useState } from 'react';
import { Popover } from '@rc-llm/components';

export default function PopoverControlledDemo() {
  const [visible, setVisible] = useState(false);

  const content = (
    <div>
      <p>这是一个受控的 Popover</p>
      <p>可以通过外部状态控制显示和隐藏</p>
      <button onClick={() => setVisible(false)} style={{ marginTop: '8px' }}>
        关闭
      </button>
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setVisible(!visible)}>
          {visible ? '隐藏' : '显示'} Popover
        </button>
      </div>

      <Popover
        content={content}
        visible={visible}
        onVisibleChange={setVisible}
        title="受控模式"
      >
        <span style={{ color: '#1890ff', cursor: 'pointer' }}>
          受控的触发元素
        </span>
      </Popover>
    </div>
  );
}