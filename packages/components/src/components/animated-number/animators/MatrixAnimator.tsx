import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * Matrix animator component that creates a "digital rain" effect
 * when the number changes
 */

// Generate random digits
const getRandomDigit = () => {
  return Math.floor(Math.random() * 10).toString();
};

const MatrixAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  duration,
}) => {
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevFormattedRef = useRef(formattedValue);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);


  // Animation loop
  const updateMatrixAnimation = useCallback(function animate(timestamp: number) {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Target characters
    const targetChars = formattedValue.split("");

    // Update each character with decreasing randomness as progress increases
    const newChars = targetChars.map((targetChar) => {
      // If it's not a digit, keep it as is
      if (!/\d/.test(targetChar)) {
        return targetChar;
      }

      // Calculate probability of showing the correct digit
      const probability = progress * progress; // Quadratic easing

      // With increasing probability, show the correct digit
      if (Math.random() < probability) {
        return targetChar;
      } else {
        return getRandomDigit();
      }
    });

    setDisplayChars(newChars);

    // Continue animation or end
    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Ensure final state is correct
      setDisplayChars(targetChars);
      setIsAnimating(false);
    }
  }, [duration, formattedValue]);

  // Start matrix animation when value changes
  useEffect(() => {
    if (prevFormattedRef.current !== formattedValue) {
      // Initialize with random characters
      const targetChars = formattedValue.split("");
      const initialChars = targetChars.map((char) => {
        // Keep non-digit characters as they are
        return /\d/.test(char) ? getRandomDigit() : char;
      });

      setDisplayChars(initialChars);
      setIsAnimating(true);
      startTimeRef.current = null;

      // Clean up previous animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Start animation loop
      animationFrameRef.current = requestAnimationFrame(updateMatrixAnimation);

      // Store current value for next comparison
      prevFormattedRef.current = formattedValue;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [formattedValue, updateMatrixAnimation]);

  return (
    <div className="rc-animated-number-matrix">
      {displayChars.map((char, index) => (
        <span
          key={`matrix-${index}`}
          className={`rc-animated-number-matrix-char ${isAnimating ? "animating" : ""}`}
          style={
            {
              "--animation-delay": `${index * 50}ms`,
              "--animation-duration": `${duration}ms`,
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default MatrixAnimator;
