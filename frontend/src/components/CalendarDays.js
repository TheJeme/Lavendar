import React from "react";

import { format, startOfWeek, addDays } from "date-fns";

const CalendarDays = (props) => {
  const dateFormat = "EEE";
  const days = [];

  let startDate = startOfWeek(props.currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }

  return <div className="days row">{days}</div>;
};

export default CalendarDays;
