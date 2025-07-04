import React from 'react';
import './style.css';

export interface ModalProps {
  /** 是否可见 */
  visible?: boolean;
  /** 标题 */
  title?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
  /** 确认按钮文字 */
  okText?: string;
  /** 取消按钮文字 */
  cancelText?: string;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 自定义页脚 */
  footer?: React.ReactNode;
  /** 点击确认回调 */
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** 点击取消回调 */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Modal: React.FC<ModalProps> = ({
  visible = false,
  title,
  children,
  okText = '确认',
  cancelText = '取消',
  closable = true,
  footer,
  onOk,
  onCancel,
}) => {
  if (!visible) {
    return null;
  }

  const renderFooter = () => {
    if (footer) {
      return footer;
    }
    return (
      <>
        <button onClick={onCancel} className="rc-llm-modal-button">{cancelText}</button>
        <button onClick={onOk} className="rc-llm-modal-button rc-llm-modal-button-primary">{okText}</button>
      </>
    );
  }

  return (
    <div className="rc-llm-modal-mask">
      <div className="rc-llm-modal-wrapper">
        <div className="rc-llm-modal-header">
          {title}
          {closable && <span className="rc-llm-modal-close" onClick={onCancel}>×</span>}
        </div>
        <div className="rc-llm-modal-body">{children}</div>
        <div className="rc-llm-modal-footer">
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
