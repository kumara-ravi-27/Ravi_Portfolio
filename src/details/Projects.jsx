import React from 'react';
import './Projects.css';

const projectDetails = [
  {
    title: 'Nokia Cloud Operations Manager (NCOM) Integration & Deployment',
    category: 'Cloud Infrastructure & Integration',
    bullets: [
      'Led end-to-end NCOM platform deployments across NCS, NCP, and AWS environments, configuring installation.properties and custom Helm values files executed via automated scripts (ncom_operations.sh).',
      'Integration 1 (CaaS Integration): Onboarded Container-as-a-Service (CaaS) clusters into NCOM using API server proxies and token-based authentication, validating CNFs and image repository synchronizations.',
      'Integration 2 (NetAct & Alarm Monitoring Integration): Configured dual-stack routing between NCS, NetAct, and NCOM subnets across Jumphost, Master, and Active nodes, validating SNMPv3 communications (snmpwalk) for alarm management.',
      'Integration 3 (Manta Ray & CALM CM Integration): Adjusted CALM CM heartbeat parameters, configured load balancer specifications (LBType), and established interconnectivity across multi-cluster management services.'
    ]
  },
  {
    title: 'Nokia Continuous Delivery (NCD) Deployment & Disaster Recovery',
    category: 'CI/CD & Reliability Engineering',
    bullets: [
      'Orchestrated end-to-end deployment of Nokia Continuous Delivery (NCD) and GitLab environments across 4 dedicated namespaces (git, redis-postgresql, cbur, cloud-native-pg) using Helm 3 and Low-Level Design (LLD) specifications.',
      'Engineered automated backup and recovery pipelines leveraging CBUR for NCD Git persistent volumes.',
      'Conducted staged disaster recovery drills and project deletion simulations to validate zero-data-loss restoration and rapid platform recovery.'
    ]
  },
  {
    title: 'Infosys Enterprise Cloud & Microservices',
    category: 'Microservices & Containerization',
    bullets: [
      'Managed enterprise microservices like APIHub, CoHTTP, FEEM, and FEEMNode across 10+ environments.',
      'Improved APIHub installation scripts, cutting setup time by 6 hours per environment and speeding up developer onboarding.',
      'Handled deployments across 15+ global production regions (India, UK, USA, etc.) with high availability and scalability.',
      'Built a stable microservices platform using Docker, Podman, and OpenShift, improving performance.',
      'Created optimized Docker images and Dockerfiles to speed up CI/CD deployments.',
      'Managed Kubernetes clusters with Pods, Deployments, ConfigMaps, and implemented Istio mesh for secure service communication.'
    ]
  },
  {
    title: 'Library Management System (PostgreSQL)',
    category: 'Database Engineering & Schema Design',
    bullets: [
      'Developed a relational database system using PostgreSQL and pgAdmin4 for library resource management.',
      'Imported CSV data into normalized tables: Books, Branch, Employees, Members, Issued_Status, and Return_Status.',
      'Implemented foreign key constraints to enforce data consistency and referential integrity.',
      'Created complex SQL queries with custom filters to solve library management queries.',
      'Displayed strong skills in database design, data modeling, and advanced SQL querying.',
      'Leveraged PostgreSQL features to improve data retrieval and reporting.'
    ]
  },
  {
    title: 'Retail Sales Analysis (PostgreSQL)',
    category: 'Business Intelligence & Exploratory Analysis',
    bullets: [
      'Created a Retail Sales Analysis database in PostgreSQL using pgAdmin4 for business insights.',
      'Designed retail_sales table capturing transactional details including demographic and sales metrics.',
      'Performed data cleansing to ensure reliability of analysis.',
      'Conducted extensive exploratory data analysis (EDA) on sales, customers, and categories.',
      'Developed advanced queries for sales trends, high-volume transactions, and customer segmentation.',
      'Applied window functions and ranking for monthly sales analysis and best-selling months identification.',
      'Extracted insights on top customers and sales by time shifts, showcasing analytical expertise.'
    ]
  }
];

const Projects = () => {
  return (
    <main className="projects-page-container">
      <header className="projects-header">
        <h1 className="projects-title">Featured Projects</h1>
        <p className="projects-subtitle">
          Production platforms, telecom integrations, cloud-native automation, and data engineering projects.
        </p>
      </header>

      <div className="projects-grid">
        {projectDetails.map((project, idx) => (
          <article className="project-card" key={idx}>
            <div className="project-meta">
              <span className="project-tag">{project.category}</span>
            </div>
            <h2 className="project-heading">{project.title}</h2>
            <ul className="project-bullet-list">
              {project.bullets.map((point, id) => (
                <li key={id} className="project-bullet-item">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Projects;
