import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'Software Development',
    'Full-Stack Development',
    'C#', '.NET Core', 'Microservices',
    'Angular', 'React',
    'SQL', 'PostgreSQL',
    'API Development',
    'Python', 'Machine Learning',
    'Data Analytics & Visualization',
    'C', 'C++', 'Java',
    'Leadership', 'Critical Thinking', 'Problem Solving'
  ];

  const services = [
    { number: '01', title: 'Frontend Development', description: 'Creating responsive and interactive user interfaces with modern frameworks like Angular and React.' },
    { number: '02', title: 'Backend Development', description: 'Building robust server-side applications with C#, .NET Core, Python, and microservices architecture.' },
    { number: '03', title: 'Research', description: 'Conducting data-driven research and developing machine learning models for complex problems.' },
    { number: '04', title: 'Database Design', description: 'Designing efficient database schemas and optimizing queries for high-performance applications.' }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-grid">
          <div className="about-left">
            <div className="about-text">
              <p>
                I'm <strong>Rutuja Shukla</strong>, a Senior Software Developer with experience in Risk Finance and Treasury at Barclays. I have worked across backend systems, data-driven applications, ML models, and API development.
              </p>
              <p>
                I enjoy architecting reliable software, analyzing data, and solving complex engineering problems. My expertise spans full-stack development, machine learning, and building scalable enterprise solutions.
              </p>
            </div>
          </div>
          
          <div className="about-right">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="services-title">Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-number">{service.number}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;