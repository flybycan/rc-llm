import React, { useMemo } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * Rolling animator component that creates a slot-machine like rolling effect
 */
export const RollingAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  duration,
}) => {
  // Split the formatted value into individual characters
  const characters = useMemo(() => formattedValue.split(""), [formattedValue]);

  return (
    <div className="rc-animated-number-rolling">
      {characters.map((char, index) => {
        // Determine if this is a digit or other character (like separator, decimal point)
        const isDigit = !isNaN(parseInt(char, 10));

        if (isDigit) {
          // For digits, create a rolling column
          return (
            <div
              key={`digit-${index}`}
              className="rc-animated-number-rolling-column"
              style={
                {
                  "--animation-duration": `${duration}ms`,
                } as React.CSSProperties
              }
            >
              <div
                className="rc-animated-number-rolling-digits"
                style={{
                  transform: `translateY(${-parseInt(char, 10) * 10}%)`,
                }}
              >
                {/* Render all possible digits */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                  <div key={digit} className="rc-animated-number-rolling-digit">
                    {digit}
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          // For non-digits (separators, decimal points), just render them directly
          return (
            <div
              key={`char-${index}`}
              className="rc-animated-number-rolling-separator"
            >
              {char}
            </div>
          );
        }
      })}
    </div>
  );
};
