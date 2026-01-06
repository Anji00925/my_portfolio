// import React, { useState } from "react";
// import "../styles/Contact.css";
// import { Sparkles } from "lucide-react"; // optional icon library

// function Contact() {
//   const [message, setMessage] = useState("");

//   const sampleMessages = [
//     "Hi! I came across your portfolio and I'm impressed. Let's connect!",
//     "I'm hiring for a frontend developer role and think you'd be a great fit!",
//     "Would love to discuss a project collaboration with you!",
//     "Can you share more about your recent work on web development?",
//     "Hi, are you available for freelance opportunities?"
//   ];

//   const generateMessage = () => {
//     const randomIndex = Math.floor(Math.random() * sampleMessages.length);
//     setMessage(sampleMessages[randomIndex]);
//   };

//   return (
//     <div className="contact-container">
//       <h1>Contact Me</h1>
//       <p>
//         I'm actively looking for opportunities as a Software Developer / Web Developer / Frontend Developer.
//         Feel free to reach out if you have an opportunity or want to connect!
//       </p>

//       <form
//         action="https://formspree.io/f/xldllwop"
//         method="POST"
//         className="contact-form"
//       >
//         <input type="text" name="name" placeholder="Your Name" required />
//         <input type="email" name="email" placeholder="Your Email" required />
        
//         <div className="textarea-wrapper">
//   <textarea
//     name="message"
//     placeholder="Write a message..."
//     value={message}
//     onChange={(e) => setMessage(e.target.value)}
//     required
//   ></textarea>
//   <button type="button" className="sparkle-btn" onClick={generateMessage}>
//     ✨
//   </button>
// </div>

//         <button type="submit" className="btn">Send Message</button>
//       </form>

//       <div className="contact-details">
//         <p>Email: <a href="mailto:motheanji33@gmail.com">motheanji33@gmail.com</a></p>
//         <p>Phone: +91 6305304293</p>
//         <p>LinkedIn: <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
//         <p>GitHub: <a href="https://github.com/Anji00925" target="_blank" rel="noopener noreferrer">GitHub</a></p>
//         <p>Resume: <a href="/resume.pdf" download>Download Resume</a></p>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sampleMessages = [
    "Hi! I came across your portfolio and I'm impressed. Let's connect!",
    "I'm hiring for a frontend developer role and think you'd be a great fit!",
    "Would love to discuss a project collaboration with you!",
    "Can you share more about your recent work on web development?",
    "Hi, are you available for freelance opportunities?"
  ];

  const generateMessage = () => {
    const random =
      sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
    setFormData({ ...formData, message: random });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u00o58i",
        "template_5e5cq1l",
        formData,
        "07ZWWFF_dpqoXv2an"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={sendEmail}>
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

        <div className="textarea-wrapper">
          <textarea
            name="message"
            placeholder="Write a message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="button"
            className="sparkle-btn"
            onClick={generateMessage}
            title="Generate message"
          >
            ✨
          </button>
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
