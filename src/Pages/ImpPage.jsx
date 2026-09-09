import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Design from "../details/Design";
import NavBar from "../details/NavBar";
import AboutMe from "../details/AboutMe";
import Education from "../details/Education";
import Projects from "../details/Projects";
import Skills from "../details/Skills";
import Contact from "../details/Contact";
import Updates from "../details/Updates";
import Cv from "../details/Cv";
import Privacy from "../details/Privacy";

const MainPage = () => {
  return (
    <Router>
      <Design>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/Privacy" element={<Privacy />} />

        </Routes>
      </Design>
    </Router>
  );
};

export default MainPage;
