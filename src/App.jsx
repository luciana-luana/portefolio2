
import "./App.css";
import mornaImage from "./assets/morna.png";
import boostrapImage from "./assets/boostrap.png";
import pedalquestImage from "./assets/pedalquest.png";
import infoSalImage from "./assets/infoSal.png";
import LeidyImage from "./assets/leidy.png";
import SapKrioleImage from "./assets/sapKriole.png";
import NaturaSkinCareImage from "./assets/NaturaSkincare.png";
import pythonImage from "./assets/python.png";
import ClinicaImage from "./assets/clinica.png";
import municipeImage from "./assets/municipe.png";
import luciImage from "./assets/luci.jpg";

const projects = [
  {
    number: "01",
    name: "Morna",
    description:
      "This was the first project I developed as part of my Web Development course, dedicated to promoting and showcasing music from Cape Verde.",
    type: "music",
    image: mornaImage,
    website: "https://luciana-luana.github.io/proj1-musica-cabo-verde/index.html",
     technologies: ["HTML", "CSS"],
  },
  {
    number: "02",
    name: "Bootstrap Project",
    description:
      "Second practical project developed by implementing basic Bootstrap concepts.",
    type: "music",
    image: boostrapImage,
    website: "https://luciana-luana.github.io/proj2-Bootstrap/index.html",
     technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    number: "03",
    name: "Pedalquest",
    description:
      "Development of a web platform for tourist transfer services. The project included creating a landing page,  dashboards for administrators, providers, clients, and partners, as well as booking management features and the ability to change their status.",
    type: "music",
    image: pedalquestImage,
   
     technologies: ["HTML", "Tailwind CSS", "Laravel", "PHP"],
  },
  {
     number: "04",
    name: "InfoSal",
    description:
      "News site using WordPress.",
    type: "music",
    image: infoSalImage,
     technologies: ["Wordpress"],
     youtube: "https://youtu.be/fvAoRkBtjYw",
  
  },
  {
     number: "05",
    name: "LeidymairaTransporte",
    description:
      "Website developed for a tourist transport company on the island of Sal, Cape Verde. The platform was designed to showcase the company's services and allow tourists to check transportation options and make bookings for tours and trips around the island.",
    type: "music",
    image: LeidyImage,
    youtube: "https://youtu.be/soZQoOzDQEs/",
     technologies: ["Wordpress"],

  },
  {
     number: "06",
    name: "Sap Kriole",
    description:
      "Web application dedicated to promoting the traditional cuisine of Cape Verde. The platform provides an admin panel with authentication and CRUD features to manage recipes.",
    type: "music",
    image: SapKrioleImage,
      technologies: ["HTML", "CSS", "Laravel", "PHP"],
      youtube: "https://youtu.be/zjRlNCSPNFk/",
    
  },

   {
     number: "07",
    name: "NaturaSkincare",
    description:
      "Development of an online store for skincare products. The platform allows you to showcase products, view their details, and add items to the shopping cart, providing a simple and intuitive shopping experience.",
    type: "music",
    image: NaturaSkinCareImage,
     technologies: ["HTML", "CSS","PHP"],
    youtube: "https://youtu.be/e1ccFHo97-s",
  },

  
   {
     number: "08",
    name: "JogoPython",
    description:
      "Development of a game using Python, as part of training, with the goal of applying fundamental programming concepts, logic, functions, and user interaction.",
    type: "music",
    image: pythonImage,
     technologies: ["Python"],
    youtube: "https://youtube.com/shorts/ygoigml-EhQ",
  },

  {
     number: "09",
    name: "Projeto Clínica Dentária",
    description:
      "Development of a web application for managing a dental clinic, using ASP.NET Core (C#), Entity Framework Core, and SQL Server. The system includes features for managing patients, the professional team, appointments, and billing, with CRUD operations and user authentication.",
    type: "music",
    image: ClinicaImage,
     technologies: ["HTML", "CSS", "C#", "ASP.NET Core"],
    youtube: "https://youtu.be/2TPfvyiIW8M",
  },

   {
     number: "10",
    name: "Projeto EuMunicipe",
    description:
      "Development of a web platform aimed at making it easier for citizens to interact with municipal services, allowing the centralization of access to information and services from the city council. The project aimed to promote the digitalization of public services and simplify communication between residents and the local administration.",
    type: "music",
    image: municipeImage,
     technologies: ["HTML", "CSS", "C#", "ASP.NET Core"],
  },
  
];

