import React from "react";
import ReactDOM from "react-dom";
import useNotification from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Wanna dance with me?", {
    body: "I know you wannaa"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Send Notification</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
