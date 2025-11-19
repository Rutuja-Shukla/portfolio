import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    "Python", "Java", "JavaScript", "React", "Node.js", "Express.js",
    "MongoDB", "SQL", "REST APIs", "GraphQL", "Docker", "Git",
    "Agile Methodologies", "CI/CD", "Machine Learning", "Data Analysis"
  ];

  const professionalExperience = [
    {
      company: "Barclays",
      role: "Senior Business Analyst (Senior Software Developer)",
      duration: "April 2025 – Present",
      location: "Pune, India",
      responsibilities: [
        "Led end-to-end development and enhancement of internal risk, finance, and treasury applications, collaborating closely with engineering teams to design scalable backend modules.",
        "Converted complex functional requirements into detailed technical specifications, API contracts, data models, and integration workflows.",
        "Designed and supported microservices and API components used across risk and treasury platforms, ensuring performance, maintainability, and adherence to coding standards.",
        "Performed system analysis for large distributed systems, recommending architectural improvements involving caching, asynchronous messaging, and optimized SQL queries.",
        "Coordinated with QA, DevOps, and product teams to enable seamless deployments, perform UAT validations, and ensure compliance with banking standards.",
        "Participated in code reviews, sprint planning, and Agile ceremonies, ensuring consistent delivery of high-quality software artifacts."
      ]
    },
    {
      company: "Barclays",
      role: "Business Analyst (Software Developer)",
      duration: "August 2022 – March 2025",
      location: "Pune, India",
      responsibilities: [
        "Collaborated with software engineers to create API specifications, authentication flows (OAuth, Bearer), and data integration pipelines for risk and regulatory systems.",
        "Designed SQL queries, transformation logic, and backend workflows to support reporting and analytical modules.",
        "Interpreted business requirements into system diagrams, sequence flows, and interface design documents used directly by development teams.",
        "Worked closely with engineering to troubleshoot production defects, debug data flow issues, and propose technical fixes.",
        "Contributed to testing strategies, including functional testing, API validation, and regression coverage for new releases.",
        "Ensured solutions followed security, performance, and compliance guidelines required in enterprise banking software."
      ]
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-intro">
            <h2>About Me</h2>
            <p>
                I'm Rutuja Shukla, a Senior Software Developer with experience in Risk Finance and Treasury at Barclays. I have worked across backend systems, data-driven applications, ML models, and API development.
            </p>
            <p>
                I enjoy architecting reliable software, analyzing data, and solving complex engineering problems. My expertise spans full-stack development, machine learning, and building scalable enterprise solutions.
            </p>
        </div>

        <div className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline-horizontal">
            {professionalExperience.map((experience, index) => (
              <div key={index} className="timeline-item-horizontal">
                <div className="timeline-dot-horizontal"></div>
                <div className="timeline-content-horizontal">
                  <h3>{experience.role}</h3>
                  <p className="company">{experience.company}</p>
                  <p className="duration">{experience.duration} | {experience.location}</p>
                  <ul>
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
