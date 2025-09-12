import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked (for better UX)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          Ravi_Portfolio
        </Link>
      </div>

      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li>
          <Link to="/" onClick={closeMenu}>
            AboutMe
          </Link>
        </li>
        <li>
          <Link to="/Education" onClick={closeMenu}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/AddInfo" onClick={closeMenu}>
            Add_Info
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

      <button
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={isOpen ? "fas fa-times" : "fas fa-bars"}></span>
      </button>
    </nav>
  );
};

export default NavBar