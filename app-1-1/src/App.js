import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const testClick = () => {
    console.log("react17: test click");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p clstag="pageclick|keycount|home2013|08a" onClick={testClick}>
          微应用 React@{React.version}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
        onClick={() => {
          console.log(window.microApp.getGlobalData());
        }}
      >
        打印 globalData
      </button>
    </div>
  );
}

export default App;
