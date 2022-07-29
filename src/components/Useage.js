import React, { useState } from "react";
import "./styles/Useage.css";
import Account from "../assets/icons/account.svg";
import Accounts from "../assets/icons/accounts.svg";
const Useage = ({ setUseageCompleted }) => {
  // const [selected, setSelected] = useState(1);
  const submitHandler = (e) => {
    e.preventDefault();
    setUseageCompleted(true);
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <h3>How are you planning to use Eden?</h3>
        <div>We'll streamline you setup accordingly</div>
        <div className="cards-wrapper">
          <div class="card" style={{ width: "16rem" }}>
            <div class="card-body">
              <img src={Account} alt="me"></img>
              <p class="card-subtitle">For myself</p>
              <p class="card-text">
                Write better, Think more clearly,stay organized
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "16rem" }}>
            <div class="card-body">
              <img src={Accounts} alt="others"></img>
              <p class="card-subtitle">With my team</p>
              <p class="card-text">
                Wikis, Docs,tasks& projects, all in one place
              </p>
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
// For myself
// Write better, Think more clearly,stay organized
// With my team
// Wikis, Docs,tasks& projects, all in one place
