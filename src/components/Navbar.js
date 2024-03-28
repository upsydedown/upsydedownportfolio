import React, { useState } from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import "./Hamburger.css";


const CustomLink = ({ to, content, ...children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to} {...children}>
        {content}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="navbarMain">
        <div className="navBody">
          <li className="logo">
            <a href="">Website</a>
          </li>
          <button
            className={`hamburger__main ${isOpen ? "close" : "open"}`}
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <div className="hamburger__body">
              <span className="hamburger__bar" id="bar1"></span>
              {/* <span className="hamburger__bar" id="bar2"></span> */}
              <span className="hamburger__bar" id="bar3"></span>
            </div>
          </button>
          <nav className={`navMenu ${isOpen ? "active" : ""}`}>
            <CustomLink to="/" content="Home" />
            <CustomLink to="/about" content="About" />
            <CustomLink to="/projects" content="Projects" />
            <CustomLink to="/play" content="Play" />
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
