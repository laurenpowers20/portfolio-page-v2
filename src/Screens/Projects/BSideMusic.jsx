import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import "./Projects.css";
import bside1 from "./project-images/bside1.jpg";
import bside2 from "./project-images/bside2.jpg";

function BSideMusic() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={bside1}
            className="project-descripton-image bside-image"
            alt="b-side music screen shot"
          />
          <img
            src={bside2}
            className="project-descripton-image bside-image"
            alt="b-side music screen shot"
          />
        </div>
        <div className="project-description">
          <h1 className="project-heading">B-Side Music</h1>
          <button className="button1">
            <a
              href="https://github.com/laurenpowers20/maltm-records-front-end"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>

          <button className="button1">
            <a
              href="https://b-side-music-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site <BsGlobe />
            </a>
          </button>
          <p className="project-description-text">
            B-Side Music is a database representing artists and musicians that
            need to be heard! Find and search for artists of varying genres and
            discover songs to add to your collections.
          </p>
          <p className="project-description-text">
            A full stack app written in Mongoose, Express, React, and Node.
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

export default BSideMusic;
