import React, { useState } from "react";
import "./styles/Useage.css";
import Account from "../assets/icons/account.svg";
import Accounts from "../assets/icons/accounts.svg";
const Useage = ({ setUseageCompleted }) => {
  const [selected, setSelected] = useState(1);
  const submitHandler = (e) => {
    e.preventDefault();
    setUseageCompleted(true);
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <h3>How are you planning to use Eden?</h3>
        <div>We'll streamline your setup accordingly</div>
        <div className="cards-wrapper">
          <div
            className={`${
              selected === 1 ? "selected-card" : "selectable-card"
            }`}
            onClick={() => {
              setSelected(1);
            }}
          >
            <div className="cardd">
              <div className="card-body">
                <img
                  src={Account}
                  alt="me"
                  className={`${selected === 1 ? "selected-icon" : ""}`}
                ></img>
                <p className="card-subtitle">For myself</p>
                <p className="card-text" id="description">
                  Write better, Think more clearly,stay organized
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              selected === 2 ? "selected-card" : "selectable-card"
            }`}
            onClick={() => {
              setSelected(2);
            }}
          >
            <div className="cardd">
              <div className="card-body">
                <img
                  src={Accounts}
                  alt="others"
                  className={`${selected === 2 ? "selected-icon" : ""}`}
                ></img>
                <p className="card-subtitle">With my team</p>
                <p className="card-text" id="description">
                  Wikis, Docs,tasks& projects, all in one place
                </p>
              </div>
            </div>
          </div>
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

export default Useage;
