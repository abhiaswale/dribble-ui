import React from "react";
import "./styles/Common.css";
import "./styles/Final.css";

import Done from "../assets/done.PNG";
const Final = ({ data }) => {
  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <div className="done-wrapper">
          <img src={Done} alt="done.jpg" />
        </div>
        <h3 className="title">Congratulations {data}!</h3>
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
