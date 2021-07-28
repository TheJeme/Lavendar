import React, { useState, useEffect } from "react";
import axios from "axios";

import CreateTask from "./CreateTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showCreateTask, setShowCreateTask] = useState(false);

  useEffect(() => {
    axios
      .get("/api/tasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteTask = (id) => {
    axios
      .delete(`/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then(() => {
        axios
          .get("/api/tasks", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setTasks(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="calendar">
      <header className="header row flex-middle">
        <div className="col col-center api-text">
          <span>Tasks</span>
        </div>
      </header>
      {tasks.map((task) => (
        <div key={task.id} className="header tasks row flex-middle">
          <div className="col col-start">
            <input
              type="checkbox"
              checked={task.completed}
              className="checkbox"
            />
            <span className="api-text">{task.title}</span>
          </div>
          <div className="col col-end">
            <div className="icon" onClick={() => deleteTask(task.id)}>
              close
            </div>
          </div>
        </div>
      ))}
      <div className="header row flex-middle">
        {showCreateTask ? (
          <CreateTask
            setTasks={setTasks}
            setShowCreateTask={setShowCreateTask}
          />
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
