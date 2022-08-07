import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import shopEl from "./components/shop";
import "./App.css";




function App() {
  

  return (
    <Router>
      <div>
        <Nav />
        <shopEl />
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
