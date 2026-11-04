import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Layers, CheckCircle } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { projectsData, Project } from '../data/projects';
import './Projects.css';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'ml'>('all');

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const flagshipCount = projectsData.filter((p) => p.category === 'Flagship').length;
  const mlCount = projectsData.filter((p) => p.category === 'Machine Learning & Analytics').length;

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'flagship') return project.category === 'Flagship';
    if (activeFilter === 'ml') return project.category === 'Machine Learning & Analytics';
    return true;
  });

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            Enterprise-grade agentic AI workflows, financial investigation platforms, distributed engines, and quantitative systems built with high engineering rigor.
          </p>

          <div className="projects-filter-bar">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              className={`filter-btn ${activeFilter === 'flagship' ? 'active' : ''}`}
              onClick={() => setActiveFilter('flagship')}
            >
              <Sparkles size={14} className="inline mr-1" />
              Flagship & Enterprise Systems ({flagshipCount})
            </button>
            <button
              className={`filter-btn ${activeFilter === 'ml' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ml')}
            >
              Machine Learning & Data Science ({mlCount})
            </button>
          </div>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                {project.category && (
                  <span className="project-category-badge">
                    {project.category === 'Flagship' ? 'Flagship' : 'AI & ML'}
                  </span>
                )}
                <div className="project-overlay">
                  <button 
                    className="view-project-btn"
                    onClick={() => openModal(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-role-year">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="project-tag">{tech}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="project-tag">+{project.stack.length - 4} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-left">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-role">{selectedProject.role}</p>
                <p className="modal-year">Year: {selectedProject.year}</p>
                
                <div className="modal-tags">
                  <strong>Core Stack:</strong>
                  <div className="modal-stack-list">
                    {selectedProject.stack.map((tech, idx) => (
                      <span key={idx} className="modal-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <p className="modal-description">{selectedProject.fullDescription}</p>

                {selectedProject.githubUrl && (
                  <div className="modal-links">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link-button"
                    >
                      <GithubIcon size={18} />
                      <span>View on GitHub</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                {/* Detailed System Architecture Breakdown */}
                {selectedProject.architectureDetails && selectedProject.architectureDetails.length > 0 && (
                  <div className="modal-architecture">
                    <h3 className="modal-architecture-title">
                      <Layers size={18} className="text-blue-500" />
                      Complete Architectural & Engineering Breakdown
                    </h3>
                    <div className="arch-sections-container">
                      {selectedProject.architectureDetails.map((section, sIdx) => (
                        <div key={sIdx} className="arch-card">
                          <div className="arch-card-header">
                            <CheckCircle size={15} className="text-blue-500 flex-shrink-0" />
                            <span>{section.category}</span>
                          </div>
                          <ul className="arch-points-list">
                            {section.points.map((pt, pIdx) => (
                              <li key={pIdx} className="arch-point-item">
                                <span className="arch-bullet-icon" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="modal-right">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
