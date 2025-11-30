import React, { useEffect, useState, useRef } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * Flip animator component that creates a card flip effect for each digit
 */
export const FlipAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  duration,
}) => {
  // Store previous formatted value to compare
  const prevFormattedRef = useRef<string>("");
  const [prevFormatted, setPrevFormatted] = useState<string>("");
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  // When the formatted value changes, trigger the flip animation
  useEffect(() => {
    if (prevFormattedRef.current !== formattedValue) {
      setPrevFormatted(prevFormattedRef.current);
      prevFormattedRef.current = formattedValue;

      setIsFlipping(true);
      const timer = setTimeout(() => {
        setIsFlipping(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [formattedValue, duration]);

  // Split current and previous values into characters
  const currentChars = formattedValue.split("");
  const prevChars = prevFormatted.split("");

  return (
    <div className="rc-animated-number-flip">
      {currentChars.map((char, index) => {
        const prevChar = index < prevChars.length ? prevChars[index] : "";
        const hasChanged = prevChar !== char && prevChar !== "";

        return (
          <div
            key={`flip-${index}`}
            className={`rc-animated-number-flip-card ${hasChanged && isFlipping ? "flipping" : ""}`}
            style={
              {
                "--animation-duration": `${duration}ms`,
              } as React.CSSProperties
            }
          >
            <div className="rc-animated-number-flip-card-inner">
              <div className="rc-animated-number-flip-card-front">{char}</div>
              <div className="rc-animated-number-flip-card-back">
                {prevChar}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
