import React, { useState } from "react";
import "./Initial.css";
const Work = ({ setWorkCompleted }) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setWorkCompleted(true);
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <h3>Lets setup a home for all your work</h3>
        <div>You can always create another workspace later</div>
        <div className="input-wrapper">
          <label>Workspace Name</label>
          <input
            type="text"
            placeholder="Eden"
            onChange={(e) => {
              setWorkspaceName(e.target.value);
            }}
            value={workspaceName}
          />
          <label>Workspace URL</label>
          <input
            type="text"
            placeholder="www.eden.com /example"
            onChange={(e) => {
              setWorkspaceURL(e.target.value);
            }}
            value={workspaceURL}
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

export default Work;
