import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import Url from "./Url";

const Auth = () => {
  const [authState, setAuthState] = useState("login");
  return (
    <div className="calendar">
      <div className="header row flex-middle">
        <div className="col col-center">
          <span
            onClick={() => setAuthState("login")}
            className={`text-btn ${authState === "login" ? "active" : ""}`}
          >
            Log in
          </span>
        </div>
        <div className="col col-center">
          <span
            onClick={() => setAuthState("register")}
            className={`text-btn ${authState === "register" ? "active" : ""}`}
          >
            Register
          </span>
        </div>
        <div className="col col-center">
          <span
            onClick={() => setAuthState("url")}
            className={`text-btn ${authState === "url" ? "active" : ""}`}
          >
            URL
          </span>
        </div>
      </div>
      {authState === "login" ? (
        <Login />
      ) : authState === "register" ? (
        <Register />
      ) : (
        <Url />
      )}
    </div>
  );
};

export default Auth;
