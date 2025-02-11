import React, { useState, useRef } from 'react';
import './style.css';

export interface InputProps {
  /** 输入框的值 */
  value?: string;
  /** 输入框默认值 */
  defaultValue?: string;
  /** 输入框占位符 */
  placeholder?: string;
  /** 输入框类型 */
  type?: 'text' | 'password';
  /** 输入框大小 */
  size?: 'large' | 'middle' | 'small';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 前缀图标 */
  prefix?: React.ReactNode;
  /** 后缀图标 */
  suffix?: React.ReactNode;
  /** 输入框状态 */
  status?: 'error' | 'warning';
  /** 输入框内容变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框获得焦点时的回调 */
  onFocus?: () => void;
  /** 输入框失去焦点时的回调 */
  onBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({
  value,
  defaultValue = '',
  placeholder,
  type = 'text',
  size = 'middle',
  disabled = false,
  allowClear = false,
  prefix,
  suffix,
  status,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [inputValue, setInputValue] = useState(value ?? defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!value) {
      setInputValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (!value) {
      setInputValue('');
    }
    onChange?.('');
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const classes = [
    'rc-llm-input-wrapper',
    `rc-llm-input-${size}`,
    disabled && 'rc-llm-input-disabled',
    status && `rc-llm-input-${status}`,
    isFocused && 'rc-llm-input-focused',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {prefix && <span className="rc-llm-input-prefix">{prefix}</span>}
      <input
        ref={inputRef}
        className="rc-llm-input"
        type={type}
        value={value ?? inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {allowClear && (inputValue || value) && (
        <span className="rc-llm-input-clear" onClick={handleClear}>
          ×
        </span>
      )}
      {suffix && <span className="rc-llm-input-suffix">{suffix}</span>}
    </div>
  );
};

Input.displayName = 'Input';