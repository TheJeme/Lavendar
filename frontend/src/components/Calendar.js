import React, { useState, useEffect } from "react";
import axios from "axios";

import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarCells from "./CalendarCells";
import CalendarEvents from "./CalendarEvents";

import { addMonths, subMonths } from "date-fns";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  useEffect(() => {
    axios
      .get("/api/events", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        currentMonth={currentMonth}
      />
      <CalendarDays currentMonth={currentMonth} />
      <CalendarCells
        events={events}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
      <div className="calendar-border" />
      <CalendarEvents
        events={events}
        setEvents={setEvents}
        selectedDate={selectedDate}
        showCreateEvent={showCreateEvent}
        setShowCreateEvent={setShowCreateEvent}
      />
    </div>
  );
};

export default Calendar;
