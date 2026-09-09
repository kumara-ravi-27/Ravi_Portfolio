import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="portfolio-navbar">
      <NavLink to="/" className="nav-brand">
        Thota Ravi Kumar
      </NavLink>

      <nav>
        <ul className="nav-menu">
          <li><NavLink to="/" className="nav-link">AboutMe</NavLink></li>
          <li><NavLink to="/Education" className="nav-link">Education</NavLink></li>
          <li><NavLink to="/Projects" className="nav-link">Projects</NavLink></li>
          <li><NavLink to="/Skills" className="nav-link">Skills</NavLink></li>
          <li><NavLink to="/Contact" className="nav-link">Contact</NavLink></li>
          
          <li><NavLink to="/Cv" className="nav-link">CV</NavLink></li>
          <li><NavLink to="/Updates" className="nav-link">Updates</NavLink></li>
          <li><NavLink to="/Privacy" className="nav-link">Privacy</NavLink></li>

          
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
