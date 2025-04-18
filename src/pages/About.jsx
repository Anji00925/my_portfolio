import React from "react";
import "../styles/About.css"; // Create this file for styling

function About() {
  return (
    <div className="about-container">
      {/* Profile Section */}
      <div className="about-content">
        <img src="profile.jpg" alt="My Profile" className="profile-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm <strong>Mothe Anjibabu</strong>, a passionate web developer specializing in MERN stack development. 
            I love building interactive and responsive web applications that solve real-world problems.
          </p>
          <p>
            I have experience in <b>React, Node.js, Express, MongoDB, JavaScript</b>, and more. I'm always eager to 
            learn new technologies and improve my skills.
          </p>
          <a href="Resumenewlyupdated.pdf" download>
            <button className="btnn">Download Resume</button>
          </a>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills">
          <span>Java</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>HTML & CSS</span>
          <span>Git & GitHub</span>
        </div>
      </div>
    </div>
  );
}

export default About;
