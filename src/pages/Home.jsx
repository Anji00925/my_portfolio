import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I'm a passionate developer who loves building web applications. Explore my projects and feel free to reach out!
      </p>
      <div className="home-buttons">
        <Link to="/projects">
          <button className="btn">View Projects</button>
        </Link>
        <Link to="/contact">
          <button className="btn btn-secondary">Contact Me</button>
        </Link>
      </div>

      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <FaLinkedin className="linkedin-icon" />
        Connect on LinkedIn
      </a>
    </div>
  );
}

export default Home;
