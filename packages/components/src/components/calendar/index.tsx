import React, { useState } from 'react';
import './style.css';

export interface CalendarProps {
  /** 当前选中的日期 */
  value?: Date;
  /** 默认选中的日期 */
  defaultValue?: Date;
  /** 日期变化时的回调函数 */
  onChange?: (date: Date) => void;
  /** 最小可选日期 */
  minDate?: Date;
  /** 最大可选日期 */
  maxDate?: Date;
  /** 是否显示农历 */
  showLunar?: boolean;
  /** 自定义日期单元格的渲染 */
  dateRender?: (date: Date) => React.ReactNode;
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue = new Date(),
  onChange,
  minDate,
  maxDate,
  showLunar = false,
  dateRender,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(value || defaultValue);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));

  // 获取当月的天数
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // 获取当月第一天是星期几
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // 生成日历网格数据
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);

    // 填充上个月的日期
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth);
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(prevMonth.getFullYear(), prevMonth.getMonth(), daysInPrevMonth - i),
        isCurrentMonth: false,
      });
    }

    // 填充当月的日期
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
        isCurrentMonth: true,
      });
    }

    // 填充下个月的日期
    const remainingDays = 42 - days.length; // 保持6行7列的布局
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;
    setCurrentDate(date);
    onChange?.(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="rc-llm-calendar">
      <div className="rc-llm-calendar-header">
        <button className="rc-llm-calendar-arrow" onClick={handlePrevMonth}>
          &lt;
        </button>
        <span className="rc-llm-calendar-current-month">
          {currentMonth.getFullYear()}年{currentMonth.getMonth() + 1}月
        </span>
        <button className="rc-llm-calendar-arrow" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="rc-llm-calendar-weekdays">
        {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
          <div key={day} className="rc-llm-calendar-weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="rc-llm-calendar-days">
        {calendarDays.map(({ date, isCurrentMonth }) => {
          const isSelected =
            date.getDate() === currentDate.getDate() &&
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear();

          return (
            <div
              key={date.toISOString()}
              className={`rc-llm-calendar-day
                ${isCurrentMonth ? '' : 'rc-llm-calendar-day-other-month'}
                ${isSelected ? 'rc-llm-calendar-day-selected' : ''}
              `}
              onClick={() => handleDateClick(date)}
            >
              {dateRender ? (
                dateRender(date)
              ) : (
                <div className="rc-llm-calendar-date">{date.getDate()}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';