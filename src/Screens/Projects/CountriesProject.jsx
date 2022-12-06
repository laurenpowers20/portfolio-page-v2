import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import countriesAPI from "./project-images/countriesAPI.png";
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
            An API with full CRUD functionality containing select information
            about the countries of the world. Includes:
            <ul className="list">
              <li>Name of country</li>
              <li>Whether it's independent or not</li>
              <li> Languages spoken</li>
              <li>Whether it's landlocked or not</li>
              <li>Images of the country's flag</li>
              <li>Population</li>
              <li>Continent</li>
            </ul>
          </p>
          <p className="project-description-text">
            Built with Mongoose, Express, and JavaScript.
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
