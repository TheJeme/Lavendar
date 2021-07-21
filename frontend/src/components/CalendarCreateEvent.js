import React from "react";
import TimePicker from "react-time-picker";

const CalendarCreateEvent = (props) => {
  return (
    <>
      <div className="col col-start"></div>
      <div className="col col-center">
        <div>
          Name <input type="text" maxLength={45} />
        </div>
        <br />
        <div>
          Time{" "}
          <TimePicker clearIcon={null} clockIcon={null} disableClock={true} />
        </div>
        <br />
        <button className="btn">Create</button>
      </div>
      <div className="col col-end" onClick={props.nextMonth}>
        <div className="icon">close</div>
      </div>
    </>
  );
};

export default CalendarCreateEvent;
