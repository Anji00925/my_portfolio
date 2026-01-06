// const projects = [
//     {
//       id: 1,
//       title: "Chatbot using NLP",
//       description: "An AI-powered chatbot that uses NLP to interact with users and provide responses.",
//       technologies: ["Python", "NLTK", "Rasa", "Flask"],
//       link: "https://github.com/Anji00925/chatbot-using-nlp",
//     },
//     {
//       id: 2,
//       title: "Credit Card Fraud Detection",
//       description: "A machine learning model to detect fraudulent transactions in credit card usage.",
//       technologies: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
//       link: "https://github.com/Anji00925/Creditcard_fraud.git",
//     },
//     {
//       id: 3,
//       title: "E-commerce_MERN",
//       description: "A full-stack MERN e-commerce application enabling seamless online shopping with features like product browsing, cart management, user authentication, and secure payment processing.",
//       technologies: ["React js", "Express.js", "Node.js", "JWT (JSON Web Tokens)","MongoDB"],
//       link: "https://github.com/Anji00925/E-commerce.git",
//     },
//     {
//   id: 4,
//   title: "Habit Flow",
//   description: "A productivity-focused habit tracking application designed to help users build and maintain daily routines. Features include habit creation, progress visualization, streak tracking, and a clean, responsive UI.",
//   technologies: ["React js", "Node.js", "Express.js", "MongoDB", "JWT (JSON Web Tokens)"],
//   links: {
//     frontend: "https://github.com/Anji00925/Habbit-Flow-Frontend.git",
//     backend: "https://github.com/Anji00925/Habbit-Flow-Backend.git",
//   }
//     },
//   ];
  
//   export default projects;


// import projects from "./projectsData";

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
