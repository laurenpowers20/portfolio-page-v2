import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import countriesAPI from "/Users/laurenpowers/Desktop/portfolio-page/src/images/countriesAPI.png";
import "./Projects.css";

function CountriesProject() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={countriesAPI}
            alt="json object"
            className="project-descripton-image"
          />
        </div>
        <div className="project-description">
          <h1 className="project-heading">Countries of the World API</h1>
          <button className="button1">
            <a
              href="https://github.com/laurenpowers20/jsonapi"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>
          <p className="project-description-text">
            A JSON API built with Mongoose, Express, and JavaScript.
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
