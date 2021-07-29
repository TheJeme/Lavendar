import React, { useState } from "react";

import Calendar from "./Calendar";
import Tasks from "./Tasks";

const Main = (props) => {
  const [calendarView, setCalendarView] = useState(true);

  const switchView = () => {
    setCalendarView(!calendarView);
    localStorage.removeItem("showTooltip");
  }

  return (
    <>
      <header>
        <div id="logo">
          {localStorage.getItem("showTooltip") ?
          <div className="tooltip">
          <span
            className="icon icon-btn"
            onClick={() => switchView()}
          >
            {calendarView ? "date_range" : "article"}
          </span><span className="tooltip-text">Click icon to switch between calendar and tasks</span>
          </div> : <span
            className="icon icon-btn"
            onClick={() => switchView()}
          >
            {calendarView ? "date_range" : "article"}
          </span>}
          <span>
            Laven<b>dar</b>
          </span>
          <button onClick={() => props.logout()} className="logout text-btn">
            Logout
          </button>
        </div>
      </header>
      <main>{calendarView ? <Calendar /> : <Tasks />}</main>
    </>
  );
};

export default Main;
