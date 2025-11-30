import React, { useState } from "react";
import { Button } from "@rc-llm/components";
import { NumberTransition } from "@rc-llm/components";

export default function NumberTransitionColorfulDemo() {
  const [value, setValue] = useState(1000);

  const handleIncrease = () => {
    setValue((prev) => prev + 200);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 150);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "24px" }}>
        <NumberTransition value={value} colorful />
      </div>
      <div>
        <Button onClick={handleIncrease} type="primary">
          增加 200
        </Button>
        <span style={{ marginLeft: "8px" }}></span>
        <Button onClick={handleDecrease} type="danger">
          减少 150
        </Button>
      </div>
    </div>
  );
}
