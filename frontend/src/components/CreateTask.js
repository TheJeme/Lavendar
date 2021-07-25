import React, { useState } from "react";
import axios from "axios";

const CreateTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const createNewTask = () => {
    if (!title) return;
    axios
      .post(
        "/api/events",
        {
          title: `${title}`,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then(() => {
        axios
          .get("/api/events", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
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
        <div>
          Description{" "}
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <button className="btn">Create</button>
      </div>
      <div className="col col-end">
        <div className="icon">close</div>
      </div>
    </>
  );
};

export default CreateTask;
