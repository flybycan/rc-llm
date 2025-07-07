import React, { useState } from "react";
import { Button, AnimatedNumber } from "@rc-llm/components";

export default () => {
  const [value, setValue] = useState(1000);

  const handleIncrease = () => {
    setValue((prev) => prev + 250);
  };

  const handleDecrease = () => {
    setValue((prev) => prev - 150);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "24px" }}>
        <AnimatedNumber value={value} />
      </div>
      <div>
        <Button
          onClick={handleIncrease}
          type="primary"
          style={{ marginRight: "8px" }}
        >
          增加 250
        </Button>
        <Button onClick={handleDecrease}>减少 150</Button>
      </div>
    </div>
  );
};
