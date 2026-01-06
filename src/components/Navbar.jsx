// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <h1>My Portfolio</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import "./Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <h1>My Portfolio</h1>
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
