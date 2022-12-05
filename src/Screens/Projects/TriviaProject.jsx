import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import "./Projects.css";
import trivia1 from "/Users/laurenpowers/Desktop/portfolio-page/src/images/triviascreenshot1.jpg";
import trivia2 from "/Users/laurenpowers/Desktop/portfolio-page/src/images/triviascreenshot2.jpg";

function TriviaProject() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img src={trivia1} className="project-descripton-image" />
          <img src={trivia2} className="project-descripton-image" />
        </div>
        <div className="project-description">
          <h1 className="project-heading">Game of Trivia</h1>
          <p className="project-description-text">
            A multiple choice game of trivia written in HTML, CSS, and
            JavaScript.
          </p>
          <button className="button1">
            <a
              href="https://github.com/laurenpowers20/trivia"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>

          <button className="button1">
            <a
              href="https://triviagame1022.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site <BsGlobe />
            </a>
          </button>
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

export default TriviaProject;
