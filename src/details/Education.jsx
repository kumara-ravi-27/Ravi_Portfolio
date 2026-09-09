import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Engineering & Technology',
    institution: 'V R Siddhartha Engineering College',
    period: '2017 – 2021',
    grade: '7.23 CGPA',
    status: 'Graduated',
    icon: '🎓',
    highlights: [
      'Comprehensive foundation in computer systems, algorithms, database architectures, and distributed systems.',
      'Active leadership in NCC and student technical initiatives, system modeling, and academic software projects.'
    ]
  },
  {
    degree: 'Intermediate (10+2 / Pre-University)',
    field: 'Mathematics, Physics & Chemistry (MPC)',
    institution: 'Narayana Junior College',
    period: '2015 – 2017',
    grade: '975/1000',
    status: 'Completed',
    icon: '🏛️',
    highlights: [
      'Intensive STEM curriculum emphasizing advanced IIT mathematics, analytical reasoning, and scientific problem-solving.',
      'Participated in competitive academic assessments and foundational engineering entrance preparations.'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'General High School Curriculum',
    institution: 'The Giddalur Public School',
    period: '2015',
    grade: '9.3 GPA',
    status: 'Completed',
    icon: '🏫',
    highlights: [
      'Graduated with distinction across foundational sciences, languages, and mathematical principles.',
      'Engaged in co-curricular competitions, science fairs, and school team events.'
    ]
  }
];

const Education = () => {
  return (
    <main className="education-page-container">
      {/* Header Section */}
      <header className="education-header">
        <div className="edu-pill">Academic Journey</div>
        <h1 className="education-title">Education & Qualifications</h1>
        <p className="education-subtitle">
          Academic foundation in engineering, technology, and science that built the ground for enterprise software and cloud systems.
        </p>
      </header>

      {/* Modern Interactive Timeline */}
      <section className="education-timeline-wrapper">
        <div className="edu-timeline">
          {educationData.map((item, index) => (
            <div className="edu-timeline-item" key={index}>
              {/* Timeline Marker Dot with Pulse */}
              <div className="edu-timeline-marker">
                <span className="edu-marker-dot"></span>
                <span className="edu-marker-icon">{item.icon}</span>
              </div>

              {/* Timeline Glassmorphism Card */}
              <article className="edu-card">
                <div className="edu-card-header">
                  <div>
                    <span className="edu-badge">{item.status}</span>
                    <h2 className="edu-degree">{item.degree}</h2>
                    <h3 className="edu-institution">{item.institution}</h3>
                  </div>
                  <span className="edu-period">{item.period}</span>
                </div>

                <p className="edu-field">
                  <strong>Specialization:</strong> {item.field}
                </p>

                <ul className="edu-highlights">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Education;
