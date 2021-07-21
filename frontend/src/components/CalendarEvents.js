import React from "react";

import CalendarCreateEvent from "./CalendarCreateEvent";

const CalendarEvents = (props) => {
  const events = [];

  for (let i = 0; i < 3; i++) {
    events.push(
      <div key={i} className="header row flex-middle">
        <div className="col col-start">
          <span>&emsp;18.30</span>
        </div>
        <div className="col col-center">
          <span>dasdsa</span>
        </div>
        <div className="col col-end" onClick={props.nextMonth}>
          <div className="icon">close</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {events}
      <div className="header row flex-middle">
        {props.showCreateEvent ? (
          <CalendarCreateEvent nextMonth={props.nextMonth} />
        ) : (
          <div className="col col-center">
            <div onClick={props.showCreateEventForm} className="icon">
              add
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarEvents;
