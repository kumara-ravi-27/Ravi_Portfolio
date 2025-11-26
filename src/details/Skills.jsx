import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="title">My Skills</h1>

      <div className="skills-container">
        <ul className="skills-list">

          <li>
            <span className="skill-title">DevOps</span>
            <span className="skill-desc">Redhat Linux, Microservices, Docker, Kubernetes,OpenShift</span>
            <div className="progress-bar">
              <div className="progress devops"></div>
            </div>
          </li>
          
          <li>
            <span className="skill-title">ReactJS</span>
            <span className="skill-desc">HTML, CSS, JavaScript</span>
            <div className="progress-bar">
              <div className="progress reactjs"></div>
            </div>
          </li>

          <li>
            <span className="skill-title">SQL</span>
            <span className="skill-desc">PostgreSQL</span>
            <div className="progress-bar">
              <div className="progress sql"></div>
            </div>
          </li>

          <li>
            <span className="skill-title">Python</span>
            <span className="skill-desc">Flask, UI/UX, NumPy, Pandas, SciPy, Matplotlib</span>
            <div className="progress-bar">
              <div className="progress python"></div>
            </div>
          </li>

          <li>
            <span className="skill-title">Tools</span>
            <span className="skill-desc">pgAdmin4, GitHub</span>
            <div className="progress-bar">
              <div className="progress tools"></div>
            </div>
          </li>

          <li>
            <span className="skill-title">IDE</span>
            <span className="skill-desc">VS Code</span>
            <div className="progress-bar">
              <div className="progress ide"></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="soft-skills-container">
        <h2>Soft Skills</h2>
        <ul className="soft-skills">
          <li>Detail-oriented and able to multitask</li>
          <li>Self-motivated for ongoing learning</li>
          <li>Adaptable and quick learner</li>
          <li>Strong organizational skills</li>
          <li>Self-learning mindset</li>
          <li>Enthusiastic about collaborative projects</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
