import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { formatNumber } from "./utils/formatters";
import { AnimationController } from "./controller";
import { BaseAnimator } from "./animators/BaseAnimator";
import { RollingAnimator } from "./animators/RollingAnimator";
import { FlipAnimator } from "./animators/FlipAnimator";
import { PulseScaleAnimator } from "./animators/PulseScaleAnimator";
import { CrossfadeAnimator } from "./animators/CrossfadeAnimator";
import "./style.css";

// Lazy load more complex animators
const ParticleAnimator = lazy(() => import("./animators/ParticleAnimator"));
const TypewriterAnimator = lazy(() => import("./animators/TypewriterAnimator"));
const MatrixAnimator = lazy(() => import("./animators/MatrixAnimator"));
const GlowTrailAnimator = lazy(() => import("./animators/GlowTrailAnimator"));

export type AnimationEffect =
  | "none"
  | "rolling"
  | "flip"
  | "pulse"
  | "crossfade"
  | "particle"
  | "typewriter"
  | "liquid"
  | "matrix"
  | "glow"
  | "physics";

export type NumberFormat = "plain" | "currency" | "percentage" | "compact";

export type ColorMode = "static" | "dynamic" | "threshold" | "gradient";

export interface AnimatedNumberProps {
  /** 当前数值 */
  value: number;
  /** 动画效果 */
  effect?: AnimationEffect;
  /** 动画持续时间（毫秒） */
  duration?: number;
  /** 动画延迟（毫秒） */
  delay?: number;
  /** 动画缓动函数 */
  easing?: "linear" | "easeIn" | "easeOut" | "easeInOut" | "elastic" | "bounce";
  /** 数字格式化方式 */
  format?: NumberFormat;
  /** 小数点位数 */
  precision?: number;
  /** 千位分隔符 */
  separator?: string;
  /** 颜色模式 */
  colorMode?: ColorMode;
  /** 静态颜色 */
  color?: string;
  /** 增长颜色 */
  increaseColor?: string;
  /** 减少颜色 */
  decreaseColor?: string;
  /** 阈值颜色配置 */
  thresholds?: Array<{ value: number; color: string }>;
  /** 数字前缀 */
  prefix?: React.ReactNode;
  /** 数字后缀 */
  suffix?: React.ReactNode;
  /** 货币符号 (用于货币格式) */
  currencySymbol?: string;
  /** 响应式字体大小 */
  responsiveSize?: boolean;
  /** 基础字体大小 */
  fontSize?: string | number;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 动画完成回调 */
  onAnimationComplete?: () => void;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  effect = "none",
  duration = 1000,
  delay = 0,
  easing = "easeOut",
  format = "plain",
  precision = 0,
  separator = ",",
  colorMode = "static",
  color = "#000000",
  increaseColor = "#52c41a",
  decreaseColor = "#ff4d4f",
  thresholds = [],
  prefix,
  suffix,
  currencySymbol = "$",
  responsiveSize = false,
  fontSize,
  style,
  className,
  onAnimationComplete,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const controller = useRef<AnimationController | null>(null);
  const [trend, setTrend] = useState<"increasing" | "decreasing" | null>(null);

  // Initialize animation controller
  useEffect(() => {
    if (!controller.current) {
      controller.current = new AnimationController({
        onUpdate: (value) => setDisplayValue(value),
        onComplete: onAnimationComplete,
        easing,
        duration,
        delay,
      });
    } else {
      // Update controller settings if they change
      controller.current.updateSettings({
        easing,
        duration,
        delay,
      });
    }

    return () => {
      controller.current?.destroy();
    };
  }, [easing, duration, delay, onAnimationComplete]);

  // Handle value changes
  useEffect(() => {
    if (value === previousValue.current) return;

    // Set trend for color changes
    if (colorMode === "dynamic") {
      setTrend(value > previousValue.current ? "increasing" : "decreasing");
    }

    // Start animation
    controller.current?.animate(previousValue.current, value);
    previousValue.current = value;
  }, [value, colorMode]);

  // Format the display value
  const formattedValue = formatNumber(displayValue, {
    format,
    precision,
    separator,
    currencySymbol,
  });

  // Determine current color based on colorMode
  const getCurrentColor = () => {
    switch (colorMode) {
      case "dynamic":
        return trend === "increasing"
          ? increaseColor
          : trend === "decreasing"
            ? decreaseColor
            : color;
      case "threshold":
        // Find the highest threshold that the current value exceeds
        const activeThreshold = [...thresholds]
          .sort((a, b) => b.value - a.value)
          .find((t) => displayValue >= t.value);
        return activeThreshold ? activeThreshold.color : color;
      default:
        return color;
    }
  };

  // Select the appropriate animator component based on effect
  const renderAnimator = () => {
    // Common props for all animators
    const animatorProps = {
      value: displayValue,
      formattedValue,
      previousValue: previousValue.current,
      color: getCurrentColor(),
      duration,
      easing,
    };

    switch (effect) {
      case "rolling":
        return <RollingAnimator {...animatorProps} />;
      case "flip":
        return <FlipAnimator {...animatorProps} />;
      case "pulse":
        return <PulseScaleAnimator {...animatorProps} />;
      case "crossfade":
        return <CrossfadeAnimator {...animatorProps} />;
      case "particle":
        return (
          <Suspense fallback={<BaseAnimator {...animatorProps} />}>
            <ParticleAnimator {...animatorProps} />
          </Suspense>
        );
      case "typewriter":
        return (
          <Suspense fallback={<BaseAnimator {...animatorProps} />}>
            <TypewriterAnimator {...animatorProps} />
          </Suspense>
        );
      case "matrix":
        return (
          <Suspense fallback={<BaseAnimator {...animatorProps} />}>
            <MatrixAnimator {...animatorProps} />
          </Suspense>
        );
      case "glow":
        return (
          <Suspense fallback={<BaseAnimator {...animatorProps} />}>
            <GlowTrailAnimator {...animatorProps} />
          </Suspense>
        );
      // Add other effects here
      case "none":
      default:
        return <BaseAnimator {...animatorProps} />;
    }
  };

  // Calculate responsive font size if enabled
  const containerStyle: React.CSSProperties = {
    ...style,
    color: getCurrentColor(),
  };

  if (fontSize) {
    containerStyle.fontSize = fontSize;
  }

  if (responsiveSize) {
    containerStyle.fontSize = `clamp(1rem, ${String(displayValue).length * 0.5}vw, 3rem)`;
  }

  return (
    <div
      ref={containerRef}
      className={`rc-animated-number ${className || ""}`}
      style={containerStyle}
    >
      {prefix}
      {renderAnimator()}
      {suffix}
    </div>
  );
};

AnimatedNumber.displayName = "AnimatedNumber";
