import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { CascaderOption } from './types';

export interface CascaderProps {
  /** 选项数据 */
  options: CascaderOption[];
  /** 当前值 */
  value?: string[];
  /** 选择后的回调 */
  onChange?: (value: string[]) => void;
  /** 占位符 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义触发器 */
  renderTrigger?: (value: string[], selectedOptions: CascaderOption[]) => React.ReactNode;
}

export const Cascader: React.FC<CascaderProps> = ({
  options,
  value = [],
  onChange,
  placeholder = '请选择',
  disabled = false,
  renderTrigger,
}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<string[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopupVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: CascaderOption, level: number) => {
    const newActiveValue = activeValue.slice(0, level);
    newActiveValue[level] = option.value;
    setActiveValue(newActiveValue);

    if (!option.children) {
      onChange?.(newActiveValue);
      setPopupVisible(false);
    }
  };

  const renderPanel = (options: CascaderOption[], level = 0) => {
    return (
      <div className="rc-llm-cascader-panel" key={level}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`rc-llm-cascader-option ${activeValue[level] === option.value ? 'active' : ''}`}
            onClick={() => handleOptionClick(option, level)}
          >
            {option.label}
            {option.children && <span className="rc-llm-cascader-arrow">{'>'}</span>}
          </div>
        ))}
      </div>
    );
  };

  const getPanels = () => {
    const panels = [renderPanel(options, 0)];
    let currentOptions = options;

    for (let i = 0; i < activeValue.length; i++) {
      const selectedOption = currentOptions.find(option => option.value === activeValue[i]);
      if (selectedOption && selectedOption.children) {
        panels.push(renderPanel(selectedOption.children, i + 1));
        currentOptions = selectedOption.children;
      } else {
        break;
      }
    }
    return panels;
  };

  const getSelectedOptions = (vals: string[], opts: CascaderOption[]): CascaderOption[] => {
    const selected: CascaderOption[] = [];
    let currentOpts = opts;
    for (const val of vals) {
      const found = currentOpts.find(opt => opt.value === val);
      if (found) {
        selected.push(found);
        currentOpts = found.children || [];
      } else {
        break;
      }
    }
    return selected;
  };

  const getDisplayText = () => {
    if (value.length === 0) return placeholder;
    const selectedOptions = getSelectedOptions(value, options);
    return selectedOptions.map(opt => opt.label).join(' / ');
  };

  const handleTriggerClick = () => {
    if (!disabled) {
      setPopupVisible(!popupVisible);
    }
  };

  return (
    <div className="rc-llm-cascader" ref={triggerRef}>
      <div className={`rc-llm-cascader-trigger ${disabled ? 'disabled' : ''}`} onClick={handleTriggerClick}>
        {renderTrigger ? renderTrigger(value, getSelectedOptions(value, options)) : getDisplayText()}
      </div>
      {popupVisible && !disabled && (
        <div className="rc-llm-cascader-popup" ref={popupRef}>
          <div className="rc-llm-cascader-menus">{getPanels()}</div>
        </div>
      )}
    </div>
  );
};

Cascader.displayName = 'Cascader';
