import React, { useEffect, useState, useRef } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * Crossfade animator component that creates a fade transition effect
 * between the old and new values
 */
export const CrossfadeAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  duration,
}) => {
  const [prevValue, setPrevValue] = useState(formattedValue);
  const [isFading, setIsFading] = useState(false);
  const prevValueRef = useRef(formattedValue);

  useEffect(() => {
    if (prevValueRef.current !== formattedValue) {
      // Store previous value
      setPrevValue(prevValueRef.current);

      // Trigger fade animation
      setIsFading(true);

      // Reset after animation completes
      const timer = setTimeout(() => {
        setIsFading(false);
      }, duration);

      prevValueRef.current = formattedValue;
      return () => clearTimeout(timer);
    }
  }, [formattedValue, duration]);

  return (
    <div
      className="rc-animated-number-crossfade"
      style={
        {
          "--animation-duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {/* Current value (fades in) */}
      <span
        className={`rc-animated-number-crossfade-current ${isFading ? "fading-in" : ""}`}
      >
        {formattedValue}
      </span>

      {/* Previous value (fades out) */}
      {isFading && (
        <span className="rc-animated-number-crossfade-previous fading-out">
          {prevValue}
        </span>
      )}
    </div>
  );
};
