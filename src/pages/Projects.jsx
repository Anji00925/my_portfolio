// import projects from "../data/projects";

// import "./Projects.css";

// function Projects() {
//   return (
//     <div className="projects-container">
//       <h1>Projects</h1>

//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div className="project-card fade-section" key={project.id}>
//             <h2>{project.title}</h2>
//             <p>{project.description}</p>

//             <div className="tech-stack">
//               {project.technologies.map((tech, index) => (
//                 <span key={index} className="tech">
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <div className="project-actions">
//               {project.link && (
//                 <a href={project.link} target="_blank">GitHub</a>
//               )}

//               {project.links?.frontend && (
//                 <a href={project.links.frontend} target="_blank">
//                   Frontend
//                 </a>
//               )}

//               {project.links?.backend && (
//                 <a href={project.links.backend} target="_blank">
//                   Backend
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

import projects from "../data/projects";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card fade-section" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.link && (
                <a href={project.link} target="_blank">GitHub</a>
              )}
              {project.links?.frontend && (
                <a href={project.links.frontend} target="_blank">Frontend</a>
              )}
              {project.links?.backend && (
                <a href={project.links.backend} target="_blank">Backend</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
