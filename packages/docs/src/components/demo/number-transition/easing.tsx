import React, { useState } from "react";
import { Button } from "@rc-llm/components";
import { NumberTransition } from "@rc-llm/components";

export default function NumberTransitionEasingDemo() {
  const [value, setValue] = useState(0);
  const [easing, setEasing] = useState<
    "linear" | "easeIn" | "easeOut" | "easeInOut"
  >("easeOut");

  const handleIncrease = () => {
    setValue((prev) => prev + 500);
  };

  const handleReset = () => {
    setValue(0);
  };

  const changeEasing = (
    newEasing: "linear" | "easeIn" | "easeOut" | "easeInOut"
  ) => {
    setEasing(newEasing);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "24px" }}>
        <NumberTransition value={value} easing={easing} duration={2000} />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Button
          onClick={() => changeEasing("linear")}
          type={easing === "linear" ? "primary" : "default"}
        >
          线性
        </Button>{" "}
        <Button
          onClick={() => changeEasing("easeIn")}
          type={easing === "easeIn" ? "primary" : "default"}
        >
          缓入
        </Button>{" "}
        <Button
          onClick={() => changeEasing("easeOut")}
          type={easing === "easeOut" ? "primary" : "default"}
        >
          缓出
        </Button>{" "}
        <Button
          onClick={() => changeEasing("easeInOut")}
          type={easing === "easeInOut" ? "primary" : "default"}
        >
          缓入缓出
        </Button>
      </div>
      <div>
        <Button onClick={handleIncrease}>增加 500</Button>{" "}
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
}
