import React, { useState } from "react";
import "../styles/Contact.css"; // Styling file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        I'm actively looking for opportunities as a Software Developer / Web Developer / Frontend Developer.
        Feel free to reach out if you have an opportunity or want to connect!
      </p>

      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write a message (e.g., job opportunity, collaboration, etc.)"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      )}

      {/* Contact Details */}
      <div className="contact-details">
        <p>Email: <a href="mailto:your.email@example.com">motheanji33@gmail.com</a></p>
        <p>Phone: +91 6305304293</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Your LinkedIn</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/Anji00925" target="_blank" rel="noopener noreferrer">Your GitHub</a>
        </p>
        <p>
          Resume: <a href="/resume.pdf" download>Download Resume</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
