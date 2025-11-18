import React from 'react';
import './About.css';

const About = () => {
  const professionalExperience = [
    {
      company: "Barclays",
      role: "Senior Business Analyst (Senior Software Developer)",
      duration: "April 2025 – Present | Pune, India",
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
      duration: "August 2022 – March 2025 | Pune, India",
      responsibilities: [
        "Collaborated with software engineers to create API specifications, authentication flows (OAuth, Bearer), and data integration pipelines for risk and regulatory systems.",
        "Designed SQL queries, transformation logic, and backend workflows to support reporting and analytical modules.",
        "Interpreted business requirements into system diagrams, sequence flows, and interface design documents used directly by development teams.",
        "Worked closely with engineering to troubleshoot production defects, debug data flow issues, and propose technical fixes.",
        "Contributed to testing strategies, including functional testing, API validation, and regression coverage for new releases.",
        "Ensured solutions followed security, performance, and compliance guidelines required in enterprise banking software."
      ]
    },
    {
      company: "Starling Solutions",
      role: "Artificial Intelligence Intern",
      duration: "Feb 2021 – May 2021 | Mumbai, India",
      responsibilities: [
        "Led the ML track during a 4-month internship, delivering a full AI solution using IBM Watson under mentorship from Starling Solutions."
      ]
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">Professional Experience</h1>
        
        <div className="timeline">
          {professionalExperience.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{experience.role}</h3>
                <p><strong>{experience.company}</strong> | {experience.duration}</p>
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
  );
};

export default About;
