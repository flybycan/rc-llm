import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** 文字提示的内容 */
  title: React.ReactNode;
  /** 提示框位置 */
  placement?: TooltipPlacement;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 子元素 */
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = 'top',
  style,
  className,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!tooltipRef.current || !childRef.current || !visible) return;

      const childRect = childRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = childRect.top - tooltipRect.height - 8;
          left = childRect.left + (childRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = childRect.bottom + 8;
          left = childRect.left + (childRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = childRect.top + (childRect.height - tooltipRect.height) / 2;
          left = childRect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top = childRect.top + (childRect.height - tooltipRect.height) / 2;
          left = childRect.right + 8;
          break;
      }

      tooltipRef.current.style.top = `${top}px`;
      tooltipRef.current.style.left = `${left}px`;
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [placement, visible]);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <>
      <div
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      {visible && (
        <div
          ref={tooltipRef}
          className={`rc-llm-tooltip rc-llm-tooltip-${placement} ${className || ''}`}
          style={style}
        >
          {title}
        </div>
      )}
    </>
  );
};