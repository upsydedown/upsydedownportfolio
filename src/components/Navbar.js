import React, { useState } from "react";
import "./Navbar.css";
import { Navlink, useMatch, useResolvedPath } from "react-router-dom";

// const CustomLink = ({ to, content, ...children }) => {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Navlink to={to} {...children}>
//         {content}
//       </Navlink>
//     </li>
//   );
// };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track navbar visibility on mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle navbar visibility
  };
  return (
    <>
      <section className="navbarMain">
        <div className={`nav ${isOpen ? "active" : ""}`}>
          <nav className="navMenu">
            <li className="navItem">
              <a href="">Home</a>
            </li>
            <li className="navItem">
              <a href="">About</a>
            </li>
            <li className="navItem">
              <a href="">Projects</a>
            </li>
            <li className="navItem">
              <a href="">Play</a>
            </li>
            <li className="navItem">
              <a href="">Resume</a>
            </li>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
