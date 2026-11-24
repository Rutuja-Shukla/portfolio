import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Globe, FileText } from 'lucide-react';
import LinkedinIcon from '../components/LinkedinIcon';
import GithubIcon from '../components/GithubIcon';
import { resumeData } from '../data/resumeData';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    
    // Save to localStorage submissions log
    try {
      const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      existing.push({
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('portfolio_messages', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Connect</h1>
        
        <div className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <div className="contact-info">
            <h2 className="contact-subtitle">Let's work together</h2>
            <p className="contact-description">
              Feel free to connect with me for enterprise software engineering opportunities, backend architecture discussions, or distributed systems collaborations.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <Phone size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <LinkedinIcon size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/rutuja-shukla
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <GithubIcon size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4>GitHub</h4>
                  <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">
                    github.com/Rutuja-Shukla
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <Globe size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4>Relocation & Availability</h4>
                  <span style={{ fontSize: '14.5px', color: 'rgba(0,0,0,0.7)' }}>
                    {resumeData.relocation}
                  </span>
                </div>
              </div>

              <div className="contact-detail-item">
                <FileText size={22} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4>Updated Resume</h4>
                  <a
                    href="/assets/aistudio/Rutuja_Shukla_cfd7dd99.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View / Download Resume (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card">
            <h2 className="contact-subtitle">Send a Message</h2>
            <p className="contact-description">
              Leave a quick note and I'll get back to you promptly.
            </p>

            {submitted && (
              <div className="alert-success">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been received.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="What would you like to discuss?"
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="form-submit-btn"
              >
                <Send size={16} />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
