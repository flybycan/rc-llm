import React from "react";
import "./style.css";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
export type AlignContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";

export interface FlexProps {
  /** 子元素 */
  children?: React.ReactNode;
  /** 自定义样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 主轴方向 */
  direction?: FlexDirection;
  /** 是否换行 */
  wrap?: FlexWrap;
  /** 主轴对齐方式 */
  justify?: JustifyContent;
  /** 交叉轴对齐方式 */
  align?: AlignItems;
  /** 多行对齐方式 */
  alignContent?: AlignContent;
  /** 是否垂直布局（direction: column 的快捷方式） */
  vertical?: boolean;
  /** 是否水平布局（direction: row 的快捷方式） */
  horizontal?: boolean;
  /** 是否自动换行 */
  wrapEnabled?: boolean;
  /** 是否填充父容器 */
  fill?: boolean;
  /** 是否内联显示 */
  inline?: boolean;
  /** 间距大小 */
  gap?: number | string;
  /** 子元素间距 */
  space?: number | string;
  /** 是否响应式 */
  responsive?: boolean;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  className = "",
  style,
  direction,
  wrap,
  justify,
  align,
  alignContent,
  vertical = false,
  horizontal = false,
  wrapEnabled = false,
  fill = false,
  inline = false,
  gap,
  space,
  responsive = false,
}) => {
  const getFlexDirection = (): FlexDirection => {
    if (vertical) return "column";
    if (horizontal) return "row";
    return direction || "row";
  };

  const getFlexWrap = (): FlexWrap => {
    if (wrapEnabled) return "wrap";
    return wrap || "nowrap";
  };

  const containerStyle: React.CSSProperties = {
    display: inline ? "inline-flex" : "flex",
    flexDirection: getFlexDirection(),
    flexWrap: getFlexWrap(),
    justifyContent: justify,
    alignItems: align,
    alignContent: alignContent,
    width: fill ? "100%" : undefined,
    height: fill ? "100%" : undefined,
    gap: gap || space,
    ...style,
  };

  const containerClassName = `rc-llm-flex ${className}`.trim();

  return (
    <div className={containerClassName} style={containerStyle}>
      {children}
    </div>
  );
};

Flex.displayName = "Flex";
