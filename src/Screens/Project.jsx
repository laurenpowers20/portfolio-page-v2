import earth from "../images/earth.gif";
import trivia from "../images/trivia.png";
import simpsons from "../images/simpsons.png";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";
import "../App.css";

function Projects() {
  return (
    <>
      <h1 className="page-heading">Projects</h1>
      <h3>Click for more information.</h3>

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
          <Link to="/simpsonsquotes">
            <div className="projects-container">
              <img src={simpsons} alt="worldmap" className="project-image" />
              <p className="project-description-title">
                Simpsons Quote Generator
              </p>
            </div>
          </Link>
        </main>
      </MovingComponent>
    </>
  );
}

export default Projects;
