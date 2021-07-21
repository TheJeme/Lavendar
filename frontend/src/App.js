import React, { useState, useEffect } from "react";
import axios from "axios";

import Calendar from "./components/Calendar";
import Auth from "./components/Auth";
import "./App.css";

axios.defaults.baseURL = "http://localhost:3003";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("jwt_token")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            Laven<b>der</b>
          </span>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="logout text-btn"
            >
              Logout
            </button>
          ) : null}
        </div>
      </header>
      <main>{isLoggedIn ? <Calendar /> : <Auth />}</main>
    </div>
  );
};

export default App;
