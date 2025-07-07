import React, { useState } from "react";
import { Button, AnimatedNumber } from "@rc-llm/components";
import type { NumberFormat } from "@rc-llm/components/src/components/animated-number";

export default () => {
  const [value, setValue] = useState(12345.67);
  const [format, setFormat] = useState<NumberFormat>("plain");

  const formats: NumberFormat[] = [
    "plain",
    "currency",
    "percentage",
    "compact",
  ];

  const handleIncrease = () => {
    setValue((prev) => prev * 1.5);
  };

  const handleDecrease = () => {
    setValue((prev) => prev / 2);
  };

  const handleReset = () => {
    setValue(12345.67);
  };

  // Format-specific props
  const getFormatProps = () => {
    switch (format) {
      case "currency":
        return { currencySymbol: "¥", precision: 2 };
      case "percentage":
        return { precision: 2 };
      case "compact":
        return { precision: 1 };
      default:
        return { precision: 2 };
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "16px", fontSize: "24px" }}>
        <AnimatedNumber
          value={value}
          format={format}
          effect="rolling"
          {...getFormatProps()}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "8px" }}>选择格式化方式：</div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          {formats.map((f) => (
            <Button
              key={f}
              onClick={() => setFormat(f)}
              type={format === f ? "primary" : "default"}
            >
              {f}
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
          增加 50%
        </Button>
        <Button onClick={handleDecrease} style={{ marginRight: "8px" }}>
          减少 50%
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};
