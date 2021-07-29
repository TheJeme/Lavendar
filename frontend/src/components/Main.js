import React, { useState } from "react";

import Calendar from "./Calendar";
import Tasks from "./Tasks";

const Main = (props) => {
  const [calendarView, setCalendarView] = useState(true);

  return (
    <>
      <header>
        <div id="logo">
          <span
            className="icon icon-btn"
            onClick={() => setCalendarView(!calendarView)}
          >
            {calendarView ? "date_range" : "article"}
          </span>
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
