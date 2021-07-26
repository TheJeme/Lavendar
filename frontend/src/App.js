import React, { useState, useEffect } from "react";
import axios from "axios";

import Main from "./components/Main";
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
    <div>
      {!isLoggedIn ? (
        <Auth setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Main logout={logout} />
      )}
    </div>
  );
};

export default App;
