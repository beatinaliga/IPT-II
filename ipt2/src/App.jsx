import React from "react";
import "./App.css";
import profilePic from "./idd.jpg";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Responsive Design"];

  const projects = [
    {
      title: "Employment Opportunities for College Students in OMSC- Mamburao Campus",
      description:
        "Employment opportunities for college students include part-time jobs that help them gain experience, develop skills, earn income, and prepare for future careers while still in school",
      year: "2025"
    },
    {
      title: "Smart Diary: Small Notes, Big Moments",
      description:
        "A digital diary app that helps you capture everyday thoughts, important memories, and personal reflections in a simple, organized, and convenient way.",
      year: "2026"
    }
  ];

  return (
    <div className="App">
      {/* Simple Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <h2 className="nav-logo">Hello! I'm Bea</h2>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="header">
        <img src={profilePic} alt="Bea Tinaliga" className="profile-image" />
        <h1>Bea Tinaliga</h1>
        <p className="subtitle">Student Web Developer</p>
        <p className="intro">
          Building clean, simple, and effective web solutions with React and JavaScript.
        </p>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About</h2>
        <p>
          I'm a passionate student learning web development. I focus on creating intuitive interfaces and writing clean code. My goal is to become a skilled Full-Stack Developer and contribute to meaningful projects.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
       <h3>Programming Languages</h3>
        <div className="form-group">
          <div className="form-field">
            <div className="form-input skill-tag">HTML</div>
          </div>
          <div className="form-field">
            <div className="form-input skill-tag">CSS</div>
          </div>
          <div className="form-field">
            <div className="form-input skill-tag">JavaScript</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="project">
        <h2>Project</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project">
              <div className="project-meta">
                <h3>{project.title}</h3>
                <span className="year">{project.year}</span>
              </div>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in new opportunities and collaborations.
        </p>
        <div className="contact-links">
          <a href="mailto:beatinaliga@gmail.com">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Bea Tinaliga</p>
      </footer>
    </div>
  );
}

export default App;