import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Connect</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-subtitle">Let's work together</h2>
            <p className="contact-description">
              Feel free to connect with me on LinkedIn, Email, or GitHub. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:rutujamahek@gmail.com">rutujamahek@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <Linkedin size={24} />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/rutuja-shukla-117543208/" target="_blank" rel="noopener noreferrer">Rutuja Shukla</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <Github size={24} />
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/rutuja-shukla" target="_blank" rel="noopener noreferrer">rutuja-shukla</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
