import "./App.css";
import EdenLogo from "./assets/eden-logo.PNG";
import Work from "./components/Work";
import Initial from "./components/Initial";
import Useage from "./components/Useage";
import Final from "./components/Final";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [progress, setProgress] = useState(16);
  const [buttonColor1, setButtonColor1] = useState("btn-primary");
  const [buttonColor2, setButtonColor2] = useState("btn-light");
  const [buttonColor3, setButtonColor3] = useState("btn-light");
  const [buttonColor4, setButtonColor4] = useState("btn-light");

  const [initialCompleted, setInitialCompleted] = useState(false);
  const [workCompleted, setWorkCompleted] = useState(false);
  const [useageCompleted, setUseageCompleted] = useState(false);

  const [contentType, setContentType] = useState(0);

  const contentTypes = {
    InitialState: 0,
    InitialCompleted: 1,
    WorkCompleted: 2,
    UsageCompleted: 3,
  };

  useEffect(() => {
    if (initialCompleted) {
      setProgress(50);
      setButtonColor2("btn-primary");
      setContentType(contentTypes.InitialCompleted);
    }

    if (workCompleted) {
      setProgress(83);
      setButtonColor3("btn-primary");
      setContentType(contentTypes.WorkCompleted);
    }

    if (useageCompleted) {
      setProgress(100);
      setButtonColor4("btn-primary");
      setContentType(contentTypes.UsageCompleted);
    }
  }, [
    initialCompleted,
    workCompleted,
    useageCompleted,
    contentTypes.InitialCompleted,
    contentTypes.WorkCompleted,
    contentTypes.UsageCompleted,
  ]);

  return (
    <div className="Main">
      <div className="App">
        <div className="wrapper">
          <img src={EdenLogo} alt="eden.jpg" className="logo" />
          <div className="nav-wrapper">
            <Navigation
              progressPercentage={progress}
              buttonColor1={buttonColor1}
              buttonColor2={buttonColor2}
              buttonColor3={buttonColor3}
              buttonColor4={buttonColor4}
              setContentType={setContentType}
            />
          </div>
        </div>
        {contentType === contentTypes.InitialState && (
          <Initial setInitialCompleted={setInitialCompleted} />
        )}
        {contentType === contentTypes.InitialCompleted && (
          <Work setWorkCompleted={setWorkCompleted} />
        )}
        {contentType === contentTypes.WorkCompleted && (
          <Useage setUseageCompleted={setUseageCompleted} />
        )}
        {contentType === contentTypes.UsageCompleted && <Final />}
      </div>
    </div>
    // <div className="App">
    //   <div className="wrapper">
    //     <img src={EdenLogo} alt="eden.jpg" className="logo" />
    //     <div className="nav-wrapper">
    //       <Navigation
    //         progressPercentage={progress}
    //         buttonColor1={buttonColor1}
    //         buttonColor2={buttonColor2}
    //         buttonColor3={buttonColor3}
    //         buttonColor4={buttonColor4}
    //       />
    //     </div>
    //   </div>
    //   {contentType === contentTypes.InitialState && (
    //     <Initial setInitialCompleted={setInitialCompleted} />
    //   )}
    //   {contentType === contentTypes.InitialCompleted && (
    //     <Work setWorkCompleted={setWorkCompleted} />
    //   )}
    //   {contentType === contentTypes.WorkCompleted && (
    //     <Useage setUseageCompleted={setUseageCompleted} />
    //   )}
    //   {contentType === contentTypes.UsageCompleted && <Final />}
    // </div>
  );
}

export default App;
