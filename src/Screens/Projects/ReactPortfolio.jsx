import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import react from "./project-images/react.jpg";
import react2 from "./project-images/react2.jpg";
function ReactPortfolio() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={react}
            className="project-descripton-image"
            alt="react project screen shot"
          />
          <img
            src={react2}
            className="project-descripton-image"
            alt="react project screen shot"
          />
        </div>

        <div className="project-description">
          <h1 className="project-heading">My Lil' React Portfolio</h1>
          <button className="button1">
            <a
              href="https://github.com/laurenpowers20/react-fun"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>
          <button className="button1">
            <a
              href="https://react-portfolio-lauren-powers.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site <BsGlobe />
            </a>
          </button>

          <p className="project-description-text">
            For those of us who were raised by The Simpsons, here's a quote
            generator to make you feel nostalgic! The user will enter the site
            and a random Simpsons character will appear. Users can click on "Get
            Info!" to display a modal with the character name and a quote. All
            quotes and images were pulled from{" "}
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

export default ReactPortfolio;
