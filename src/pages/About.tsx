import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Server, 
  Layout, 
  Database, 
  Layers, 
  Wrench, 
  GraduationCap,
  Building2,
  CheckCircle2,
  Globe,
  Languages,
  ShieldCheck,
  Award
} from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const skillCategories = [
    {
      name: "Backend & Distributed Systems",
      icon: <Server size={18} className="text-blue-500" />,
      skills: resumeData.skills.backend
    },
    {
      name: "Frontend & Web UI",
      icon: <Layout size={18} className="text-blue-500" />,
      skills: resumeData.skills.frontend
    },
    {
      name: "Databases & In-Memory Stores",
      icon: <Database size={18} className="text-blue-500" />,
      skills: resumeData.skills.databases
    },
    {
      name: "DevOps & Cloud Observability",
      icon: <Layers size={18} className="text-blue-500" />,
      skills: resumeData.skills.devops
    },
    {
      name: "APIs, Protocols & Tooling",
      icon: <Wrench size={18} className="text-blue-500" />,
      skills: resumeData.skills.apisAndTools
    },
    {
      name: "Engineering Practices",
      icon: <CheckCircle2 size={18} className="text-blue-500" />,
      skills: resumeData.skills.engineeringPractices
    },
    {
      name: "Domain Knowledge",
      icon: <ShieldCheck size={18} className="text-blue-500" />,
      skills: resumeData.skills.domainKnowledge
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Intro Section */}
        <div className="about-intro">
          <h2>About Me</h2>
          <p>
            I'm <strong>{resumeData.name}</strong>, a Full-Stack Software Engineer with 4+ years of hands-on experience at Barclays delivering end-to-end backend and modern UI integrations for global compliance, risk, and financial platforms.
          </p>
          <p>
            I specialize in architecting scalable microservices, low-latency API contracts, distributed data pipelines, and database optimization under stringent international banking regulations and high-availability SLAs.
          </p>

          <div className="about-profile-highlights">
            <span className="profile-tag">
              <Globe size={14} className="text-blue-500" />
              Nationality: {resumeData.nationality}
            </span>
            <span className="profile-tag">
              <Languages size={14} className="text-emerald-500" />
              Languages: {resumeData.languagesSpoken.join(' • ')}
            </span>
            <span className="profile-tag">
              <Building2 size={14} className="text-purple-500" />
              {resumeData.relocation}
            </span>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-category-grid">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="skill-category-card"
              >
                <div className="skill-category-title">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
                <div className="skill-badges">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="experience-section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-list">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-loc">
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <div className="exp-duration-badge">
                    {exp.duration}
                  </div>
                </div>

                <ul className="exp-bullet-list">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="exp-bullet-item">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-card">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="text-blue-500" size={24} />
                    <h3 className="education-title">
                      {edu.degree} {edu.field ? `| ${edu.field}` : ''}
                    </h3>
                  </div>
                  <p className="education-inst">
                    {edu.institution}, {edu.location} ({edu.years})
                  </p>
                </div>
                <div className="education-badge">
                  <Award size={14} className="inline mr-1 text-blue-500" />
                  {edu.score}
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
