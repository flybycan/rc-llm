import React from 'react';
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
  /** 二维码边距 */
  level?: 'L' | 'M' | 'Q' | 'H';
  /** 错误纠正级别 */
  includeMargin?: boolean;
}

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 128,
  fgColor = '#000000',
  bgColor = '#FFFFFF',
  level = 'L',
  includeMargin = false,
}) => {
  return (
    <div className="rc-llm-qrcode">
      <QRCodeSVG
        value={value}
        size={size}
        fgColor={fgColor}
        bgColor={bgColor}
        level={level}
        includeMargin={includeMargin}
      />
    </div>
  );
};

QRCode.displayName = 'QRCode';
