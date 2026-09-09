import React, { useState, useEffect } from 'react';
import './Privacy.css';

const Privacy = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Define your secret access key here
  const PAGE_PASSWORD = 'Ravi@1432';

  // Check if already authenticated during this browser session
  useEffect(() => {
    const accessGranted = sessionStorage.getItem('privacy_authenticated');
    if (accessGranted === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputPassword === PAGE_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('privacy_authenticated', 'true');
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('privacy_authenticated');
    setIsAuthenticated(false);
    setInputPassword('');
  };

  // 1. Password Prompt Screen
  if (!isAuthenticated) {
    return (
      <main className="privacy-page-container">
        <section className="privacy-card lock-card">
          <div className="card-badge">Restricted Access</div>
          <h2>🔒 Protected Content</h2>
          <p className="card-desc">
            This section contains confidential information. Please enter the access password to continue.
          </p>

          <form onSubmit={handleLogin} className="privacy-form">
            <input
              type="password"
              placeholder="Enter password..."
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="privacy-input"
              autoFocus
              required
            />
            {errorMessage && <span className="privacy-error">{errorMessage}</span>}
            <button type="submit" className="privacy-btn">
              Unlock Page
            </button>
          </form>
        </section>
      </main>
    );
  }

  // 2. Authenticated Screen (Your Protected Data)
  return (
    <main className="privacy-page-container">
      <section className="privacy-card">
        <div className="privacy-header">
          <div>
            <div className="card-badge">Confidential</div>
            <h2>Privacy & Confidential Data</h2>
          </div>
          <button onClick={handleLogout} className="privacy-btn-secondary">
            Lock Page
          </button>
       
       
       
       
        </div>

        <p className="card-desc">
          Authorized session active. Place your internal portfolio notes, client-confidential architecture, or personal documentation below.
        </p>

        <div className="privacy-content">
          <h3>Protected Information</h3>
          <p>
            This content is hidden from standard visitors until the password is provided.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
