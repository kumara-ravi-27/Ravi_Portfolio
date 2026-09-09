import React, { useState, useEffect } from 'react';
import './Design.css';

const Design = ({ children }) => {
  // Check local storage or default to dark mode
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-canvas" data-theme={theme}>
      {/* Top Floating Light/Dark Mode Switcher */}
      <div className="theme-switch-container">
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Background Animated Ambience */}
      <div className="canvas-bg-decorations" aria-hidden="true">
        <div className="moving-shape orb-1" />
        <div className="moving-shape orb-2" />
        <div className="moving-shape orb-3" />
      </div>

      {/* Main Content Area */}
      <div className="portfolio-body-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Design;
