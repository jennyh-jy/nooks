import React from "react";
import ReactDOM from "react-dom";
import useBeforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("pls don't leave...");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>HELLO</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
