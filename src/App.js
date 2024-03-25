import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";

function App() {
  return (
    <>
      <section className="App">
        <div className="mainBody">
          <Navbar />
          {/* <Hamburger /> */}
        </div>
      </section>
    </>
  );
}

export default App;
