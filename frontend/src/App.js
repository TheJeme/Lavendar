import React, { useState } from "react";

import Calendar from "./components/Calendar";
import Auth from "./components/Auth";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
