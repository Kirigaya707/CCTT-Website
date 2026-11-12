'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RangeCalendarProps {
  'aria-label'?: string;
  onRangeSelect?: (start: Date | null, end: Date | null) => void;
}

export function RangeCalendar({ 'aria-label': ariaLabel = 'Range calendar', onRangeSelect }: RangeCalendarProps) {
  const [viewDate, setViewDate] = useState(new Date(2026, 10, 1));
  const [rangeStart, setRangeStart] = useState<Date | null>(new Date(2026, 10, 11));
  const [rangeEnd, setRangeEnd] = useState<Date | null>(new Date(2026, 11, 1));

  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const firstMonth = viewDate;
  const secondMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);

  const handleDateClick = (date: Date) => {
    if (!rangeStart || rangeEnd) {
      setRangeStart(date);
      setRangeEnd(null);
      onRangeSelect?.(date, null);
    } else if (date < rangeStart) {
      setRangeStart(date);
      setRangeEnd(null);
      onRangeSelect?.(date, null);
    } else {
      setRangeEnd(date);
      onRangeSelect?.(rangeStart, date);
    }
  };

  const renderMonth = (monthDate: Date, showPrevBtn: boolean, showNextBtn: boolean) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const monthName = monthDate.toLocaleString('default', { month: 'long' });
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    const days: (Date | null)[] = [];
    for (let index = 0; index < startDay; index++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return (
      <div className="w-full sm:w-64">
        <div className="mb-4 flex items-center justify-between px-1">
          {showPrevBtn ? (
            <button
              onClick={prevMonth}
              type="button"
              className="rounded-full p-1.5 text-zinc-700 transition hover:bg-zinc-100"
              aria-label="Previous Month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          ) : (
            <div className="w-7" />
          )}

          <h3 className="text-sm font-semibold tracking-tight text-zinc-950">
            {monthName} {year}
          </h3>

          {showNextBtn ? (
            <button
              onClick={nextMonth}
              type="button"
              className="rounded-full p-1.5 text-zinc-700 transition hover:bg-zinc-100"
              aria-label="Next Month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <div className="w-7" />
          )}
        </div>

        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-medium text-zinc-400">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>

        <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
          {days.map((dateObj, index) => {
            if (!dateObj) {
              return <div key={`empty-${index}`} className="h-8" />;
            }

            const time = dateObj.getTime();
            const isStart = rangeStart && dateObj.toDateString() === rangeStart.toDateString();
            const isEnd = rangeEnd && dateObj.toDateString() === rangeEnd.toDateString();
            const isInRange =
              rangeStart && rangeEnd && time > rangeStart.getTime() && time < rangeEnd.getTime();

            let buttonStyle =
              'mx-auto flex h-8 w-8 items-center justify-center rounded-full font-medium text-zinc-700 transition hover:bg-zinc-100';
            let wrapperStyle = '';

            if (isStart || isEnd) {
              buttonStyle =
                'relative mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 font-semibold text-white';
            }

            if (isInRange) {
              wrapperStyle = 'bg-zinc-100';
              buttonStyle = 'mx-auto flex h-8 w-8 items-center justify-center font-medium text-zinc-900';
            }

            if (isStart && rangeEnd) {
              wrapperStyle = 'rounded-l-full bg-zinc-100';
            }
            if (isEnd && rangeStart) {
              wrapperStyle = 'rounded-r-full bg-zinc-100';
            }

            return (
              <div key={time} className={`py-0.5 ${wrapperStyle}`}>
                <button type="button" onClick={() => handleDateClick(dateObj)} className={buttonStyle}>
                  {dateObj.getDate()}
                  {isStart && <span className="absolute bottom-1 h-1 w-1 rounded-full bg-white" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      aria-label={ariaLabel}
      className="inline-flex flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white p-6 text-left shadow-sm md:flex-row"
    >
      {renderMonth(firstMonth, true, false)}
      <div className="hidden h-64 w-px bg-zinc-200 md:block" />
      {renderMonth(secondMonth, false, true)}
    </div>
  );
}

export const RangeCalendarDemo = () => <RangeCalendar aria-label="Range calendar" />;