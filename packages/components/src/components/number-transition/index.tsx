import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export interface NumberTransitionProps {
  /** 当前数值 */
  value: number;
  /** 动画持续时间（毫秒） */
  duration?: number;
  /** 小数点位数 */
  precision?: number;
  /** 数字前缀 */
  prefix?: React.ReactNode;
  /** 数字后缀 */
  suffix?: React.ReactNode;
  /** 动画缓动函数 */
  easing?: "linear" | "easeInOut" | "easeIn" | "easeOut";
  /** 是否在数值变化时改变颜色 */
  colorful?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
}

export const NumberTransition: React.FC<NumberTransitionProps> = ({
  value,
  duration = 1000,
  precision = 0,
  prefix,
  suffix,
  easing = "easeOut",
  colorful = false,
  style,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);
  const startTime = useRef<number | null>(null);
  const frameId = useRef<number | null>(null);
  const [trend, setTrend] = useState<"increasing" | "decreasing" | null>(null);

  useEffect(() => {
    // 如果值相同，不执行动画
    if (value === previousValue.current) return;

    // 设置趋势
    if (colorful) {
      setTrend(value > previousValue.current ? "increasing" : "decreasing");

      // 一段时间后重置趋势
      const trendTimeout = setTimeout(() => {
        setTrend(null);
      }, duration + 300);

      return () => clearTimeout(trendTimeout);
    }
  }, [value, colorful, duration]);

  useEffect(() => {
    // 如果值相同，不执行动画
    if (value === previousValue.current) return;

    // 清除之前的动画
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
    }

    const startValue = previousValue.current;
    const endValue = value;
    const totalChange = endValue - startValue;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;

      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);

      // 应用缓动函数
      let easedProgress;
      switch (easing) {
        case "linear":
          easedProgress = progress;
          break;
        case "easeIn":
          easedProgress = progress * progress;
          break;
        case "easeOut":
          easedProgress = 1 - Math.pow(1 - progress, 2);
          break;
        case "easeInOut":
          easedProgress =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          break;
        default:
          easedProgress = progress;
      }

      // 计算当前显示值
      const currentValue = startValue + totalChange * easedProgress;
      setDisplayValue(currentValue);

      // 继续动画或结束
      if (progress < 1) {
        frameId.current = requestAnimationFrame(animate);
      } else {
        // 动画结束，确保显示最终值
        setDisplayValue(endValue);
        startTime.current = null;
        previousValue.current = endValue;
      }
    };

    frameId.current = requestAnimationFrame(animate);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [value, duration, easing]);

  // 格式化显示的数字
  const formattedValue = displayValue.toFixed(precision);

  const trendClass = colorful && trend ? ` ${trend}` : "";

  return (
    <span
      className={`rc-llm-number-transition${trendClass} ${className || ""}`}
      style={style}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

NumberTransition.displayName = "NumberTransition";
