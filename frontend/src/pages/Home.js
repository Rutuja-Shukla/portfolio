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
          I build scalable, secure, and reliable web applications —<br />
          from backend architectures to modern frontend experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;