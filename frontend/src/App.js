import React, { useState, useEffect } from "react";
import axios from "axios";

import Calendar from "./components/Calendar";
import Auth from "./components/Auth";
import "./App.css";

axios.defaults.baseURL = "http://localhost:3003";

window.onbeforeunload = () => {
  localStorage.removeItem("jwt_token");
};

const App = () => {
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
    <div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            Laven<b>der</b>
          </span>
          {isLoggedIn ? (
            <button onClick={() => logout()} className="logout text-btn">
              Logout
            </button>
          ) : null}
        </div>
      </header>
      <main>
        {isLoggedIn ? <Calendar /> : <Auth setIsLoggedIn={setIsLoggedIn} />}
      </main>
    </div>
  );
};

export default App;
