import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export interface DatePickerProps {
  /** 选中的日期 */
  value?: Date;
  /** 默认日期 */
  defaultValue?: Date;
  /** 日期发生变化时的回调 */
  onChange?: (date: Date) => void;
  /** 日期格式化 */
  format?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 是否显示今天按钮 */
  showToday?: boolean;
  /** 禁用的日期 */
  disabledDate?: (date: Date) => boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  defaultValue,
  onChange,
  format = 'YYYY-MM-DD',
  disabled = false,
  style,
  className,
  showToday = true,
  disabledDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value || defaultValue);
  const [visible, setVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const date = value || defaultValue || new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });

  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return format.replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day);
  };

  const handleDateClick = (date: Date) => {
    if (disabledDate?.(date)) return;
    setSelectedDate(date);
    onChange?.(date);
    setVisible(false);
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];

    let days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      const isDisabled = disabledDate?.(date);

      days.push(
        <td key={day}>
          <button
            className={`rc-llm-date-picker-cell ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
            onClick={() => handleDateClick(date)}
            disabled={isDisabled}
          >
            {day}
          </button>
        </td>
      );

      if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
        weeks.push(<tr key={day}>{days}</tr>);
        days = [];
      }
    }

    return weeks;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleTodayClick = () => {
    const today = new Date();
    setSelectedDate(today);
    onChange?.(today);
    setVisible(false);
  };

  return (
    <div
      ref={pickerRef}
      className={`rc-llm-date-picker ${className || ''}`}
      style={style}
    >
      <div
        className={`rc-llm-date-picker-input ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setVisible(!visible)}
      >
        {selectedDate ? formatDate(selectedDate) : '请选择日期'}
      </div>
      {visible && (
        <div className="rc-llm-date-picker-panel">
          <div className="rc-llm-date-picker-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <span>{currentMonth.getFullYear()}年{currentMonth.getMonth() + 1}月</span>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <table className="rc-llm-date-picker-content">
            <thead>
              <tr>
                <th>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
              </tr>
            </thead>
            <tbody>
              {renderCalendar()}
            </tbody>
          </table>
          {showToday && (
            <div className="rc-llm-date-picker-footer">
              <button onClick={handleTodayClick}>今天</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

DatePicker.displayName = 'DatePicker';