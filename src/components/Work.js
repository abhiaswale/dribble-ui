import React, { useState } from "react";
import "./styles/Common.css";
const Work = ({ setWorkCompleted }) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (workspaceName.length <= 0) {
      setError("Enter valid workspace name");
      return;
    }
    if (workspaceURL.length <= 0 || !workspaceURL.startsWith("www")) {
      setError("Enter valid workspace url");
      return;
    }
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
            placeholder="www.eden.com | example"
            onChange={(e) => {
              setWorkspaceURL(e.target.value);
            }}
            value={workspaceURL}
          />
        </div>
        <div>{error.length > 0 && <p style={{ color: "red" }}>{error}</p>}</div>

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
