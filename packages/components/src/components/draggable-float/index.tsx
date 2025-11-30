import React, { useState, useRef, useEffect, useCallback, CSSProperties } from "react";
import "./style.css";

export interface DraggableFloatProps {
  children: React.ReactNode;
  /** 初始位置 */
  initialPosition?: { x: number; y: number };
  /** 拖拽边界元素的引用 */
  boundaryRef?: React.RefObject<HTMLElement>;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
}

export const DraggableFloat: React.FC<DraggableFloatProps> = ({
  children,
  initialPosition = { x: 100, y: 100 },
  boundaryRef,
  style,
  className,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const floatRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0, elementX: 0, elementY: 0 });

  const positioningStyle: CSSProperties = {
    position: boundaryRef ? "absolute" : "fixed",
    top: `${position.y}px`,
    left: `${position.x}px`,
    cursor: isDragging ? "grabbing" : "grab",
    ...style,
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      elementX: position.x,
      elementY: position.y,
    };
    // 阻止默认的文本选中行为
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !floatRef.current) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    let newX = dragStartRef.current.elementX + dx;
    let newY = dragStartRef.current.elementY + dy;

    const floatRect = floatRef.current.getBoundingClientRect();

    if (boundaryRef?.current) {
      // 元素内拖拽
      const boundaryRect = boundaryRef.current.getBoundingClientRect();
      // 相对于父元素的位置，所以要减去父元素的 top/left
      const parentX = boundaryRef.current.scrollLeft;
      const parentY = boundaryRef.current.scrollTop;

      newX = Math.max(
        parentX,
        Math.min(newX, parentX + boundaryRect.width - floatRect.width)
      );
      newY = Math.max(
        parentY,
        Math.min(newY, parentY + boundaryRect.height - floatRect.height)
      );
    } else {
      // 视口内拖拽
      newX = Math.max(0, Math.min(newX, window.innerWidth - floatRect.width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - floatRect.height));
    }

    setPosition({ x: newX, y: newY });
  }, [isDragging, boundaryRef]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={floatRef}
      className={`draggable-float ${className || ""}`}
      style={positioningStyle}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableFloat;
