import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style.css';

export interface CarouselProps {
  /** 轮播内容 */
  children: React.ReactNode;
  /** 自动轮播间隔时间（毫秒），设置为0时禁用自动轮播 */
  autoplayInterval?: number;
  /** 是否显示指示器 */
  showIndicators?: boolean;
  /** 是否显示切换按钮 */
  showArrows?: boolean;
  /** 切换动画时长（毫秒） */
  animationDuration?: number;
  /** 自定义指示器渲染 */
  indicatorRender?: (index: number, isActive: boolean) => React.ReactNode;
  /** 切换时的回调 */
  onChange?: (current: number) => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplayInterval = 3000,
  showIndicators = true,
  showArrows = true,
  animationDuration = 300,
  indicatorRender,
  onChange,
}) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout>();
  const items = React.Children.toArray(children);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearTimeout(autoplayTimer.current);
    }
  }, []);

  const handleChange = useCallback((index: number) => {
    setIsAnimating(true);
    setCurrent(index);
    onChange?.(index);
    setTimeout(() => setIsAnimating(false), animationDuration);
  }, [animationDuration, onChange]);

  const next = useCallback(() => {
    if (isAnimating) return;
    const nextIndex = (current + 1) % items.length;
    handleChange(nextIndex);
  }, [current, isAnimating, items.length, handleChange]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    const prevIndex = (current - 1 + items.length) % items.length;
    handleChange(prevIndex);
  }, [current, isAnimating, items.length, handleChange]);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayTimer.current = setTimeout(() => {
      next();
    }, autoplayInterval);
  }, [autoplayInterval, next, stopAutoplay]);

  useEffect(() => {
    if (autoplayInterval > 0) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [autoplayInterval, current, startAutoplay, stopAutoplay]);


  return (
    <div className="rc-llm-carousel" onMouseEnter={stopAutoplay} onMouseLeave={() => autoplayInterval > 0 && startAutoplay()}>
      <div className="rc-llm-carousel-content" style={{ transform: `translateX(-${current * 100}%)`, transition: `transform ${animationDuration}ms` }}>
        {items.map((item, index) => (
          <div key={index} className="rc-llm-carousel-item">
            {item}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button className="rc-llm-carousel-arrow rc-llm-carousel-arrow-prev" onClick={prev}>
            &lt;
          </button>
          <button className="rc-llm-carousel-arrow rc-llm-carousel-arrow-next" onClick={next}>
            &gt;
          </button>
        </>
      )}

      {showIndicators && (
        <div className="rc-llm-carousel-indicators">
          {items.map((_, index) => (
            <div
              key={index}
              onClick={() => handleChange(index)}
            >
              {indicatorRender ? (
                indicatorRender(index, index === current)
              ) : (
                <div className={`rc-llm-carousel-indicator ${index === current ? 'active' : ''}`} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';