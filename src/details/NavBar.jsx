import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";




const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Ravi_Portfolio</Link>
      </div>
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>AboutMe</Link>
        </li>
        <li>
          <Link to="/Education" onClick={() => setIsOpen(false)}>Education</Link>
        </li>
        <li>
          <Link to="/Projects" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/Skills" onClick={() => setIsOpen(false)}>Skills</Link>
        </li>
        <li>
          <Link to="/AddInfo" onClick={() => setIsOpen(false)}>Add_Info</Link>
        </li>
        <li>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>

      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default NavBar;

