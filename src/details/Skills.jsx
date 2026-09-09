import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'cloud', label: 'Cloud & Infrastructure' },
  { id: 'devops', label: 'DevOps & Automation' },
  { id: 'data', label: 'Data & Architecture' },
  { id: 'apps', label: 'App Development' }
];

const technicalCompetencies = [
  {
    category: 'cloud',
    title: 'Cloud & Container Platforms',
    badge: 'Core Infrastructure',
    icon: '☁️',
    desc: 'Production-grade hybrid infrastructure, multi-cluster provisioning, and container runtime orchestration.',
    skills: ['AWS (EC2, ECR, EKS)', 'OpenShift', 'Kubernetes', 'Nokia Cloud Platform (NCP)', 'Nokia Container Services (NCS)', 'Docker', 'Podman']
  },
  {
    category: 'devops',
    title: 'CI/CD & Infrastructure Automation',
    badge: 'Automation',
    icon: '⚡',
    desc: 'Declarative GitOps deployments, configuration management, and zero-downtime release pipelines.',
    skills: ['Ansible', 'Helm 3', 'GitLab CI/CD', 'GitHub Actions', 'Bash Scripting', 'Linux CLI', 'Quay Registry', 'Harbor']
  },
  {
    category: 'devops',
    title: 'Monitoring & Telemetry',
    badge: 'Observability',
    icon: '📊',
    desc: 'End-to-end cluster monitoring, metric ingestion pipelines, proactive alerting, and log analysis.',
    skills: ['Prometheus', 'Grafana', 'ELK / EFK Stack', 'SNMPv3 Alarms', 'Metric Exporters', 'Health Probes']
  },
  {
    category: 'data',
    title: 'System Integration & Enterprise Runbooks',
    badge: 'Telecom & Core',
    icon: '🔄',
    desc: 'Carrier-grade platform onboarding, secure remote access, backup pipelines, and service mesh governance.',
    skills: ['CaaS Onboarding', 'NetAct / Manta Ray', 'CBUR Backup & Recovery', 'Istio Mesh', 'Keycloak (IAM)', 'REST & OpenAPI']
  },
  {
    category: 'data',
    title: 'Database Systems & Caching',
    badge: 'Persistence',
    icon: '🗄️',
    desc: 'High-availability relational clustering, memory caches, automated state backups, and SQL tuning.',
    skills: ['Cloud Native PG (PostgreSQL)', 'Redis Cluster', 'MariaDB', 'pgAdmin4', 'Query Optimization']
  },
  {
    category: 'apps',
    title: 'Programming & Full-Stack Solutions',
    badge: 'Development',
    icon: '💻',
    desc: 'Modular service scripting, lightweight REST backend APIs, and responsive front-end single page apps.',
    skills: ['Python', 'FastAPI', 'Flask', 'ReactJS', 'Modern JavaScript (ES6+)', 'HTML5 / CSS3 Grid']
  }
];

const softSkillsList = [
  { icon: '🌐', title: 'Global Operations', desc: 'Cross-cultural engineering coordination across USA, Germany, and Spain time zones.' },
  { icon: '🛡️', title: 'Strict MOP Adherence', desc: 'Zero-downtime Method of Procedure (MOP) authoring, peer validation, and controlled execution.' },
  { icon: '🔍', title: 'Incident Root-Cause Analysis', desc: 'Deep dive diagnostics across container logs, network traces, and socket timeouts.' },
  { icon: '🤝', title: 'Collaborative Ownership', desc: 'Clear cross-functional alignment between architecture, security, and operations teams.' }
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = activeFilter === 'all'
    ? technicalCompetencies
    : technicalCompetencies.filter((item) => item.category === activeFilter);

  return (
    <main className="skills-page-container">
      {/* Hero Header */}
      <header className="skills-hero">
        <div className="hero-pill">Engineering Matrix</div>
        <h1 className="skills-title">Technical Expertise</h1>
        <p className="skills-subtitle">
          Carrier-grade cloud deployments, Kubernetes orchestration, resilient CI/CD pipelines, and high-availability database architecture.
        </p>

        {/* Filter Navigation */}
        <nav className="filter-nav" aria-label="Skill Filter Tabs">
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Grid: Interactive Modern Cards */}
      <section className="skills-showcase-grid">
        {filteredSkills.map((domain, index) => (
          <article className="skill-card-modern" key={index}>
            <div className="card-top">
              <span className="domain-icon">{domain.icon}</span>
              <span className="domain-badge">{domain.badge}</span>
            </div>

            <h2 className="domain-title">{domain.title}</h2>
            <p className="domain-desc">{domain.desc}</p>

            <div className="tags-cluster">
              {domain.skills.map((skill, sIdx) => (
                <span key={sIdx} className="modern-tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Operational Competencies / Soft Skills */}
      <section className="operational-section">
        <div className="section-head">
          <span className="hero-pill">Production Mindset</span>
          <h2>Operational & Incident Execution</h2>
        </div>

        <div className="operational-grid">
          {softSkillsList.map((item, idx) => (
            <div className="operational-card" key={idx}>
              <span className="op-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
