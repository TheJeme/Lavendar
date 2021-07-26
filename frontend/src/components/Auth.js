import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import Id from "./Id";

import Api from "./Api";

const Auth = (props) => {
  const [authState, setAuthState] = useState("login");
  const [loginView, setLoginView] = useState(true);

  return (
    <div>
      <header>
        <div id="logo">
          <span className="icon">account_box</span>
          <span>
            Laven<b>dar</b>
          </span>
          <button
            className="logout text-btn"
            onClick={() => setLoginView(!loginView)}
          >
            {loginView ? "API" : "Login"}
          </button>
        </div>
      </header>
      {loginView ? (
        <main className="calendar">
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
                className={`text-btn ${
                  authState === "register" ? "active" : ""
                }`}
              >
                Register
              </span>
            </div>
            <div className="col col-center">
              <span
                onClick={() => setAuthState("id")}
                className={`text-btn ${authState === "id" ? "active" : ""}`}
              >
                ID
              </span>
            </div>
          </div>
          {authState === "login" ? (
            <Login setIsLoggedIn={props.setIsLoggedIn} />
          ) : authState === "register" ? (
            <Register setIsLoggedIn={props.setIsLoggedIn} />
          ) : (
            <Id setIsLoggedIn={props.setIsLoggedIn} />
          )}
        </main>
      ) : (
        <Api />
      )}
    </div>
  );
};

export default Auth;
