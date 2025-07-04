import React, { useState, useEffect } from 'react';
import './style.css';

export interface ImageProps {
  /** 图片地址 */
  src: string;
  /** 替代文本 */
  alt?: string;
  /** 宽度 */
  width?: string | number;
  /** 高度 */
  height?: string | number;
  /** 填充模式 */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /** 是否可预览 */
  preview?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  width,
  height,
  objectFit = 'fill',
  preview = false,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
      setError(false);
    };
    img.onerror = () => {
      setLoading(false);
      setError(true);
    };
  }, [src]);

  const imageStyle: React.CSSProperties = {
    width,
    height,
    objectFit,
  };

  const handleImageClick = () => {
    if (preview) {
      setPreviewVisible(true);
    }
  };

  const handlePreviewClose = () => {
    setPreviewVisible(false);
  };

  if (loading) {
    return <div className="rc-llm-image-placeholder" style={{ width, height }}>Loading...</div>;
  }

  if (error) {
    return <div className="rc-llm-image-placeholder rc-llm-image-error" style={{ width, height }}>Error</div>;
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={imageStyle}
        className="rc-llm-image"
        onClick={handleImageClick}
      />
      {previewVisible && (
        <div className="rc-llm-image-preview-mask" onClick={handlePreviewClose}>
          <img src={src} alt={alt} className="rc-llm-image-preview-img" />
        </div>
      )}
    </>
  );
};

Image.displayName = 'Image';
