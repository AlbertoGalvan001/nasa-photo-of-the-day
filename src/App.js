import React from "react";
import SkyList from "./components/SkyList";
import nasalogo from "./assets/nasalogo.jpeg";
import "./App.css";


function App() {
  return (
    <div className="App">

      <div className="App-logo">
        <img className="nasalogo" src={nasalogo} alt="vintage official logo" />
        <h1>Nasa Photo of the Day</h1>

        <div className="App-header">
          <SkyList />
        </div>



      </div>

      <p>

      </p>
    </div>
  );
}

export default App;
