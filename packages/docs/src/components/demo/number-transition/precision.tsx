import React, { useState } from "react";
import { Button } from "@rc-llm/components";
import { NumberTransition } from "@rc-llm/components";

export default function NumberTransitionPrecisionDemo() {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prev) => +(prev + 12.34).toFixed(2));
  };

  const handleDecrease = () => {
    setValue((prev) => +(prev - 5.67).toFixed(2));
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <NumberTransition value={value} precision={2} />
      </div>
      <div>
        <Button onClick={handleIncrease} type="primary">
          增加 12.34
        </Button>
        <span style={{ marginLeft: "8px" }}></span>
        <Button onClick={handleDecrease}>减少 5.67</Button>
      </div>
    </div>
  );
}
