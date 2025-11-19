import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="highlight">Rutuja Shukla</span>
        </h1>
        <h2 className="home-subtitle">
          a Senior Software Developer.
        </h2>
        <p className="home-description">
          Senior Software Engineer with 3+ years of experience delivering enterprise-grade software in banking and financial systems. Strong background in backend engineering, full-stack development, API development, system integration, microservices, SQL, and Agile delivery. Experienced in UI development using Angular and in building full-stack applications with Node.js, following modern API standards and high-quality code practices. Known for translating complex business requirements into scalable technical solutions, improving system performance, and collaborating effectively with cross-functional engineering teams.
        </p>
      </div>
    </div>
  );
};

export default Home;