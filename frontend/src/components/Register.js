import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showBadEntry, setShowBadEntry] = useState(false);

  const registerUser = () => {
    if (password.length < 6) {
      setPassword("");
      setShowBadEntry(true);
      return;
    }
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
          {showBadEntry ? (
            <h6>Password must be atleast 6 characters long</h6>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
