import React, { useState } from "react";

const Login = () => {
  return (
    <div>
      <div className="header row flex-middle">
        <div className="col col-center">
          <div>
            Email <input type="email" />
          </div>
          <br />
          <div>
            Password <input type="password" name="password" />
          </div>
          <br />
          <div className="col col-center">
            <button className="btn">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
