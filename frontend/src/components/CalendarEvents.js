import React from "react";
import axios from "axios";

import CalendarCreateEvent from "./CalendarCreateEvent";

const CalendarEvents = (props) => {
  const deleteEvent = (id) => {
    axios
      .delete(`/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then(() => {
        axios
          .get("/api/events", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          })
          .then((res) => {
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

  const selectedDateFormated = `${props.selectedDate.getDate()}.${
    props.selectedDate.getMonth() + 1
  }.${props.selectedDate.getFullYear()}`;
  const filteredEvents = props.events.filter(
    (event) => event.date === selectedDateFormated
  );
  const eventObjects = [];
  filteredEvents.forEach((event) => {
    eventObjects.push(
      <div key={event.id} className="header row flex-middle">
        <div className="col col-start">
          <span>&emsp;{event.time !== "undefined" ? event.time : ""}</span>
        </div>
        <div className="col col-center">
          <span className="text-wrap">{event.title}</span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={() => deleteEvent(event.id)}>
            close
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {eventObjects}
      <div className="header row flex-middle">
        {props.showCreateEvent ? (
          <CalendarCreateEvent
            setShowCreateEvent={props.setShowCreateEvent}
            selectedDateFormated={selectedDateFormated}
            setEvents={props.setEvents}
          />
        ) : (
          <div className="col col-center">
            <div
              onClick={() => props.setShowCreateEvent(true)}
              className="icon"
              id="add-event"
            >
              add
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarEvents;
