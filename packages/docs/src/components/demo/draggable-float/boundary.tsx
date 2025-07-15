import React, { useRef } from "react";
import { DraggableFloat, Button } from "@rc-llm/components";

const App: React.FC = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={boundaryRef}
      style={{
        width: "100%",
        height: "400px",
        border: "2px dashed #aaa",
        borderRadius: "8px",
        position: "relative", // 父容器必须是 relative、absolute、fixed 或 sticky
        overflow: "hidden", // 隐藏溢出的部分
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "#f0f2f5",
      }}
    >
      <p style={{ textAlign: "center", color: "#888" }}>
        这个区域是拖拽边界 (模拟移动端视口)
      </p>
      <DraggableFloat
        boundaryRef={boundaryRef}
        initialPosition={{ x: 30, y: 30 }}
      >
        <div
          style={{
            width: "180px",
            padding: "15px",
            border: "1px solid #1890ff",
            borderRadius: "8px",
            backgroundColor: "rgba(230, 247, 255, 0.9)",
            textAlign: "center",
          }}
        >
          <p>我只能在这个虚线框内移动。</p>
          <Button>内部按钮</Button>
        </div>
      </DraggableFloat>
    </div>
  );
};

export default App;
