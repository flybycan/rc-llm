import React, { useEffect, useState, useRef } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * Pulse Scale animator component that creates a pulsing/scaling effect
 * when the number changes
 */
export const PulseScaleAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  duration,
}) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const prevValueRef = useRef(formattedValue);

  useEffect(() => {
    if (prevValueRef.current !== formattedValue) {
      // Trigger pulse animation
      setIsPulsing(true);

      // Reset after animation completes
      const timer = setTimeout(() => {
        setIsPulsing(false);
      }, duration);

      prevValueRef.current = formattedValue;
      return () => clearTimeout(timer);
    }
  }, [formattedValue, duration]);

  return (
    <span
      className={`rc-animated-number-pulse ${isPulsing ? "pulsing" : ""}`}
      style={
        {
          "--animation-duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {formattedValue}
    </span>
  );
};
