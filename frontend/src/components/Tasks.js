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

  const checkCompleted = (id, statement) => {
    axios
      .put(
        `/api/tasks/${id}`,
        {
          completed: `${statement}`,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then(() => {
        axios
          .get("/api/tasks", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          })
          .then((res) => {
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
      <div className="header row flex-middle">
        <div className="col col-start"></div>
        <div className="col col-center">
          <span className="api-text">Tasks</span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={() => setShowCreateTask(true)}>
            add
          </div>
        </div>
      </div>
      {showCreateTask ? (
        <CreateTask setTasks={setTasks} setShowCreateTask={setShowCreateTask} />
      ) : null}
      {tasks
        .sort((x, y) => {
          return x.completed - y.completed;
        })
        .map((task) => (
          <div key={task.id} className="header tasks row flex-middle">
            <div className="col col-start">
              <input
                type="checkbox"
                checked={task.completed}
                className="checkbox"
                onChange={() => checkCompleted(task.id, !task.completed)}
              />
              <span
                className={`api-text text-wrap ${
                  task.completed ? "completed" : ""
                }`}
              >
                {task.title}
              </span>
            </div>
            <div className="col col-end">
              <div className="icon" onClick={() => deleteTask(task.id)}>
                close
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
