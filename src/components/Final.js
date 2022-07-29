import React from "react";
import "./Initial.css";
import "./Final.css";

import Done from "../assets/done.PNG";
const Final = () => {
  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <div className="done-wrapper">
          <img src={Done} />
        </div>
        <h3 className="title">Congratulations Eren!</h3>
        <div className="description">
          You have completed the onboarding, you can start using the Eden!
        </div>
        <div className="button-wrapper">
          <button
            style={{ backgroundColor: "#664de5" }}
            className="workspace-button"
          >
            Launch Eden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Final;
