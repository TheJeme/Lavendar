import React, { useState } from "react";

import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarCells from "./CalendarCells";
import CalendarDay from "./CalendarDay";
import CalendarEvents from "./CalendarEvents";

import { addMonths, subMonths } from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDay, setShowDay] = useState(false);
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onBackClick = () => {
    setShowDay(false);
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
    setShowDay(true);
  };

  const showCreateEventForm = () => {
    setShowCreateEvent(true);
  };

  return (
    <div className="calendar">
      {!showDay ? (
        <div>
          <CalendarHeader
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            currentMonth={currentMonth}
          />
          <CalendarDays currentMonth={currentMonth} />
          <CalendarCells
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
          />
        </div>
      ) : (
        <div>
          <CalendarDay
            selectedDate={selectedDate}
            onBackClick={onBackClick}
            nextMonth={nextMonth}
          />
          <CalendarEvents
            showCreateEvent={showCreateEvent}
            nextMonth={nextMonth}
            showCreateEventForm={showCreateEventForm}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
