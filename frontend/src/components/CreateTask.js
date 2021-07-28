import React, { useState } from "react";
import axios from "axios";

const CreateTask = (props) => {
  const [title, setTitle] = useState();
  const createNewTask = () => {
    if (!title) return;
    axios
      .post(
        "/api/tasks",
        {
          title: `${title}`,
          completed: false,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then(() => {
        props.setShowCreateTask(false);
        axios
          .get("/api/tasks", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            props.setTasks(res.data);
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
    <>
      <div className="col col-start"></div>
      <div className="col col-center">
        <div>
          Title{" "}
          <input
            name="title"
            type="text"
            maxLength={45}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <button className="btn" onClick={() => createNewTask()}>
          Create
        </button>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={() => props.setShowCreateTask(false)}>
          close
        </div>
      </div>
    </>
  );
};

export default CreateTask;
