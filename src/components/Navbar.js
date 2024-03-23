import React from "react";
import "./Navbar.css";
import { Navlink, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, content, ...children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Navlink to={to} {...children}>
        {content}
      </Navlink>
    </li>
  );
};

const Navbar = () => {
  return (
    <>
      <section className="navbarMain">
        <div className="navbody">
          <nav>
            <CustomLink to="/" content="Home" />
            <CustomLink to="/" content="Home" />
            <CustomLink to="/" content="Home" />
            <CustomLink to="/" content="Home" />
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
