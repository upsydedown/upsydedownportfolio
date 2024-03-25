import React, { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="hamburger__main"
      aria-label="Toggle Menu"
      onClick={toggleMenu}
    >
      <div className="hamburger__body">
        <span className="hamburger__bar" id="bar1"></span>
        {/* <span className="hamburger__bar" id="bar2"></span> */}
        <span className="hamburger__bar" id="bar3"></span>
      </div>
    </button>
  );
};

export default Hamburger;
