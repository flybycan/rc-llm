import React, { useState } from "react";
import { FloatButton, Button } from "@rc-llm/components";
import IframeDemo from "./IframeDemo";

export default () => {
  return (
    <IframeDemo height={220} title="滚动显示">
      <FloatButtonScrollDemo />
    </IframeDemo>
  );
};

// 内部组件，在iframe内部实现滚动逻辑
const FloatButtonScrollDemo = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 模拟滚动效果
  const handleScroll = (position: number) => {
    setScrollPosition(position);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <Button onClick={() => handleScroll(0)} style={{ marginRight: "8px" }}>
          滚动到 0px
        </Button>
        <Button
          onClick={() => handleScroll(100)}
          style={{ marginRight: "8px" }}
        >
          滚动到 100px
        </Button>
        <Button onClick={() => handleScroll(300)}>滚动到 300px</Button>
      </div>

      <div style={{ border: "1px dashed #ccc", padding: "16px" }}>
        <p>当前模拟滚动位置: {scrollPosition}px</p>
        <p>当滚动超过 200px 时，悬浮按钮将会显示</p>
      </div>

      <div
        style={{
          position: "relative",
          height: "100px",
          border: "1px dashed #ccc",
          marginTop: "16px",
        }}
      >
        <FloatButton
          icon={<span>↑</span>}
          visibilityHeight={200}
          // visible={scrollPosition >= 200}
          onClick={() => handleScroll(0)}
        />
      </div>
    </div>
  );
};
