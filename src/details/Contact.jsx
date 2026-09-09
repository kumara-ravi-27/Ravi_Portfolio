import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:ravikumarthota1998@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-page-container">
      <header className="contact-header">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          Have an opportunity, technical question, or project in mind? Reach out directly or leave a note below.
        </p>
      </header>

      <main className="contact-grid">
        {/* Left Column: Direct Channels & Social Presence */}
        <section className="contact-card info-card" aria-label="Direct Contact Information">
          <div className="card-badge">Direct Channels</div>
          <h2>Contact Info</h2>
          <p className="card-desc">
            Feel free to contact me via phone, email, or connect across professional networks.
          </p>

          <div className="contact-channel-list">
            <div className="channel-item">
              <span className="channel-icon" aria-hidden="true">📞</span>
              <div className="channel-content">
                <span className="channel-label">Call / WhatsApp</span>
                <a href="tel:+919000324008" className="channel-value">
                  +91 90003 24008
                </a>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-icon" aria-hidden="true">✉️</span>
              <div className="channel-content">
                <span className="channel-label">Email Address</span>
                <a
                  href="mailto:ravikumarthota1998@gmail.com?subject=Hello&body=Hi RaviKumar,"
                  className="channel-value"
                >
                  ravikumarthota1998@gmail.com
                </a>
              </div>
            </div>

            <div className="channel-item">
              <span className="channel-icon" aria-hidden="true">📍</span>
              <div className="channel-content">
                <span className="channel-label">Location</span>
                <span className="channel-value">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3>Find Me On</h3>
            <div className="social-grid">
              <a
                href="https://www.linkedin.com/in/ThotaRaviKumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ThotaRaviKumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/kumara_ravi_27/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Right Column: Interactive Contact Form */}
        <section className="contact-card form-card" aria-label="Send Message Form">
          <div className="card-badge">Direct Message</div>
          <h2>Send a Message</h2>
          <p className="card-desc">
            Fill out the form below to send an email inquiry directly to my inbox.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 ----- -----"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Job Opportunity, Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
