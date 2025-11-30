import React, { useState } from "react";
import { Button } from "@rc-llm/components";
import { NumberTransition } from "@rc-llm/components";

export default function NumberTransitionBasicDemo() {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prev) => prev + 100);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 50);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <NumberTransition value={value} />
      </div>
      <div>
        <Button onClick={handleIncrease}>增加 100</Button>
        <span style={{ marginLeft: "8px" }}></span>
        <Button onClick={handleDecrease}>减少 50</Button>
      </div>
    </div>
  );
}
