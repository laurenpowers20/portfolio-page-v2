import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import "./Projects.css";
import trivia1 from "./project-images/triviascreenshot1.jpg";
import trivia2 from "./project-images/triviascreenshot2.jpg";

function TriviaProject() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={trivia1}
            className="project-descripton-image"
            alt="trivia project screen shot"
          />
          <img
            src={trivia2}
            className="project-descripton-image"
            alt="trivia project screen shot"
          />
        </div>
        <div className="project-description">
          <h1 className="project-heading">Game of Trivia</h1>
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
          <p className="project-description-text">
            A multiple choice game of trivia. The user will select an answer out
            of four choices. There are 10 questions, each worth 10 points.
          </p>
          <p className="project-description-text">
            Written in HTML, CSS, and JavaScript.
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

export default TriviaProject;
