import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in Touch</h2>

      <div className="contact-details">
        <div className="contact-item">
          <h3>Phone</h3>
          <p>
            <a href="tel:+919000324008" className="contact-link" aria-label="Phone Number">
              +91 90003 24008
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a
              href="mailto:ravikumarthota1998@gmail.com?subject=Hello&body=Hi RaviKumar."
              className="contact-link"
              aria-label="Email Address"
            >
              ravikumarthota1998@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="social-links" role="region" aria-label="Social media links">
        <h3>Find Me On</h3>
        <nav className="social-nav">
          <a
            href="https://www.linkedin.com/in/ThotaRaviKumar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kumara-ravi-27"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/kumara_ravi_27/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="Instagram Profile"
          >
            Instagram
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Contact;
