import React from "react";
import TimePicker from "react-time-picker";

import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    showDay: false,
    showCreateEvent: false,
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderCreateEvent() {
    return (
      <>
        <div className="col col-start"></div>
        <div className="col col-center">
          <div>New Event</div>
          <br />
          <div>
            Name <input type="text" maxLength={45} />
          </div>
          <br />
          <div>
            Time{" "}
            <TimePicker clearIcon={null} clockIcon={null} disableClock={true} />
          </div>
          <br />
          <button className="btn">Create</button>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">close</div>
        </div>
      </>
    );
  }

  renderEvents() {
    const events = [];

    for (let i = 0; i < 3; i++) {
      events.push(
        <div key={i} className="header row flex-middle">
          <div className="col col-start">
            <span>&emsp;18.30</span>
          </div>
          <div className="col col-center">
            <span>dasdsa</span>
          </div>
          <div className="col col-end" onClick={this.nextMonth}>
            <div className="icon">close</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {events}
        <div className="header row flex-middle">
          {this.state.showCreateEvent ? (
            this.renderCreateEvent()
          ) : (
            <div className="col col-center">
              <div onClick={this.showCreateEventForm} className="icon">
                add
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  renderDay() {
    const { selectedDate } = this.state;
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.onBackClick}>
            expand_less
          </div>
        </div>
        <div className="col col-center">
          <span>{selectedDate.toLocaleDateString()}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}></div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 1; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    days.push(
      <div className="col col-center" key={0}>
        {format(addDays(startDate, 0), dateFormat)}
      </div>
    );

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(cloneDay)}
          >
            <span
              className={`number ${isSameDay(day, new Date()) ? "today" : ""}`}
            >
              {formattedDate}
            </span>
            <span className="bg">{formattedDate}</span>
            {/*<span className="event">1</span>*/}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
      showDay: true,
    });
  };

  onBackClick = () => {
    this.setState({
      showDay: false,
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  showCreateEventForm = () => {
    this.setState({
      showCreateEvent: true,
    });
  };

  render() {
    return (
      <div className="calendar">
        {!this.state.showDay ? (
          <div>
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        ) : (
          <div>
            {this.renderDay()}
            {this.renderEvents()}
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;
