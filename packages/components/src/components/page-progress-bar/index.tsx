import React, { useState, useCallback, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import './style.css';

// 使用 useLayoutEffect 替代 useEffect，确保 DOM 测量和监听在浏览器绘制前完成。

interface ReadingProgressBarProps {
  color?: string;
  height?: string;
  onComplete?: () => void;
  /**
   * 节流延迟时间（毫秒）
   */
  throttleDelay?: number;
  /**
   * 自定义容器选择器，如果不提供则使用整个文档的滚动
   */
  containerSelector?: string;
}

export const PageProgressBar: React.FC<ReadingProgressBarProps> = ({
  color = "#4a90e2",
  height = "4px",
  onComplete,
  throttleDelay = 8,
  containerSelector,
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [targetContainer, setTargetContainer] = useState<HTMLElement | null>(null);
  const hasCompletedRef = useRef(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>();
  const containerRef = useRef<HTMLElement | null>(null);

  /**
   * 核心函数：计算当前的滚动位置和可滚动总距离
   */
  const calculateScrollMetrics = useCallback(() => {
    const container = containerRef.current;
    if (!container) return { scrollTop: 0, scrollHeight: 0 };

    if (container === document.documentElement) {
      // 全局滚动：使用最可靠的组合方式获取 scrollTop
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      // 滚动总距离 = 整个内容高度 - 视口高度
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      return { scrollTop, scrollHeight };
    } else {
      // 自定义容器：使用元素的 scrollTop, scrollHeight, clientHeight
      return {
        scrollTop: container.scrollTop,
        // 滚动总距离 = 容器内容高度 - 容器可见高度
        scrollHeight: container.scrollHeight - container.clientHeight,
      };
    }
  }, []);

  /**
   * 节流的滚动监听器
   */
  const scrollListener = useCallback(() => {
    // 1. 实现节流：清除上一次的定时器
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    // 2. 延迟执行实际的进度计算
    timeoutIdRef.current = setTimeout(() => {
      const { scrollTop, scrollHeight } = calculateScrollMetrics();

      if (scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100;
        // 使用 Math.ceil 保证视觉上 99.x% 算作 100%
        const newProgress = Math.min(100, Math.ceil(progress));

        setReadingProgress((prev) => {
          // 只有进度变化超过阈值或达到 100% 时才更新，减少不必要的渲染
          if (Math.abs(prev - newProgress) > 0.5 || newProgress === 100 || newProgress === 0) {
            return newProgress;
          }
          return prev;
        });
      } else {
        // 内容不足一屏，视为已完成阅读
        setReadingProgress(100);
      }
    }, throttleDelay);
  }, [calculateScrollMetrics, throttleDelay]);

  /**
   * 副作用 1: 设置容器、添加和移除事件监听器 (使用 useLayoutEffect 保证时机)
   */
  useLayoutEffect(() => {
    // 1. 设置容器和监听目标
    const container = containerSelector
      ? document.querySelector<HTMLElement>(containerSelector)
      : document.documentElement;

    const scrollTarget = containerSelector ? container : window;
    containerRef.current = container; // 更新 ref

    // 如果指定了容器选择器，更新 targetContainer 状态以便 Portal 使用
    if (containerSelector && container) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTargetContainer(prev => prev === container ? prev : container);
      // 确保容器有定位上下文，以便 sticky 生效 (如果需要 absolute 定位的话，但 sticky 不需要父级 relative)
      // 不过为了保险起见，或者如果用户没有设置 position，我们可能不需要强制修改容器样式，
      // 因为 sticky 是相对于最近的滚动祖先。
    } else {
      setTargetContainer(prev => prev === null ? prev : null);
    }

    if (!scrollTarget || !container) return;

    // 2. 监听事件
    scrollTarget.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener); // resize 影响 clientHeight

    // 3. 初始计算，保证进度条在页面加载时就显示正确状态
    scrollListener();

    return () => {
      // 4. 清理函数：移除监听器和定时器
      scrollTarget.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [scrollListener, containerSelector]);

  /**
   * 副作用 2: 处理 onComplete 单次触发和重置
   */
  useLayoutEffect(() => {
    // 单次触发逻辑
    if (readingProgress === 100 && onComplete && !hasCompletedRef.current) {
      onComplete();
      hasCompletedRef.current = true;
    }

    // 重置逻辑：当进度明显下降时重置完成状态
    if (readingProgress < 95 && hasCompletedRef.current) {
      hasCompletedRef.current = false;
    }
  }, [readingProgress, onComplete]);


  const progressBarStyle = targetContainer ? {
    position: "sticky",
    bottom: `calc(100% - ${height})`,
  } : {
    position: "fixed",
    top: 0,
  }

  const progressBarContent = (
    <div
      role="progressbar"
      aria-valuenow={readingProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        left: 0,
        width: "100%",
        height,
        backgroundColor: "transparent",
        zIndex: 9999,
        pointerEvents: "none", // 确保不阻碍页面下方的点击
        ...progressBarStyle
      }}
    >
      <div
        style={{
          width: `${readingProgress}% `,
          height: "100%",
          backgroundColor: color,
          // 优化：当进度为 0% 时禁用动画，实现快速归零，防止闪烁
          transition:
            readingProgress > 0 && readingProgress < 100
              ? "width 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
        }}
      />
    </div>
  );

  if (targetContainer) {
    return createPortal(progressBarContent, targetContainer);
  }

  return progressBarContent;
};

PageProgressBar.displayName = 'PageProgressBar';