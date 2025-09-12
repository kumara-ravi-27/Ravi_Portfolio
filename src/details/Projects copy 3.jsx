import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Live Projects</h3>
          <p>
            <a
              href="https://github.com/kumara-ravi-27/Ravi_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              Shopping Mall-app1 Repo
            </a>{' '}
            |{' '}
            <a
              href="https://main.djtjbedieu57y.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Shopping Mall-app1 <b>LIVE</b>
            </a>
          </p>

          <p>
            <a
              href="https://github.com/kumara-ravi-27/Ravi_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              Gallery app-1 Repo
            </a>{' '}
            |{' '}
            <a
              href="https://main.djtjbedieu57y.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Gallery app-1 <b>LIVE</b>
            </a>
          </p>

          <p>
            <a
              href="https://github.com/kumara-ravi-27/Ravi_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              Library System Management Repo
            </a>{' '}
            |{' '}
            <a
              href="https://main.djtjbedieu57y.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Library System Management SPA <b>LIVE</b>
            </a>
          </p>

          <p>
            <a
              href="https://github.com/kumara-ravi-27/Ravi_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              Current Portfolio Repo
            </a>{' '}
            |{' '}
            <a
              href="https://main.djtjbedieu57y.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Current Portfolio <b>LIVE</b>
            </a>
          </p>
        </div>
      </section>

      <section id="portfolio">
        <h3>Portfolio:</h3>
        <ul>
          <li>
            Designed and developed a professional job resume portfolio,
            showcasing skills, experience, and achievements.
          </li>
          <li>
            The portfolio includes sections on About Me, Education, Projects,
            Skills, and Contact.
          </li>
          <li>
            Highlighted relevant projects, technical and soft skills, and
            professional contact information.
          </li>
          <li>
            Demonstrated expertise in creating a visually appealing and
            user-friendly online presence.
          </li>
          <li>
            Effective portfolio that enhances job search and career development
            efforts.
          </li>
        </ul>

        <h3>Shopping Mall-app1:</h3>
        <ul>
          <li>
            Developed a responsive ReactJS front-end shopping mall with dynamic
            navigation for product categories.
          </li>
          <li>
            Implemented Sign In and Sign Up authentication UI for smooth user onboarding.
          </li>
          <li>
            Used React hooks and component-based architecture for stateful, reusable components.
          </li>
          <li>
            Created intuitive navigation and clean UI for seamless experience on all device sizes.
          </li>
          <li>Translated business requirements into functional features per user stories.</li>
          <li>
            Delivered a single-page application demonstrating strong ReactJS and UI/UX skills.
          </li>
        </ul>

        <h3>Gallery app:</h3>
        <ul>
          <li>
            Built a dynamic ReactJS gallery managing multiple image folders with props and state.
          </li>
          <li>
            Added functionality to save images into folders including a Favorites folder.
          </li>
          <li>
            Designed a responsive UI enabling easy navigation and folder management.
          </li>
          <li>Showcased proficiency in React component patterns and hooks.</li>
          <li>Enhanced UX by enabling interactive folder operations without backend dependencies.</li>
        </ul>

        <h3>Library Management system (PostgreSQL):</h3>
        <ul>
          <li>
            Created a relational database system using PostgreSQL and pgAdmin4.
          </li>
          <li>
            Imported and normalized CSV data into multiple tables with enforced foreign key constraints.
          </li>
          <li>
            Crafted complex SQL queries to answer business questions and generate insights.
          </li>
          <li>
            Demonstrated expertise in database design, advanced SQL querying, and data integrity.
          </li>
          <li>Utilized PostgreSQL features to improve data management and reporting capabilities.</li>
        </ul>

        <h3>Retail Sales Analysis (PostgreSQL):</h3>
        <ul>
          <li>
            Developed Retail Sales Analysis database with PostgreSQL using pgAdmin4.
          </li>
          <li>
            Designed schema capturing detailed sales, customer demographics, and transaction metrics.
          </li>
          <li>Implemented data cleaning procedures for reliable analysis.</li>
          <li>Performed exploratory data analysis on key sales metrics and customer behavior.</li>
          <li>Wrote advanced SQL queries to analyze sales trends and customer segmentation.</li>
          <li>
            Used window functions and ranking to identify best-selling months and top-performing customers.
          </li>
          <li>
            Delivered data-driven insights supporting retail business decision-making.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
