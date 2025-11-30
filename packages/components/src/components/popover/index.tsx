import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right' | 'center';

export interface PopoverProps {
  /** 弹出层内容 */
  content: React.ReactNode;
  /** 弹出层标题 */
  title?: React.ReactNode;
  /** 弹出层位置 */
  placement?: PopoverPlacement;
  /** 触发行为，可选 'hover' | 'click' */
  trigger?: 'hover' | 'click';
  /** 是否显示关闭按钮 */
  closable?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 是否可见（受控） */
  visible?: boolean;
  /** 显示状态改变时的回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 定位容器的ID，用于限制弹窗显示范围 */
  containerId?: string;
  /** 是否自动调整弹窗大小以适应容器 */
  autoAdjustSize?: boolean;
  /** 子元素 */
  children: React.ReactElement;
}

export const Popover: React.FC<PopoverProps> = ({
  content,
  title,
  placement = 'bottom',
  trigger = 'click',
  closable = true,
  style,
  className,
  visible,
  onVisibleChange,
  containerId,
  autoAdjustSize = true,
  children,
}) => {
  const [internalVisible, setInternalVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const isControlled = visible !== undefined;
  const actualVisible = isControlled ? visible : internalVisible;

  useEffect(() => {
    const updatePosition = () => {
      if (!popoverRef.current || !childRef.current || !actualVisible) return;

      const childRect = childRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();

      // 获取页面滚动位置
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      // 计算父元素在文档中的绝对位置
      const childDocumentTop = childRect.top + scrollTop;
      const childDocumentLeft = childRect.left + scrollLeft;

      // 获取容器边界（仅用于边界检查）
      let containerRect = {
        top: scrollTop,
        left: scrollLeft,
        width: window.innerWidth,
        height: window.innerHeight,
        right: scrollLeft + window.innerWidth,
        bottom: scrollTop + window.innerHeight
      };

      // 获取实际的容器元素（用于 center 模式）
      let actualContainer = null;
      if (containerId) {
        actualContainer = document.getElementById(containerId);
        if (actualContainer) {
          const containerBoundingRect = actualContainer.getBoundingClientRect();
          containerRect = {
            top: containerBoundingRect.top + scrollTop,
            left: containerBoundingRect.left + scrollLeft,
            width: containerBoundingRect.width,
            height: containerBoundingRect.height,
            right: containerBoundingRect.right + scrollLeft,
            bottom: containerBoundingRect.bottom + scrollTop
          };
        }
      } else if (placement === 'center') {
        // center 模式下自动寻找父容器
        let parent = childRef.current.parentElement;
        while (parent && parent !== document.body) {
          const style = window.getComputedStyle(parent);
          if (
            style.position === 'relative' ||
            style.position === 'absolute' ||
            style.position === 'fixed' ||
            style.overflow !== 'visible'
          ) {
            actualContainer = parent;
            const containerBoundingRect = parent.getBoundingClientRect();
            containerRect = {
              top: containerBoundingRect.top + scrollTop,
              left: containerBoundingRect.left + scrollLeft,
              width: containerBoundingRect.width,
              height: containerBoundingRect.height,
              right: containerBoundingRect.right + scrollLeft,
              bottom: containerBoundingRect.bottom + scrollTop
            };
            break;
          }
          parent = parent.parentElement;
        }
      }

      let popoverWidth = popoverRect.width;
      let popoverHeight = popoverRect.height;

      // center 模式下，设置弹窗大小为容器大小
      if (placement === 'center' && actualContainer) {
        const padding = 16; // 内边距
        popoverWidth = containerRect.width - padding * 2;
        popoverHeight = containerRect.height - padding * 2;

        popoverRef.current.style.width = `${popoverWidth}px`;
        popoverRef.current.style.height = `${popoverHeight}px`;
        popoverRef.current.style.maxWidth = 'none';
        popoverRef.current.style.maxHeight = 'none';
        popoverRef.current.style.overflow = 'auto';
      } else {
        // 非 center 模式下的自动调整大小（如果启用）
        if (autoAdjustSize) {
          const maxWidth = containerRect.width - 32;
          const maxHeight = containerRect.height - 32;

          if (popoverWidth > maxWidth) {
            popoverRef.current.style.maxWidth = `${maxWidth}px`;
            popoverRef.current.style.width = 'auto';
            popoverWidth = maxWidth;
          }

          if (popoverHeight > maxHeight) {
            popoverRef.current.style.maxHeight = `${maxHeight}px`;
            popoverRef.current.style.overflow = 'auto';
            popoverHeight = maxHeight;
          }
        }
      }

      // 计算基础位置（以父元素中心为基准，在文档坐标系中）
      const childCenterX = childDocumentLeft + childRect.width / 2;
      const childCenterY = childDocumentTop + childRect.height / 2;

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = childDocumentTop - popoverHeight - 12; // 增加间距
          left = childCenterX - popoverWidth / 2; // 以父元素中心为准
          break;
        case 'bottom':
          top = childDocumentTop + childRect.height + 12; // 增加间距
          left = childCenterX - popoverWidth / 2; // 以父元素中心为准
          break;
        case 'left':
          top = childCenterY - popoverHeight / 2; // 以父元素中心为准
          left = childDocumentLeft - popoverWidth - 12; // 增加间距
          break;
        case 'right':
          top = childCenterY - popoverHeight / 2; // 以父元素中心为准
          left = childDocumentLeft + childRect.width + 12; // 增加间距
          break;
        case 'center':
          // center 模式：在容器中心显示
          if (actualContainer) {
            const padding = 16;
            top = containerRect.top + padding;
            left = containerRect.left + padding;
          } else {
            // 如果没有容器，就在父元素中心显示
            top = childCenterY - popoverHeight / 2;
            left = childCenterX - popoverWidth / 2;
          }
          break;
      }

      // 视口边界检查和调整（在文档坐标系中）
      // center 模式不需要边界检查
      if (placement !== 'center') {
        const padding = 8;
        const viewportLeft = scrollLeft;
        const viewportTop = scrollTop;
        const viewportRight = scrollLeft + window.innerWidth;
        const viewportBottom = scrollTop + window.innerHeight;

        // 水平边界检查
        if (left < viewportLeft + padding) {
          left = viewportLeft + padding;
        } else if (left + popoverWidth > viewportRight - padding) {
          left = viewportRight - popoverWidth - padding;
        }

        // 垂直边界检查
        if (top < viewportTop + padding) {
          top = viewportTop + padding;
        } else if (top + popoverHeight > viewportBottom - padding) {
          top = viewportBottom - popoverHeight - padding;
        }
      }

      popoverRef.current.style.top = `${top}px`;
      popoverRef.current.style.left = `${left}px`;
    };

    if (actualVisible) {
      // 使用 setTimeout 确保 DOM 已渲染
      setTimeout(updatePosition, 0);
    }

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [placement, actualVisible, containerId, autoAdjustSize]);

  const handleVisibleChange = useCallback((newVisible: boolean) => {
    if (!isControlled) {
      setInternalVisible(newVisible);
    }
    onVisibleChange?.(newVisible);
  }, [isControlled, onVisibleChange]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      handleVisibleChange(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      handleVisibleChange(false);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      handleVisibleChange(!actualVisible);
    }
  };

  const handleClose = () => {
    handleVisibleChange(false);
  };

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actualVisible &&
        trigger === 'click' &&
        popoverRef.current &&
        childRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !childRef.current.contains(event.target as Node)
      ) {
        handleVisibleChange(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [actualVisible, trigger, handleVisibleChange]);

  return (
    <>
      <div
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      {actualVisible && createPortal(
        <div
          ref={popoverRef}
          className={`rc-llm-popover rc-llm-popover-${placement} ${className || ''}`}
          style={style}
        >
          {title && (
            <div className="rc-llm-popover-title">
              {title}
              {closable && (
                <span className="rc-llm-popover-close" onClick={handleClose}>
                  ×
                </span>
              )}
            </div>
          )}
          {!title && closable && (
            <span className="rc-llm-popover-close rc-llm-popover-close-only" onClick={handleClose}>
              ×
            </span>
          )}
          <div className="rc-llm-popover-content">{content}</div>
        </div>,
        document.body
      )}
    </>
  );
};

Popover.displayName = 'Popover';