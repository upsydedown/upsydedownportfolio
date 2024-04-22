import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Project from "./components/Projects.js";
import About from "./components/About.js";
import Play from "./components/Play.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <>
      <section className="App">
        <div className="introContainer"></div>
        <div className="mainBody">
          <div className="NavigationPanel">
            <Navbar />
          </div>
          <div className="PagesPanel">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/play" element={<Play />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
