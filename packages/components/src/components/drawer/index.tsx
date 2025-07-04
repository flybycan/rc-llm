import React, { useEffect, useRef } from 'react';
import './style.css';

export interface DrawerProps {
  /** 是否可见 */
  visible?: boolean;
  /** 标题 */
  title?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
  /** 关闭回调 */
  onClose?: () => void;
  /** 抽屉方向 */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /** 宽度 */
  width?: string | number;
  /** 高度 */
  height?: string | number;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 自定义页脚 */
  footer?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  visible = false,
  title,
  children,
  onClose,
  placement = 'right',
  width = 256,
  height = 256,
  maskClosable = true,
  footer,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  const drawerStyle: React.CSSProperties = {};
  if (placement === 'left' || placement === 'right') {
    drawerStyle.width = width;
  } else {
    drawerStyle.height = height;
  }

  const handleMaskClick = () => {
    if (maskClosable && onClose) {
      onClose();
    }
  };

  return (
    <div className="rc-llm-drawer-mask" onClick={handleMaskClick}>
      <div
        className={`rc-llm-drawer rc-llm-drawer-${placement}`}
        style={drawerStyle}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
        ref={drawerRef}
      >
        <div className="rc-llm-drawer-header">
          {title}
          <span className="rc-llm-drawer-close" onClick={onClose}>×</span>
        </div>
        <div className="rc-llm-drawer-body">{children}</div>
        {footer && <div className="rc-llm-drawer-footer">{footer}</div>}
      </div>
    </div>
  );
};

Drawer.displayName = 'Drawer';
