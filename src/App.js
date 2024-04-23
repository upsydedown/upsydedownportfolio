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
    setDisplayingUnlockMessage(true); // Show temporary unlock message
  };

  useEffect(() => {
    if (displayingUnlockMessage) {
      const timeoutId = setTimeout(() => {
        setDisplayingUnlockMessage(false);
      }, 5000); // Timeout after 5 seconds

      return () => clearTimeout(timeoutId); // Cleanup function for unmounting
    }
  }, [displayingUnlockMessage]); // Re-run useEffect on change of displayingUnlockMessage

  return (
    <>
      <section className="App">
        <div className="introMain">
          {!unlocked && ( // Conditionally render content based on unlocked state
            <div className="flex introMain__LockBody">
              <h1 className="animate__fadeInRight animate__delay-5s">
                Ready to enter
              </h1>
              <button onClick={handleUnlock}>
                <i className="fas fa-lock"></i> Unlock
              </button>
            </div>
          )}
          {displayingUnlockMessage && ( // Show temporary unlock message
            <div className="flex introMain__UnlockBody ">
              <h1 className="">Hello there</h1>
              <button disabled>
                <i className="fi fi-rs-user"></i> Unlocked
              </button>
            </div>
          )}

          {unlocked &&
            !displayingUnlockMessage && ( // Show main content after unlock
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
