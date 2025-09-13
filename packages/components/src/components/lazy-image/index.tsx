import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "../skeleton";
import "./style.css";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source */
  src: string;
  /** Image alt text */
  alt: string;
  /** Placeholder to show while loading. */
  placeholder?: React.ReactNode;
  /** Fallback to show on error. */
  errorFallback?: React.ReactNode;
  /** The element that is used as the viewport for checking visibility. Defaults to the browser viewport. */
  root?: Element | null;
  /** Margin around the root. Can be used to preload images. */
  rootMargin?: string;
  /** Percentage of the target's visibility the observer's callback should be executed. */
  threshold?: number | number[];
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  errorFallback,
  root = null,
  rootMargin = "200px",
  threshold = 0,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              img.onerror = () => {
                setError(true);
              };
              observer.unobserve(entry.target);
            }
          });
        },
        { root, rootMargin, threshold }
      );
      observer.observe(currentImageRef);
    }

    return () => {
      if (observer && currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [src, root, rootMargin, threshold]);

  const effectivePlaceholder = placeholder || <Skeleton active />;
  const effectiveErrorFallback = errorFallback || (
    <div className="lazy-image-error">Failed to load image</div>
  );

  return (
    <div
      ref={imageRef}
      className="lazy-image-container"
      style={{ width: props.width, height: props.height }}
    >
      {imageSrc && !error ? (
        <img
          src={imageSrc}
          alt={alt}
          className={isLoaded ? "loaded" : ""}
          {...props}
        />
      ) : error ? (
        effectiveErrorFallback
      ) : (
        effectivePlaceholder
      )}
    </div>
  );
};

LazyImage.displayName;
