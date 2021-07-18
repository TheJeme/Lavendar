import React from "react";

import Calendar from "./components/Calendar";
import Auth from "./components/Auth";

import "./App.css";

const App = () => {
  const isLoggedIn = true;
  return (
    <div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            Laven<b>der</b>
          </span>
        </div>
      </header>
      <main>{isLoggedIn ? <Calendar /> : <Auth />}</main>
    </div>
  );
};

export default App;
