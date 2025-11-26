import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Live Projects',
    items: [
      {
        name: 'Gallery',
        repo: 'https://github.com/kumara-ravi-27/Gallery_app_using_reactJS.git',
        live: 'https://main.d1ythgff2jq6mq.amplifyapp.com/',
      },
      {
        name: 'Shopping Mall-app1',
        repo: 'https://github.com/kumara-ravi-27/Shopping_Mall-app1',
        live: 'https://main.d1ojgyma042eu0.amplifyapp.com/',
      },
      {
        name: 'Current Portfolio',
        repo: 'https://github.com/kumara-ravi-27/Ravi_Portfolio',
        live: 'https://main.djtjbedieu57y.amplifyapp.com/',
      },
      // {
      //   name: 'Gallery app-1',
      //   repo: 'https://github.com/kumara-ravi-27/Ravi_Portfolio',
      //   live: 'https://main.djtjbedieu57y.amplifyapp.com/',
      // },
      // {
      //   name: 'Library System Management',
      //   repo: 'https://github.com/kumara-ravi-27/Ravi_Portfolio',
      //   live: 'https://main.djtjbedieu57y.amplifyapp.com/',
      // },
      
    ],
  },
];

const projectDetails = [
  {
    title: 'Portfolio',
    bullets: [
      'Designed and developed a professional job resume portfolio showcasing skills, experience, and achievements.',
      'Included sections: About Me, Education, Projects, Skills, and Contact.',
      'Showcased relevant projects, technical and soft skills, and professional contact info.',
      'Created a visually appealing, user-friendly online presence.',
      'Enhanced job search and career development efforts.',
    ],
  },
  {
  title: 'DevOps',
  bullets: [
    'Managed enterprise microservices like APIHub, CoHTTP, FEEM, and FEEMNode across 10+ environments',
    'Improved APIHub installation scripts, cutting setup time by 6 hours per environment and speeding up developer onboarding',
    'Handled deployments across 15+ global production regions (India, UK, USA, etc.) with high availability and scalability.',
    'Built a stable microservices platform using Docker, Podman, and OpenShift, improving performance',
    'Created optimized Docker images and Dockerfiles to speed up CI/CD deployments.',
    'Managed Kubernetes clusters with Pods, Deployments, ConfigMaps, and implemented Istio mesh for secure service communication.',
  ],
},
  {
    title: 'Shopping Mall-app1',
    bullets: [
      'Developed a responsive ReactJS front-end shopping mall interface with categories for Men, Women, Children, and Beauty products.',
      'Implemented Sign In and Sign Up flows to improve user onboarding experience.',
      'Utilized React hooks and component structure for efficient state management and reusable code.',
      'Focused on intuitive navigation and clean UI for seamless multi-device browsing.',
      'Gathered and implemented business requirements as per user stories.',
      'Delivered a frontend-only SPA demonstrating strong React and UI/UX skills.',
    ],
  },
  {
    title: 'Gallery app',
    bullets: [
      'Built a dynamic ReactJS Gallery app managing multiple image folders with state and props.',
      'Enabled image saving and organization across customizable folders, including a Favorites folder.',
      'Developed a responsive UI with smooth folder navigation and image management.',
      'Demonstrated expertise in React component architecture, hooks, and props.',
      'Enhanced UX with interactive folder features without backend dependencies.',
    ],
  },
  {
    title: 'Library Management System (PostgreSQL)',
    bullets: [
      'Developed a relational database system using PostgreSQL and pgAdmin4 for library resource management.',
      'Imported CSV data into normalized tables: Books, Branch, Employees, Members, Issued_Status, and Return_Status.',
      'Implemented foreign key constraints to enforce data consistency and referential integrity.',
      'Created complex SQL queries with custom filters to solve library management queries.',
      'Displayed strong skills in database design, data modeling, and advanced SQL querying.',
      'Leveraged PostgreSQL features to improve data retrieval and reporting.',
    ],
  },
  {
    title: 'Retail Sales Analysis (PostgreSQL)',
    bullets: [
      'Created a Retail Sales Analysis database in PostgreSQL using pgAdmin4 for business insights.',
      'Designed retail_sales table capturing transactional details including demographic and sales metrics.',
      'Performed data cleansing to ensure reliability of analysis.',
      'Conducted extensive exploratory data analysis (EDA) on sales, customers, and categories.',
      'Developed advanced queries for sales trends, high-volume transactions, and customer segmentation.',
      'Applied window functions and ranking for monthly sales analysis and best-selling months identification.',
      'Extracted insights on top customers and sales by time shifts, showcasing analytical expertise.',
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="live-projects card">
        <h3>Live Projects</h3>
        <ul>
          {projectsData[0].items.map((item, index) => (
            <li key={index}>
              <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
              >
                {item.name} Repo
              </a>{' '}
              |{' '}
              <a href={item.live} target="_blank" rel="noopener noreferrer" className="live-link">
                {item.name} <b>LIVE</b>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-details">
        {projectDetails.map((project, idx) => (
          <div className="card project-card" key={idx}>
            <h3>{project.title}</h3>
            <ul>
              {project.bullets.map((point, id) => (
                <li key={id}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
