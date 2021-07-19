import React from "react";

import Calendar from "./components/Calendar";
import Auth from "./components/Auth";

import "./App.css";

const App = () => {
  const isLoggedIn = false;
  return (
    <div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            Laven<b>der</b>
          </span>
          <button className="logout text-btn">Logout</button>
        </div>
      </header>
      <main>{isLoggedIn ? <Calendar /> : <Auth />}</main>
    </div>
  );
};

export default App;
