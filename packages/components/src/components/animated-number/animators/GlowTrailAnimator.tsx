import React, { useEffect, useState, useRef } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * GlowTrail animator component that creates a glowing trail effect
 * when the number changes
 */
const GlowTrailAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  color,
  duration,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const prevValueRef = useRef(formattedValue);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prevValueRef.current !== formattedValue) {
      // Start animation
      setIsAnimating(true);

      // Reset animation after duration
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, duration);

      prevValueRef.current = formattedValue;
      return () => clearTimeout(timer);
    }
  }, [formattedValue, duration]);

  // Split the formatted value into individual characters
  const characters = formattedValue.split("");

  // Extract RGB values from color for glow effect
  const getRgbFromHex = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgb = getRgbFromHex(color);

  return (
    <div ref={containerRef} className="rc-animated-number-glow">
      {characters.map((char, index) => (
        <span
          key={`glow-${index}`}
          className={`rc-animated-number-glow-char ${isAnimating ? "glowing" : ""}`}
          style={
            {
              "--animation-delay": `${index * 50}ms`,
              "--animation-duration": `${duration}ms`,
              "--glow-color": `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`,
              "--glow-color-faint": `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`,
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default GlowTrailAnimator;
