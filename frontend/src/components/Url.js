import React, { useState } from "react";

const Register = () => {
  return (
    <div>
      <div className="header row flex-middle">
        <div className="col col-center">
          <div>
            Existing ID <input type="text" />
          </div>
          <br />
          <div className="col col-center">
            <button className="btn">Load</button>
          </div>
        </div>
      </div>
      <div className="header row flex-middle">
        <div className="col col-center">
          <div className="col col-center">
            <button className="btn">Generate new calendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
