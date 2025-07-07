import React, { useEffect, useState, useRef } from "react";
import { AnimatorProps } from "./BaseAnimator";

/**
 * Typewriter animator component that creates a typewriter effect
 * when the number changes
 */
const TypewriterAnimator: React.FC<AnimatorProps> = ({
  formattedValue,
  duration,
}) => {
  const [displayText, setDisplayText] = useState(formattedValue);
  const [isTyping, setIsTyping] = useState(false);
  const prevValueRef = useRef(formattedValue);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (prevValueRef.current !== formattedValue) {
      // Clear any existing animation
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Start typewriter effect
      setIsTyping(true);

      // Calculate time per character
      const charCount = Math.max(
        prevValueRef.current.length,
        formattedValue.length
      );
      const timePerChar = duration / (charCount * 2); // Erase + type

      // First erase the old text
      let currentText = prevValueRef.current;
      let currentIndex = currentText.length;

      const eraseInterval = setInterval(() => {
        currentIndex--;
        setDisplayText(currentText.substring(0, currentIndex));

        if (currentIndex <= 0) {
          clearInterval(eraseInterval);

          // Then type the new text
          currentText = formattedValue;
          currentIndex = 0;

          const typeInterval = setInterval(() => {
            currentIndex++;
            setDisplayText(currentText.substring(0, currentIndex));

            if (currentIndex >= currentText.length) {
              clearInterval(typeInterval);
              setIsTyping(false);
            }
          }, timePerChar);
        }
      }, timePerChar);

      // Update previous value
      prevValueRef.current = formattedValue;

      // Clean up function
      return () => {
        clearInterval(eraseInterval);
      };
    }
  }, [formattedValue, duration]);

  return (
    <div className="rc-animated-number-typewriter">
      <span
        className={`rc-animated-number-typewriter-text ${isTyping ? "typing" : ""}`}
      >
        {displayText}
        {isTyping && (
          <span className="rc-animated-number-typewriter-cursor">|</span>
        )}
      </span>
    </div>
  );
};

export default TypewriterAnimator;
