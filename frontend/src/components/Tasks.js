import React from "react";
import axios from "axios";

import CreateTask from "./CreateTask";

const Tasks = () => {
  const deleteTask = (id) => {};

  const eventObjects = [];
  eventObjects.push(
    <div key="TODO" className="header row flex-middle">
      <div className="col col-start">
        <input type="checkbox" className="checkbox" />
      </div>
      <div className="col col-center">
        <span>task 01</span>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={() => deleteTask("s")}>
          close
        </div>
      </div>
    </div>
  );

  return (
    <div className="calendar">
      <div className="header row flex-middle">
        <div className="col col-start"></div>
        <div className="col col-center">
          <span>Tasks</span>
        </div>
        <div className="col col-end"></div>
      </div>
      {eventObjects}
      <div className="header row flex-middle">
        {1 == 1 ? (
          <CreateTask />
        ) : (
          <div className="col col-center">
            <div className="icon">add</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
