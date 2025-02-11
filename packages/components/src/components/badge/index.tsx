import React from 'react';
import './style.css';

export interface BadgeProps {
  /** 徽标内容 */
  content?: React.ReactNode;
  /** 徽标颜色 */
  color?: 'primary' | 'success' | 'warning' | 'danger' | string;
  /** 是否显示小红点 */
  dot?: boolean;
  /** 徽标位置 */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /** 是否独立使用（不包裹任何元素） */
  standalone?: boolean;
  /** 包裹的子元素 */
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  content,
  color = 'danger',
  dot = false,
  position = 'top-right',
  standalone = false,
  children,
}) => {
  const badgeStyle = {
    backgroundColor: ['primary', 'success', 'warning', 'danger'].includes(color)
      ? `var(--rc-llm-color-${color})`
      : color,
  };

  const badge = (
    <span
      className={`rc-llm-badge ${dot ? 'rc-llm-badge-dot' : ''} ${standalone ? 'rc-llm-badge-standalone' : ''}`}
      style={badgeStyle}
    >
      {!dot && content}
    </span>
  );

  if (standalone) {
    return badge;
  }

  return (
    <div className={`rc-llm-badge-wrapper rc-llm-badge-${position}`}>
      {children}
      {badge}
    </div>
  );
};

Badge.displayName = 'Badge';