import React from 'react';
import './style.css';

export interface SkeletonProps {
  /** 是否展示动画效果 */
  active?: boolean;
  /** 是否显示为圆形 */
  circle?: boolean;
  /** 宽度 */
  width?: number | string;
  /** 高度 */
  height?: number | string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  active = true,
  circle = false,
  width,
  height,
  style,
  className,
}) => {
  const skeletonStyle: React.CSSProperties = {
    width,
    height,
    borderRadius: circle ? '50%' : '4px',
    ...style,
  };

  return (
    <div
      className={`rc-llm-skeleton ${active ? 'rc-llm-skeleton-active' : ''} ${className || ''}`}
      style={skeletonStyle}
    />
  );
};

Skeleton.displayName = 'Skeleton';