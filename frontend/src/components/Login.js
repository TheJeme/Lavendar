import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showBadEntry, setShowBadEntry] = useState(false);

  const loginUser = () => {
    axios
      .post("/api/login", {
        email: `${email}`,
        password: `${password}`,
      })
      .then((res) => {
        setEmail("");
        setPassword("");
        localStorage.setItem("jwt_token", res.data.token);
        props.setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPassword("");
        setShowBadEntry(true);
      });
  };

  return (
    <div>
      <div className="header row flex-middle">
        <div className="col col-center">
          <div>
            Email{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            Password{" "}
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="col col-center">
            <button
              className="btn"
              onClick={() => {
                loginUser();
              }}
            >
              Log in
            </button>
          </div>
          {showBadEntry ? <h6>Email or password is wrong</h6> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
