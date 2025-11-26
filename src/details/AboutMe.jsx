import React from 'react';
import './AboutMe.css';

import profilePic from '../assets/Ravi_pic.jpg';

const AboutMe = () => {
  return (
    <div className="about-container">
      <section id="about-me">
        <h1>About Me</h1>
        <div className="profile-section">
          <img src={profilePic} alt="Thota Ravi Kumar" className="profile-pic" />
          <div className="profile-text">
            <p>
              I'm <strong>Thota Ravi Kumar</strong>, a passionate Software Engineer specializing in web development and open-source contributions. I am dedicated to building innovative, user-focused solutions using modern frameworks. Experienced in collaborative environments, I thrive by continuously learning and solving complex problems with creativity and agility. 🚀
            </p>
            <p><strong>Location:</strong> Hyderabad, Telangana</p>
          </div>
        </div>
      </section>

      <section id="executive-summary">
        <h2>Executive Summary</h2>
        <p>
          Full Stack Application Developer with 4 years of experience at Infosys specializing in <strong>DevOps, Microservices, ReactJS, Python (Fast API), and PostgreSQL</strong>. Successfully deployed 15+ scalable web applications using AWS RDS, serving over 10,000 users while maintaining robust data security. Awarded Infosys’ <em>‘Exceptional Delivery’</em> in 2023 for optimizing database management systems, improving query performance by 40%.
        </p>
      </section>

      <section id="languages">
        <h2>Languages</h2>
        <ul className="language-list">
          <li>English</li>
          <li>Telugu</li>
          <li>Hindi</li>
        </ul>
      </section>

      <section id="life-at-infosys">
        <h2>Life at Infosys</h2>
        <ul className="highlights-list">
          <li>Collaborated on <strong>diverse projects</strong> across global teams using agile methodology to deliver scalable software solutions.</li>
          <li>Contributed to large-scale cross-functional projects, consistently meeting demanding deadlines and quality standards.</li>
          <li>Committed to <strong>continuous learning and upskilling</strong> via Infosys training programs and mentorship culture to stay at the forefront of technology.</li>
          <li>Applied strong problem-solving and analytical skills to support critical business applications and enhance system performance.</li>
          <li>Embraced an inclusive, innovative culture by actively participating in <strong>knowledge sharing</strong> sessions and idea forums.</li>
          <li>Engaged in Infosys cultural and social activities to foster team bonding and maintain a healthy work-life balance.</li>
        </ul>
      </section>

      <section id="awards">
        <h2>Awards & Achievements</h2>
        <ul className="awards-list">
          <li>Recipient of the Infosys <strong>Exceptional Delivery Award</strong>, 2023</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
