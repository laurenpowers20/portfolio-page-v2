import earth from "../images/earth.gif";
import trivia from "../images/trivia.png";
import simpsons from "../images/simpsons.png";
import MovingComponent from "react-moving-text";
import "../App.css";

function Projects() {
  return (
    <>
      <h1 className="page-heading">Projects</h1>

      <MovingComponent
        type="slideInFromTop"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <main className="project-section">
          <div className="projects-container">
            <img src={earth} alt="worldmap" className="project-image" />
            <p className="project-description-title">
              Countries of The World API
            </p>
            <a
              href="https://github.com/laurenpowers20/jsonapi"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>
            <p className="project-description-text">
              A JSON API built with Mongoose, Express, and JavaScript.
            </p>
          </div>

          <div className="projects-container">
            <img src={trivia} alt="worldmap" className="project-image" />

            <p className="project-description-title">Game of Trivia</p>
            <a
              href="https://github.com/laurenpowers20/trivia"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>

            <a
              href="https://triviagame1022.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site
            </a>

            <p className="project-description-text">
              A multiple choice game of trivia written in HTML, CSS, and
              JavaScript.
            </p>
          </div>

          <div className="projects-container">
            <img src={simpsons} alt="worldmap" className="project-image" />

            <p className="project-description-title">
              Simpsons Quote Generator
            </p>
            <a
              href="https://github.com/laurenpowers20/simpsonsreact"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>

            <a
              href="https://simpsonsquotegenerator.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site
            </a>

            <p className="project-description-text">
              A Simpsons Quote Generator built in React. All quotes and images
              pulled from an API.
            </p>
          </div>
        </main>
      </MovingComponent>
    </>
  );
}

export default Projects;
