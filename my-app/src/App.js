import logo from './logo.svg';
import './App.css';
import React from "react";
import ColorChanger from "./components/ColorChanger";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Title of Website</h1>
        <img src="https://bestanimations.com/media/fireworks/671801409ba-awesome-coloful-fireworks-animated-gif-image-3.gif"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;