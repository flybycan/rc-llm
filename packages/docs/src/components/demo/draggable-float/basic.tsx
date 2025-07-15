import React from "react";
import { DraggableFloat, Button } from "@rc-llm/components";

const App: React.FC = () => {
  return (
    <div style={{ height: "300px" }}>
      <DraggableFloat initialPosition={{ x: 50, y: 50 }}>
        <div
          style={{
            width: "200px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <p>这是一个可以自由拖拽的窗口。</p>
          <p>在整个页面范围内试试看！</p>
          <Button type="primary">一个按钮</Button>
        </div>
      </DraggableFloat>
    </div>
  );
};

export default App;
