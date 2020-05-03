import React from "react";
import ReactDOM from "react-dom";
import useNetwork from "./useNetwork";

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "we are online" : "we are offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
