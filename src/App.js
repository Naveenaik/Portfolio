//import logo from "./logo.svg";
import "./App.css";
//import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
