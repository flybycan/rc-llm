import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export interface EllipsisProps {
  /** 要省略的文本内容 */
  children: string;
  /**
   * 显示的行数
   * @description 在 `mode="tail"` 时生效
   */
  rows?: number;
  /**
   * 是否可展开
   * @description 在 `mode="tail"` 时生效
   */
  expandable?: boolean;
  /** 展开/收起时的回调 */
  onExpand?: (expanded: boolean) => void;
  /** 自定义展开/收起按钮 */
  expandNode?: (expanded: boolean) => React.ReactNode;
  /** 省略模式 */
  mode?: 'tail' | 'middle';
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
}

export const Ellipsis: React.FC<EllipsisProps> = ({
  children,
  rows = 1,
  expandable = false,
  onExpand,
  expandNode,
  mode = 'tail',
  style,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [displayText, setDisplayText] = useState(children);

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ellipsisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (mode === 'tail') {
        if (ellipsisRef.current) {
          const isOverflowing =
            ellipsisRef.current.scrollHeight > ellipsisRef.current.clientHeight;
          setIsTruncated(isOverflowing);
        }
      } else {
        // Middle ellipsis logic
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.scrollWidth;
          if (textWidth > containerWidth) {
            setIsTruncated(true);
            const text = children;
            const textLength = text.length;
            // A simple estimation for truncation
            const avgCharWidth = textWidth / textLength;
            const canFitChars = Math.floor(containerWidth / avgCharWidth);
            const half = Math.floor((canFitChars - 3) / 2); // -3 for "..."
            if (half > 0) {
              setDisplayText(
                `${text.slice(0, half)}...${text.slice(textLength - half)}`,
              );
            } else {
              setDisplayText('...');
            }
          } else {
            setIsTruncated(false);
            setDisplayText(children);
          }
        }
      }
    };

    // Use a timeout to ensure DOM is ready for measurement
    const timer = setTimeout(checkTruncation, 0);
    window.addEventListener('resize', checkTruncation);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTruncation);
    };
  }, [children, rows, mode, isExpanded]);

  const handleExpand = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onExpand?.(newExpandedState);
  };

  const renderExpandNode = () => {
    if (!expandable || !isTruncated || mode !== 'tail') return null;

    const content = expandNode
      ? expandNode(isExpanded)
      : isExpanded
      ? '收起'
      : '展开';

    return (
      <a className="rc-llm-ellipsis-expand" onClick={handleExpand}>
        {content}
      </a>
    );
  };

  if (mode === 'middle') {
    return (
      <div
        ref={containerRef}
        className={`rc-llm-ellipsis-wrapper middle ${className || ''}`}
        style={style}
        title={children}
      >
        {displayText}
        {/* Hidden element to measure full text width */}
        <div className="rc-llm-ellipsis-text-hidden" ref={textRef}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`rc-llm-ellipsis-wrapper ${className || ''}`}>
      <div
        ref={ellipsisRef}
        className={`rc-llm-ellipsis ${isExpanded ? 'expanded' : ''}`}
        style={{ ...style, WebkitLineClamp: isExpanded ? 'unset' : rows }}
        title={children}
      >
        {children}
      </div>
      {renderExpandNode()}
    </div>
  );
};

Ellipsis.displayName = 'Ellipsis';
