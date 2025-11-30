import React, { useState } from "react";
import { Button } from "@rc-llm/components";
import { NumberTransition } from "@rc-llm/components";

export default function NumberTransitionPrefixSuffixDemo() {
  const [value, setValue] = useState(9999);

  const handleIncrease = () => {
    setValue((prev) => prev + 1000);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 500);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "20px" }}>
        <div style={{ marginBottom: "8px" }}>
          <NumberTransition value={value} prefix="¥" precision={2} />
        </div>
        <div style={{ marginBottom: "8px" }}>
          <NumberTransition value={value} suffix=" 元" />
        </div>
        <div>
          <NumberTransition
            value={value}
            prefix="当前余额: "
            suffix=" 元"
            colorful
          />
        </div>
      </div>
      <div>
        <Button onClick={handleIncrease} type="primary">
          增加 1000
        </Button>
        <span style={{ marginLeft: "8px" }}></span>
        <Button onClick={handleDecrease}>减少 500</Button>
      </div>
    </div>
  );
}
