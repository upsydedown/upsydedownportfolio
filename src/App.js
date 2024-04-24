import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Project from "./components/Projects.js";
import About from "./components/About.js";
import Play from "./components/Play.js";
import Contact from "./components/Contact.js";
import "animate.css";
import "./components/Lock_Unlock.css";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [displayingUnlockMessage, setDisplayingUnlockMessage] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    setDisplayingUnlockMessage(true);
  };

  useEffect(() => {
    if (displayingUnlockMessage) {
      const timeoutId = setTimeout(() => {
        setDisplayingUnlockMessage(false);
      }, 3000); // Timeout after 5 seconds

      return () => clearTimeout(timeoutId);
    }
  }, [displayingUnlockMessage]);

  return (
    <>
      <section className="App">
        <div className="introMain">
          {!unlocked && (
            <div className="flex introMain__LockBody">
              <button className="btn1" onClick={handleUnlock}>
                <i className="fas fa-lock"></i> Alohamora
              </button>
            </div>
          )}
          {displayingUnlockMessage && (
            <div className="flex introMain__UnlockBody ">
              <h1 className="">Welcome to the magical world of code!</h1>
              <button disabled>
                <i className="fi fi-rs-user"></i> Disenchanted
              </button>
            </div>
          )}

          {unlocked && !displayingUnlockMessage && (
            <div>
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
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
