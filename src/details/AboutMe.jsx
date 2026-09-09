import React from 'react';
import './AboutMe.css';
import profilePic from '../assets/Ravi_pic.jpg'; // Adjust path if needed

const AboutMe = () => {
  return (
    <main className="about-page-container">
      {/* Profile Header */}
      <section className="about-card" id="about-me">
        <div className="card-badge">Profile Overview</div>
        <h1>About Me</h1>
        <div className="profile-section">
          <img src={profilePic} alt="Thota Ravi Kumar" className="profile-pic" />
          <div className="profile-text">
            <p>
              I'm <strong>Thota Ravi Kumar</strong>, a Senior DevOps & Cloud Integration Engineer specializing in 
              carrier-grade platform deployments, Kubernetes orchestration, and cloud-native automation. 
              Experienced in mission-critical environments, I combine technical precision with proven leadership, 
              disciplined execution, and collaborative problem-solving. 🚀
            </p>
            <p className="profile-meta-info">
              <span>📍 <strong>Location:</strong> Hyderabad, Telangana, India</span>
              <span>✉️ <strong>Email:</strong> ravikumarthota1998@gmail.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="about-card" id="executive-summary">
        <div className="card-badge">Summary</div>
        <h2>Executive Summary</h2>
        <p>
          Senior DevOps & Cloud Integration Engineer with 5+ years of experience delivering scalable infrastructure 
          and production integrations across <strong>AWS, OpenShift, Kubernetes, and Nokia Cloud Platforms (NCP/NCS)</strong>. 
          Proven track record in deploying complex telecom microservices (NCOM, NCD), authoring zero-downtime Methods of Procedure (MOPs), 
          and automating disaster recovery pipelines. Honored with the <em>Infosys Exceptional Delivery Award (2023)</em> for 
          optimizing database performance and query execution speeds by 40%.
        </p>
      </section>

      {/* Life at Infinite Computer Solutions */}
      <section className="about-card" id="life-at-infinite">
        <div className="card-badge">Current Experience</div>
        <h2>Life at Infinite Computer Solutions (Client: Nokia)</h2>
        <ul className="highlights-list">
          <li>
            Collaborated with <strong>global telecom and enterprise clients</strong> through major accounts like Nokia, handling multi-tier client engagements across the USA, Germany, and Spain.
          </li>
          <li>
            Managed and configured <strong>diverse secure network environments</strong>, utilizing Cisco AnyConnect VPN, Remote Desktop Protocol (RDP), and Nokia RAS to maintain uninterrupted connectivity.
          </li>
          <li>
            Ensured high service availability by strictly adhering to project-specific <strong>security protocols and operational SOPs/MOPs</strong> tailored to distinct client environments.
          </li>
          <li>
            Maintained strong stakeholder relationships by delivering <strong>proactive cross-cultural communication</strong> and ensuring strict adherence to global compliance standards.
          </li>
          <li>
            Provided continuous operational support and critical troubleshooting across <strong>multi-time-zone rotational shifts</strong> to meet stringent client SLAs.
          </li>
        </ul>
      </section>

      {/* Life at Infosys */}
      <section className="about-card" id="life-at-infosys">
        <div className="card-badge">Career Milestone</div>
        <h2>Life at Infosys</h2>
        <ul className="highlights-list">
          <li>Managed enterprise microservices (APIHub, CoHTTP, FEEM, FEEMNode) across 10+ staging and production environments.</li>
          <li>Handled high-availability deployments across 15+ global production regions (India, UK, USA) with container runtimes (Docker, Podman, OpenShift).</li>
          <li>Optimized APIHub environment setup scripts, reducing developer provisioning time by 6 hours per deployment.</li>
          <li>Embraced an inclusive culture by participating actively in knowledge-sharing forums, mentorship, and team hackathons.</li>
        </ul>
      </section>

      {/* NEW: Leadership & National Cadet Corps (NCC) */}
      <section className="about-card" id="ncc-leadership">
        <div className="card-badge">Leadership & Service</div>
        <h2>National Cadet Corps (NCC) — Leadership & Achievements</h2>
        
        <div className="ncc-header-block">
          <div className="ncc-role-badge">SUO • Senior Under Officer</div>
          <p className="ncc-unit-info">
            <strong>1(A) EME COY NCC</strong> &nbsp;|&nbsp; Kakinada Group &nbsp;|&nbsp; Andhra Pradesh Directorate
          </p>
        </div>

        <ul className="highlights-list">
          <li>
            Appointed as <strong>Senior Under Officer (SUO)</strong>, the highest cadet rank in the unit, commanding cadet contingents, leading ceremonial parades, and maintaining rigorous battalion drill discipline.
          </li>
          <li>
            Successfully awarded the prestigious <strong>NCC 'C' Certificate</strong>, validating supreme competency in military drill, weapon handling, map reading, field craft, and defense organization.
          </li>
          <li>
            Represented the directorate at prestigious <strong>National Integration Camps (NIC)</strong> alongside regular Annual Training Camps (ATC), collaborating with cadet delegations across diverse states of India.
          </li>
          <li>
            Spearheaded youth development, disaster management drills, and community welfare drives, cultivating decisive leadership, situational awareness, and high-pressure operational execution.
          </li>
        </ul>
      </section>

      {/* Awards & Languages */}
      <div className="about-dual-grid">
        <section className="about-card" id="awards">
          <div className="card-badge">Honors</div>
          <h2>Awards & Accreditations</h2>
          <ul className="awards-list">
            <li>🏅 <strong>NCC 'C' Certificate</strong> — Senior Under Officer (SUO), 1(A) EME Coy NCC</li>
            <li>🏆 <strong>Infosys Exceptional Delivery Award (2023)</strong> — Best Performance</li>
            <li>📜 <strong>Nokia MI CNS LNI Certification</strong> — Cloud-Native Network Integration</li>
          </ul>
        </section>

        <section className="about-card" id="languages">
          <div className="card-badge">Communication</div>
          <h2>Languages</h2>
          <ul className="language-pills">
            <li>English</li>
            <li>Telugu</li>
            <li>Hindi</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
