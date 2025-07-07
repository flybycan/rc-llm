import React from "react";

export interface AnimatorProps {
  value: number;
  formattedValue: string;
  previousValue: number;
  color: string;
  duration: number;
  easing: string;
}

/**
 * Base animator component that simply displays the formatted value
 * This is used as a fallback and for the 'none' effect
 */
export const BaseAnimator: React.FC<AnimatorProps> = ({ formattedValue }) => {
  return <span className="rc-animated-number-base">{formattedValue}</span>;
};
