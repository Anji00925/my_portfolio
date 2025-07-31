import React from "react";
import projects from "../projectsData";
import "../styles/Projects.css"; // Add styles here

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            {project.link && (
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
    View Project
  </a>
)}

{project.links && (
  <div className="project-links">
    <a href={project.links.frontend} target="_blank" rel="noopener noreferrer" className="btn">
      Frontend
    </a>
    <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="btn">
      Backend
    </a>
  </div>
)}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
