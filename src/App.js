import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./Pages/Home";
import "./App.css";



  const clickCurrency = (clickAmount = 4) => {
    setCurrency(currency + clickAmount);
  };

function App() {
  

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home clickCurrency={clickCurrency}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
