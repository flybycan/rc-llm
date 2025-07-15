import React, { useState, useEffect, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './style.css';

export interface QRCodeProps {
  /** 二维码内容 */
  value: string;
  /** 二维码大小 */
  size?: number;
  /** 二维码颜色 */
  fgColor?: string;
  /** 二维码背景色 */
  bgColor?: string;
  /** 错误纠正级别 */
  level?: 'L' | 'M' | 'Q' | 'H';
  /** 二维码边距 */
  includeMargin?: boolean;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 错误信息 */
  error?: string;
  /** 是否可刷新 */
  refreshable?: boolean;
  /** 刷新回调函数 */
  onRefresh?: () => void;
  /** 自定义刷新图标 */
  refreshIcon?: React.ReactNode;
  /** 自定义错误图标 */
  errorIcon?: React.ReactNode;
  /** 自定义加载图标 */
  loadingIcon?: React.ReactNode;
  /** 自定义样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否支持点击刷新 */
  clickable?: boolean;
  /** 点击回调 */
  onClick?: () => void;
  /** 是否显示遮罩 */
  showMask?: boolean;
  /** 遮罩透明度 */
  maskOpacity?: number;
  /** 遮罩背景色 */
  maskColor?: string;
}

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 128,
  fgColor = '#000000',
  bgColor = '#FFFFFF',
  level = 'L',
  includeMargin = false,
  loading = false,
  error,
  refreshable = true,
  onRefresh,
  refreshIcon,
  errorIcon,
  loadingIcon,
  className = '',
  style,
  clickable = false,
  onClick,
  showMask = true,
  maskOpacity = 0.8,
  maskColor = '#ffffff',
}) => {
  const [isLoading, setIsLoading] = useState(loading);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(error);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  const handleRefresh = useCallback(() => {
    if (onRefresh) {
      onRefresh();
    } else {
      // 默认刷新行为：重新渲染二维码
      setRefreshKey(prev => prev + 1);
    }
  }, [onRefresh]);

  const handleClick = useCallback(() => {
    if (clickable && onClick) {
      onClick();
    } else if (refreshable && errorMessage) {
      handleRefresh();
    }
  }, [clickable, onClick, refreshable, errorMessage, handleRefresh]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="rc-llm-qrcode-status">
          {loadingIcon || (
            <div className="rc-llm-qrcode-loading">
              <div className="rc-llm-qrcode-loading-spinner"></div>
            </div>
          )}
          <div className="rc-llm-qrcode-status-text">加载中...</div>
        </div>
      );
    }

    if (errorMessage) {
      return (
        <div className="rc-llm-qrcode-status">
          {errorIcon || (
            <div className="rc-llm-qrcode-error-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
          )}
          <div className="rc-llm-qrcode-status-text">{errorMessage}</div>
          {refreshable && (
            <button 
              className="rc-llm-qrcode-refresh-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleRefresh();
              }}
            >
              {refreshIcon || (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M21 21v-5h-5" />
                </svg>
              )}
              刷新
            </button>
          )}
        </div>
      );
    }

    return (
      <QRCodeSVG
        key={refreshKey}
        value={value}
        size={size}
        fgColor={fgColor}
        bgColor={bgColor}
        level={level}
        includeMargin={includeMargin}
      />
    );
  };

  const containerClassName = `rc-llm-qrcode ${className}`.trim();
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    ...style,
  };

  return (
    <div 
      className={containerClassName}
      style={containerStyle}
      onClick={handleClick}
    >
      {renderContent()}
      {(isLoading || errorMessage) && showMask && (
        <div 
          className="rc-llm-qrcode-mask"
          style={{
            backgroundColor: maskColor,
            opacity: maskOpacity,
          }}
        />
      )}
    </div>
  );
};

QRCode.displayName = 'QRCode';
