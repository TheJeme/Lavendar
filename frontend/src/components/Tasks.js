import React, { useState } from "react";
import axios from "axios";

import CreateTask from "./CreateTask";

const Tasks = () => {
  const [showCreateTask, setShowCreateTask] = useState(false);

  const deleteTask = (id) => {};

  const taskObjects = [];
  for (let i = 0; i < 2; i++) {
    taskObjects.push(
      <div key={i} className="header tasks row flex-middle">
        <div className="col col-start">
          <input type="checkbox" className="checkbox" />
          <span className="api-text">task 0{i}</span>
        </div>
        <div className="col col-end">
          <div className="icon">close</div>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar">
      <header className="header row flex-middle">
        <div className="col col-center api-text">
          <span>Tasks</span>
        </div>
      </header>
      {taskObjects}
      <div className="header row flex-middle">
        {showCreateTask ? (
          <CreateTask setShowCreateTask={setShowCreateTask} />
        ) : (
          <div className="col col-center">
            <div className="icon" onClick={() => setShowCreateTask(true)}>
              add
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
