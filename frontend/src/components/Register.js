import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEntryMessage, setBadEntryMessage] = useState(null);

  const registerUser = () => {
    if (password.length < 6) {
      setPassword("");
      setBadEntryMessage("Password must be atleast 6 characters long");
      return;
    }
    axios
      .post("/api/users", {
        email: `${email}`,
        password: `${password}`,
      })
      .then(() => {
        axios
          .post("/api/login", {
            email: `${email}`,
            password: `${password}`,
          })
          .then((res) => {
            localStorage.setItem("jwt_token", res.data.token);
            console.log(localStorage.getItem("jwt_token"));
            props.setIsLoggedIn(true);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setBadEntryMessage("Email is already used");
      });
    setEmail("");
    setPassword("");
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
            <button className="btn" onClick={() => registerUser()}>
              Register
            </button>
          </div>
          {badEntryMessage ? (
            <h6 className="entry-text">{badEntryMessage}</h6>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
