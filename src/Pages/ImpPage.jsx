import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




import NavBar from "../details/NavBar";
import AboutMe from "../details/AboutMe";
import Education from "../details/Education";
import Projects from "../details/Projects";
import Skills from "../details/Skills";
import Contact from "../details/Contact";

const MainPage = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MainPage;
