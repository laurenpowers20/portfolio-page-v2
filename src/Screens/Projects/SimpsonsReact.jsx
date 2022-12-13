import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import simpsons1 from "./project-images/simpsonscreenshot1.jpg";
import simpsons2 from "./project-images/simpsonsscreenshot2.jpg";

function SimpsonsReact() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={simpsons1}
            className="project-descripton-image"
            alt="simpsons project screen shot"
          />
          <img
            src={simpsons2}
            className="project-descripton-image"
            alt="simpsons project screen shot"
          />
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
            For those of us who were raised by The Simpsons, here's a quote
            generator to make you feel nostalgic! The user will enter site and a
            random Simpsons character will appear. User can click on "Get Info!"
            to display a modal with the character name and a quote. All quotes
            and images pulled from{" "}
            <a
              href="https://thesimpsonsquoteapi.glitch.me/"
              targert="_blank"
              rel="noreferrer"
            >
              The Simpsons Quote API
            </a>
            .
          </p>
          <p className="project-description-text">Built with React.js</p>
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
