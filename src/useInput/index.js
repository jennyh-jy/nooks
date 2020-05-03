import React from "react";
import ReactDOM from "react-dom";
import { useInput } from "./useInput";
import "./styles.css";

const App = () => {
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <div>Hello</div>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
