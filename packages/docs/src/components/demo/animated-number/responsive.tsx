import React, { useState } from "react";
import { Button, AnimatedNumber } from "@rc-llm/components";

export default () => {
  const [value, setValue] = useState(1234);
  const [responsive, setResponsive] = useState(true);

  const handleIncrease = () => {
    setValue((prev) => prev * 10);
  };

  const handleDecrease = () => {
    setValue((prev) => Math.max(1, Math.floor(prev / 10)));
  };

  const handleReset = () => {
    setValue(1234);
  };

  const toggleResponsive = () => {
    setResponsive((prev) => !prev);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "16px",
          padding: "20px",
          border: "1px dashed #ccc",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        <AnimatedNumber
          value={value}
          effect="rolling"
          responsiveSize={responsive}
          separator=","
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <Button
          onClick={toggleResponsive}
          type={responsive ? "primary" : "default"}
          style={{ marginBottom: "16px" }}
        >
          {responsive ? "响应式大小: 开启" : "响应式大小: 关闭"}
        </Button>

        <div style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
          尝试增加或减少数字位数，观察字体大小的变化
        </div>
      </div>

      <div>
        <Button
          onClick={handleIncrease}
          type="primary"
          style={{ marginRight: "8px" }}
        >
          × 10
        </Button>
        <Button onClick={handleDecrease} style={{ marginRight: "8px" }}>
          ÷ 10
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};
