import React, { useState } from "react";
import "./Initial.css";
const Initial = ({ setInitialCompleted }) => {
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fullName, displayName);
    setInitialCompleted(true);
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <h3>Welcome! First things first...</h3>
        <div>You can always change them later</div>
        <div className="input-wrapper">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Steve Jobs"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}
          />

          <label>Display Name</label>
          <input
            type="text"
            placeholder="Steve"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            value={displayName}
          />
        </div>
        <div className="button-wrapper">
          <button
            style={{ backgroundColor: "#664de5" }}
            className="workspace-button"
            onClick={submitHandler}
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Initial;
