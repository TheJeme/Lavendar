import React, { useState } from "react";

const Register = () => {
  const [LoginID, setLoginID] = useState("");
  const [showBadEntry, setShowBadEntry] = useState(false);

  const loginByID = () => {
    setLoginID("");
    setShowBadEntry(true);
  };

  return (
    <div>
      <div className="header row flex-middle">
        <div className="col col-center">
          <div>
            Existing ID{" "}
            <input
              type="text"
              name="LoginID"
              value={LoginID}
              onChange={(e) => setLoginID(e.target.value)}
            />
          </div>
          <br />
          <div className="col col-center">
            <button className="btn" onClick={() => loginByID()}>
              Load
            </button>
          </div>
          {showBadEntry ? <h6>ID is invalid</h6> : null}
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
