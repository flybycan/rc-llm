import React from 'react';
import './style.css';

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'danger';
  /** 按钮大小 */
  size?: 'large' | 'middle' | 'small';
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮内容 */
  children?: React.ReactNode;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={`rc-llm-button rc-llm-button-${type} rc-llm-button-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';