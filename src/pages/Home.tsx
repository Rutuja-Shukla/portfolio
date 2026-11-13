import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Zap, ShieldCheck, CheckCircle2, Globe, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Home.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="highlight">{resumeData.name}</span>
        </h1>
        <h2 className="home-subtitle">
          {resumeData.title}
        </h2>

        {/* Status / Relocation pills */}
        <div className="home-pills-row">
          <span className="home-pill">
            <Building2 size={14} className="text-blue-500" />
            Senior Software Engineer @ Barclays
          </span>
          <span className="home-pill">
            <Globe size={14} className="text-emerald-500" />
            {resumeData.relocation}
          </span>
          <span className="home-pill">
            <ShieldCheck size={14} className="text-amber-500" />
            Risk & Regulatory Banking Platforms
          </span>
        </div>

        {/* Professional Summary */}
        <p className="home-description">
          {resumeData.summary}
        </p>



        {/* Quantifiable Engineering Metrics */}
        <div className="home-metrics-grid">
          <div className="metric-card">
            <div className="metric-number">4+</div>
            <div className="metric-label">Years at Barclays</div>
          </div>
          <div className="metric-card">
            <div className="metric-number">20+</div>
            <div className="metric-label">Critical Defects Resolved</div>
          </div>
          <div className="metric-card">
            <div className="metric-number">99.9%</div>
            <div className="metric-label">Application Availability</div>
          </div>
          <div className="metric-card">
            <div className="metric-number">9.21</div>
            <div className="metric-label">B.Tech CGPA (/ 10)</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="home-actions">
          <button 
            className="btn-primary-home"
            onClick={() => navigate('/projects')}
          >
            Explore Projects
            <ArrowRight size={18} />
          </button>
          <button 
            className="btn-secondary-home"
            onClick={() => navigate('/about')}
          >
            <CheckCircle2 size={18} />
            Experience & Skills
          </button>
          <a
            href="/assets/aistudio/Rutuja_Shukla_cfd7dd99.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-home"
          >
            <FileText size={18} />
            View Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
