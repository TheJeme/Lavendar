import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Calendar from "./components/Calendar";
import Auth from "./components/Auth";
import Api from "./components/Api";
import "./App.css";

axios.defaults.baseURL = "http://localhost:3003";

window.onbeforeunload = () => {
  localStorage.removeItem("jwt_token");
};

const App = () => {
  const [calendarView, setCalendarView] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt_token")) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const logout = () => {
    localStorage.removeItem("jwt_token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <header>
          <div id="logo">
            <span
              className="icon"
              onClick={() => setCalendarView(!calendarView)}
            >
              {calendarView ? "date_range" : "article"}
            </span>
            <span>
              Laven<b>dar</b>
            </span>
            {isLoggedIn ? (
              <button onClick={() => logout()} className="logout text-btn">
                Logout
              </button>
            ) : null}
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {!isLoggedIn ? (
                <Auth setIsLoggedIn={setIsLoggedIn} />
              ) : calendarView ? (
                <Calendar />
              ) : null}
            </Route>
            <Route exact path="/api">
              <Api />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
