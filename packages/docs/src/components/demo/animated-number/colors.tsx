import React, { useState } from "react";
import { Button, AnimatedNumber } from "@rc-llm/components";
import type { ColorMode } from "@rc-llm/components/src/components/animated-number";

export default () => {
  const [value, setValue] = useState(5000);
  const [colorMode, setColorMode] = useState<ColorMode>("static");

  const colorModes: ColorMode[] = ["static", "dynamic", "threshold"];

  // Threshold configuration
  const thresholds = [
    { value: 10000, color: "#ff4d4f" }, // Red for high values
    { value: 5000, color: "#faad14" }, // Yellow for medium values
    { value: 1000, color: "#52c41a" }, // Green for low values
  ];

  const handleIncrease = () => {
    setValue((prev) => prev + 2000);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 1000);
  };

  const handleReset = () => {
    setValue(5000);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "28px" }}>
        <AnimatedNumber
          value={value}
          colorMode={colorMode}
          effect="rolling"
          thresholds={thresholds}
          separator=","
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "8px" }}>选择颜色模式：</div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          {colorModes.map((mode) => (
            <Button
              key={mode}
              onClick={() => setColorMode(mode)}
              type={colorMode === mode ? "primary" : "default"}
            >
              {mode}
            </Button>
          ))}
        </div>

        {colorMode === "threshold" && (
          <div
            style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}
          >
            阈值模式：红色 &gt; 10,000，黄色 &gt; 5,000，绿色 &gt; 1,000
          </div>
        )}
      </div>

      <div>
        <Button
          onClick={handleIncrease}
          type="primary"
          style={{ marginRight: "8px" }}
        >
          增加 2000
        </Button>
        <Button onClick={handleDecrease} style={{ marginRight: "8px" }}>
          减少 1000
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};
