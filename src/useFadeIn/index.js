import React from "react";
import ReactDOM from "react-dom";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hiii</h1>
      <p {...fadeInP}>lorem ipsum dnjksaf</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
