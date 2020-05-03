import React from "react";
import ReactDOM from "react-dom";
import useFullscreen from "./useFullscreen";

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://q-cf.bstatic.com/images/hotel/max500/211/211703379.jpg" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
