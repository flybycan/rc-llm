import React, { useState, useEffect } from "react";
import "./style.css";

export interface FloatButtonProps {
  /** 按钮类型 */
  type?: "primary" | "default" | "danger";
  /** 按钮形状 */
  shape?: "circle" | "square";
  /** 按钮尺寸 */
  size?: "large" | "middle" | "small";
  /** 按钮图标 */
  icon?: React.ReactNode;
  /** 按钮内容 */
  children?: React.ReactNode;
  /** 按钮位置 */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /** 距离边缘的距离 */
  offset?: number;
  /** 是否显示 */
  visible?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 触发显示的滚动高度 */
  visibilityHeight?: number;
  /** 是否有阴影 */
  shadow?: boolean;
  /** 是否有波纹效果 */
  ripple?: boolean;
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  type = "primary",
  shape = "circle",
  size = "middle",
  icon,
  children,
  position = "bottom-right",
  offset = 24,
  visible: propVisible,
  disabled = false,
  onClick,
  style,
  className,
  visibilityHeight,
  shadow = true,
  ripple = true,
}) => {
  const [visible, setVisible] = useState(
    propVisible !== undefined ? propVisible : true
  );
  const [rippleEffect, setRippleEffect] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // 监听滚动事件，根据 visibilityHeight 控制显示/隐藏
  useEffect(() => {
    if (visibilityHeight !== undefined) {
      const handleScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setVisible(scrollTop >= visibilityHeight);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 初始检查

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [visibilityHeight]);

  // 如果 visible 属性被直接控制，则使用传入的值
  useEffect(() => {
    if (propVisible !== undefined) {
      setVisible(propVisible);
    }
  }, [propVisible]);

  // 处理点击事件和波纹效果
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setRippleEffect({ x, y });

      // 动画结束后清除波纹效果
      setTimeout(() => {
        setRippleEffect(null);
      }, 600);
    }

    onClick?.(e);
  };

  // 计算位置样式
  const positionStyle: React.CSSProperties = {};
  switch (position) {
    case "top-right":
      positionStyle.top = offset;
      positionStyle.right = offset;
      break;
    case "top-left":
      positionStyle.top = offset;
      positionStyle.left = offset;
      break;
    case "bottom-right":
      positionStyle.bottom = offset;
      positionStyle.right = offset;
      break;
    case "bottom-left":
      positionStyle.bottom = offset;
      positionStyle.left = offset;
      break;
  }

  const buttonStyle: React.CSSProperties = {
    ...positionStyle,
    ...style,
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      className={`
        rc-llm-float-button 
        rc-llm-float-button-${type} 
        rc-llm-float-button-${shape} 
        rc-llm-float-button-${size} 
        ${shadow ? "rc-llm-float-button-shadow" : ""}
        ${className || ""}
      `}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyle}
    >
      {icon && <span className="rc-llm-float-button-icon">{icon}</span>}
      {children && (
        <span className="rc-llm-float-button-content">{children}</span>
      )}

      {rippleEffect && (
        <span
          className="rc-llm-float-button-ripple"
          style={{
            left: rippleEffect.x,
            top: rippleEffect.y,
          }}
        />
      )}
    </button>
  );
};

FloatButton.displayName = "FloatButton";
