import React from 'react';
import './style.css';

export interface ProgressProps {
  /** 进度值，范围 0-100 */
  percent?: number;
  /** 进度条尺寸，默认为 normal */
  size?: 'small' | 'normal' | 'large';
  /** 是否为环形进度条 */
  circle?: boolean;
  /** 进度条颜色 */
  color?: string;
  /** 是否显示进度文本 */
  showText?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  percent = 0,
  size = 'normal',
  circle = false,
  color = '#1677ff',
  showText = true,
  style,
  className,
}) => {
  const validPercent = Math.min(100, Math.max(0, percent));

  if (circle) {
    const radius = size === 'small' ? 30 : size === 'large' ? 60 : 45;
    const strokeWidth = size === 'small' ? 4 : size === 'large' ? 8 : 6;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (validPercent / 100) * circumference;

    return (
      <div
        className={`rc-llm-progress-circle ${className || ''}`}
        style={{
          width: radius * 2,
          height: radius * 2,
          ...style,
        }}
      >
        <svg width={radius * 2} height={radius * 2}>
          <circle
            className="rc-llm-progress-circle-background"
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            strokeWidth={strokeWidth}
          />
          <circle
            className="rc-llm-progress-circle-path"
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            strokeWidth={strokeWidth}
            style={{
              stroke: color,
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        {showText && (
          <span
            className="rc-llm-progress-text"
            style={{
              color,
              fontSize: size === 'small' ? 12 : size === 'large' ? 20 : 16,
            }}
          >
            {validPercent}%
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rc-llm-progress ${size} ${className || ''}`}
      style={style}
    >
      <div className="rc-llm-progress-outer">
        <div
          className="rc-llm-progress-inner"
          style={{
            width: `${validPercent}%`,
            backgroundColor: color,
          }}
        />
      </div>
      {showText && (
        <span className="rc-llm-progress-text" style={{ color }}>
          {validPercent}%
        </span>
      )}
    </div>
  );
};

Progress.displayName = 'Progress';