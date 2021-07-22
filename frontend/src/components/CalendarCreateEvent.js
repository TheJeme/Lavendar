import React, { useState } from "react";
import axios from "axios";
import TimePicker from "react-time-picker";

const CalendarCreateEvent = (props) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const createNewEvent = () => {
    if (!title || !time) return;
    axios
      .post(
        "/api/events",
        {
          title: `${title}`,
          time: `${time}`,
          date: `${props.selectedDateFormated}`,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then(() => {
        props.setShowCreateEvent(false);
        axios
          .get("/api/events", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            props.setEvents(res.data);
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
          Time{" "}
          <TimePicker
            clearIcon={null}
            clockIcon={null}
            disableClock={true}
            value={time}
            onChange={setTime}
          />
        </div>
        <br />
        <button className="btn" onClick={() => createNewEvent()}>
          Create
        </button>
      </div>
      <div className="col col-end">
        <div className="icon" onClick={() => props.setShowCreateEvent(false)}>
          close
        </div>
      </div>
    </>
  );
};

export default CalendarCreateEvent;
