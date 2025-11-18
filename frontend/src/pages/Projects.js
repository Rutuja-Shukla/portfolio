import React, { useState } from 'react';
import { X } from 'lucide-react';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
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
                <div className="project-tags">
                  {project.stack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="project-tag">{tech}</span>
                  ))}
                </div>
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-left">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-role">{selectedProject.role}</p>
                {selectedProject.company && (
                  <p className="modal-company">{selectedProject.company}</p>
                )}
                <p className="modal-year">Year: {selectedProject.year}</p>
                
                <div className="modal-tags">
                  <strong>Stack:</strong>
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
                      View on GitHub
                    </a>
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