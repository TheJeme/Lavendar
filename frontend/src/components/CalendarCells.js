import React from "react";

import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
} from "date-fns";

const CalendarCells = (props) => {
  const monthStart = startOfMonth(props.currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      let filteredEvents;
      if (props.events && props.events.length > 0) {
        filteredEvents = props.events.filter(
          (event) =>
            event.date ===
            `${cloneDay.getDate()}.${
              cloneDay.getMonth() + 1
            }.${cloneDay.getFullYear()}`
        );
      }
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, props.selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => props.onDateClick(cloneDay)}
        >
          <span
            className={`number ${isSameDay(day, new Date()) ? "today" : ""}`}
          >
            {formattedDate}
          </span>
          <span className="bg">{formattedDate}</span>
          {filteredEvents && filteredEvents.length > 0 ? (
            <span className="event">{filteredEvents.length}</span>
          ) : null}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default CalendarCells;
