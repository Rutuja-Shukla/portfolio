import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Business Analyst',
      company: 'Barclays',
      location: 'Pune, Maharashtra, India',
      period: '2025 – Present',
      description: 'Leading enterprise banking solutions in the Risk Finance & Treasury domain.'
    },
    {
      id: 2,
      title: 'Business Analyst',
      company: 'Barclays',
      location: 'Pune, Maharashtra, India',
      period: '2022 – 2025',
      description: 'Worked on enterprise banking solutions in the Risk Finance & Treasury domain. Collaborated with cross-functional teams to deliver scalable software systems.'
    },
    {
      id: 3,
      title: 'AI Intern',
      company: 'Starling Solutions',
      location: 'Remote',
      period: '2021',
      description: 'Developed Resume Parser ML project using Python, Flask, and machine learning techniques for intelligent document processing.'
    },
    {
      id: 4,
      title: 'Data Science Intern',
      company: 'SmartKnower',
      location: 'Remote',
      period: '2020',
      description: 'Built Predict Covid-19 ML model with comprehensive data analysis, preprocessing, and visualization for pandemic trend prediction.'
    },
    {
      id: 5,
      title: 'Machine Learning Intern',
      company: 'Verzeo',
      location: 'Remote',
      period: '2019',
      description: 'Implemented Sentiment Analysis project using NLP techniques, data collection, cleaning, and model building.'
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <h1 className="experience-title">Work Experience</h1>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="timeline-item" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-location">{exp.location}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;