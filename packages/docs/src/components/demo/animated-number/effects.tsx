import React, { useState } from "react";
import { Button, AnimatedNumber } from "@rc-llm/components";
import type { AnimationEffect } from "@rc-llm/components/src/components/animated-number";

export default () => {
  const [value, setValue] = useState(1000);
  const [effect, setEffect] = useState<AnimationEffect>("rolling");

  const effects: AnimationEffect[] = [
    "none",
    "rolling",
    "flip",
    "pulse",
    "crossfade",
    "particle",
    "typewriter",
    "matrix",
    "glow",
  ];

  const handleIncrease = () => {
    setValue((prev) => prev + 500);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 300);
  };

  const handleReset = () => {
    setValue(1000);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "32px" }}>
        <AnimatedNumber
          value={value}
          effect={effect}
          duration={1500}
          separator=","
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "8px" }}>选择动画效果：</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {effects.map((e) => (
            <Button
              key={e}
              onClick={() => setEffect(e)}
              type={effect === e ? "primary" : "default"}
            >
              {e}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Button
          onClick={handleIncrease}
          type="primary"
          style={{ marginRight: "8px" }}
        >
          增加 500
        </Button>
        <Button onClick={handleDecrease} style={{ marginRight: "8px" }}>
          减少 300
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};
