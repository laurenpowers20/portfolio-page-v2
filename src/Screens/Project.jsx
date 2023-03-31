import earth from "../images/earth.gif";
import trivia from "../images/trivia.png";
import react from "../images/react.jpg";
import simpsons from "../images/simpsons.png";
import bside from "../images/bside.jpg";
import food from "../images/foodathome.png";
import shill from "../images/shill.png";
import { Link } from "react-router-dom";
import "../Screens/Projects/Projects.css";

function Projects() {
  return (
    <div className="project">
      <h1 className="page-heading">Projects</h1>
      <h2 className="project-click-more-info">
        Click image for more information
      </h2>
      <main className="project-section">
        <Link to="/foodathome">
          <div className="projects-container">
            <img src={food} alt="trivia" className="project-image" />
            <p className="project-description-title">We Got Food at Home</p>
          </div>
        </Link>

        <Link to="/reactportfolio">
          {" "}
          <div className="projects-container">
            <img src={react} alt="react" className="project-image" />
            <p className="project-description-title">My React Portfolio</p>
          </div>
        </Link>

        <Link to="/countriesAPI">
          {" "}
          <div className="projects-container">
            <img src={earth} alt="worldmap" className="project-image" />
            <p className="project-description-title">
              Countries of The World API
            </p>
          </div>
        </Link>

        <Link to="/gameoftrivia">
          <div className="projects-container">
            <img src={trivia} alt="trivia" className="project-image" />
            <p className="project-description-title">Game of Trivia</p>
          </div>
        </Link>
        <div className="project-section">
          <Link to="/shill-social">
            {" "}
            <div className="projects-container">
              <img
                src={shill}
                alt="shill-social coin log"
                className="project-image"
              />
              <p className="project-description-title">$hill Social Network</p>
            </div>
          </Link>

          <Link to="/simpsonsquotes">
            <div className="projects-container">
              <img src={simpsons} alt="worldmap" className="project-image" />
              <p className="project-description-title">
                Simpsons Quote Generator
              </p>
            </div>
          </Link>

          <Link to="/bside">
            {" "}
            <div className="projects-container">
              <img src={bside} alt="worldmap" className="project-image" />
              <p className="project-description-title">B-Side Music</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Projects;
