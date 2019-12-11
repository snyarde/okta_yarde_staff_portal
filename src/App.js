import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Clean</h1>
      </div>
    </Router>
  );
}

export default App;