const skills = [
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "ASP.NET Core",
  "MySQL",
  "SQL Server",
  "WordPress",
  "Bootstrap",
  "Tailwind CSS",
];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo"></a>

      <nav>
        <a href="#home">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className="nav-contact">
          Contact <span></span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot"></span>
          WEB DEVELOPER
        </span>

        <h1>
          Hello, I'm
          <br />
          <span>Luciana</span>
          <span className="surname"> da Cruz.</span>
        </h1>

        <p>
         I am creative, curious, with a taste for technology and continuous learning. 
         I love new challenges. I enjoy turning ideas into functional digital solutions, always aiming to develop projects that are intuitive, efficient, and of high quality.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button button-light">
            Explore my work <span></span>
          </a>
          <a href="#contact" className="button button-outline">
            Contact me <span></span>
          </a>
        </div>

        
      </div>

      <div className="hero-image-wrapper">
        <div className="image-decoration"></div>
        
        <div className="hero-image">
          
          <span className="photo-fallback">LC</span>
          
            <img
      src={luciImage}
      alt="Luciana da Cruz"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
          />
        </div>
        <div className="image-caption">
          
        </div>
      </div>

    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
    
      <div className="about-bottom">
        <div>
          <span className="small-label">BASED IN</span>
          <strong>Leiria, Portugal</strong>
        </div>
        <div>
          <span className="small-label">FOCUS</span>
          <strong>Web Development</strong>
        </div>
        <div>
          <span className="small-label">CURRENTLY LEARNING</span>
          <strong>ASP.NET ·  Unity</strong>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
       
        <h2>My<span> Projects</span></h2>
        <p>
          A selection of projects developed throughout my journey
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className={`project-preview ${project.type}`}>
  {project.image ? (
  <>
    <img
      src={project.image}
      alt={`Preview of ${project.name}`}
      className="project-image"
    />
    <div className="preview-top">
      <span>PROJECT / {project.number}</span>
    </div>
  </>
) : (
    <>
      <div className="preview-top">
        <span>PROJECT / {project.number}</span>
        <span>↗</span>
      </div>

      <div className="preview-content">
        <strong>{project.name}</strong>
        <span className="preview-line"></span>
        <span className="preview-category">{project.category}</span>
      </div>
    </>
  )}
</div>

            <div className="project-info">
              <div className="project-title-row">
                <div>
                  <span className="project-number">
                    {project.number} —
                  </span>
                  <h3>{project.name}</h3>
                </div>
                <span className="project-arrow"></span>
              </div>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer">
                    VISIT PROJECT ↗
                  </a>
                )}
                {project.youtube && (
                  <a href={project.youtube} target="_blank" rel="noreferrer">
                    WATCH VIDEO ↗
                  </a>
                )}
                {!project.website && !project.youtube && (
                  <span className="link-placeholder">
                    PROJECT LINK TO BE ADDED
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
       
        <h2>Technologies & <span>skills.</span></h2>
        <p>
          Tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{skill}</strong>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      
      <h2>
        Did you like my profile? 
        <br />
        <span>Let's talk.</span>
      </h2>

      <p>
        I am interested in new opportunities and exciting projects. Feel free to get in touch.
      </p>

     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=lucianadacruz.unicv@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-light contact-button"
>
  Say hello <span></span>
</a>

      <div className="contact-socials">
        <a href="https://github.com/luciana-luana" target="_blank" rel="noreferrer">
          GITHUB 
        </a>
        <a href="https://www.linkedin.com/in/lucianadacruz" target="_blank" rel="noreferrer">
          LINKEDIN 
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        LUCIANA<span>.</span>
      </a>
    
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
