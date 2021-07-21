import React from "react";

const CalendarDay = (props) => {
  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={props.onBackClick}>
          expand_less
        </div>
      </div>
      <div className="col col-center">
        <span>{props.selectedDate.toLocaleDateString()}</span>
      </div>
      <div className="col col-end" onClick={props.nextMonth}></div>
    </div>
  );
};

export default CalendarDay;
