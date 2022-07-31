import React from "react";
import "./styles/Navigation.css";
const Navigation = ({
  progressPercentage,
  buttonColor2,
  buttonColor3,
  buttonColor4,
  setContentType,
}) => {
  return (
    <div className="prog">
      <div className="progress" style={{ height: "1px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-label="Progress"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <button
        type="button"
        className={`position-absolute top-0 translate-middle btn btn-lg btn-primary rounded-pill`}
        style={{ width: "3rem", height: "3rem", left: "0%" }}
        onClick={() => {
          setContentType(0);
        }}
      >
        1
      </button>
      <button
        type="button"
        className={`position-absolute top-0 translate-middle btn btn-lg ${buttonColor2} rounded-pill`}
        style={{ width: "3rem", height: "3rem", left: "33%" }}
        onClick={() => {
          setContentType(1);
        }}
      >
        2
      </button>
      <button
        type="button"
        className={`position-absolute top-0 translate-middle btn btn-lg ${buttonColor3} rounded-pill`}
        style={{ width: "3rem", height: "3rem", left: "66%" }}
        onClick={() => {
          setContentType(2);
        }}
      >
        3
      </button>
      <button
        type="button"
        className={`position-absolute top-0 translate-middle btn btn-lg ${buttonColor4} rounded-pill`}
        style={{ width: "3rem", height: "3rem", left: "100%" }}
      >
        4
      </button>
    </div>
  );
};

export default Navigation;
