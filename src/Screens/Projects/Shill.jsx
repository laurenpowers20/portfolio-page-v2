import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import shillsocial from "./project-images/shill-social.png";
import "./Projects.css";

function CountriesProject() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={shillsocial}
            alt="shill screenshot"
            className="project-descripton-image"
          />
        </div>
        <div className="project-description">
          <h1 className="project-heading">$hill Social Network</h1>
          <button className="button1">
            <a
              href="https://github.com/SEI-Buffleheads/twitter-clone-frontend"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>
          <button className="button1">
            <a
              href="https://shill-social.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site <BsGlobe />
            </a>
          </button>

          <p className="project-description-text">
            A social media network for those who want to share their financial
            goals, give advice, and discuss trends. Acted as SCRUM master
            collaborating with 10 developers to create a full-stack web
            application. Utilized GitHub Projects, Canva, and Figma to execute
            deadlines, wireframing, and team expectations.
          </p>
          <p className="project-description-text">
            Built with React, TailwindCSS, Python, and Django
          </p>
        </div>
      </main>
      <div className="back-to-projects-button-div">
        <button className="button1">
          {" "}
          <Link className="project-link" to="/projects">
            Back to Projects
          </Link>
        </button>
      </div>
    </>
  );
}

export default CountriesProject;
