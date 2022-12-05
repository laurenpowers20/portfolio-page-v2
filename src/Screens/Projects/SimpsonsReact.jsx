import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import simpsons1 from "/Users/laurenpowers/Desktop/portfolio-page/src/images/simpsonscreenshot1.jpg";
import simpsons2 from "/Users/laurenpowers/Desktop/portfolio-page/src/images/simpsonsscreenshot2.jpg";

function SimpsonsReact() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img src={simpsons1} className="project-descripton-image" />
          <img src={simpsons2} className="project-descripton-image" />
        </div>
        <div className="project-description">
          <h1 className="project-heading">Simpsons Quote Generator</h1>
          <button className="button1">
            <a
              href="https://github.com/laurenpowers20/simpsonsreact"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>
          <button className="button1">
            <a
              href="https://simpsonsquotegenerator.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site <BsGlobe />
            </a>
          </button>

          <p className="project-description-text">
            A Simpsons Quote Generator built in React. All quotes and images
            pulled from an API.
          </p>
        </div>
      </main>
      <div className="back-to-projects-button-div">
        <button className="button1">
          <Link className="project-link" to="/projects">
            Back to Projects
          </Link>
        </button>
      </div>
    </>
  );
}

export default SimpsonsReact;
