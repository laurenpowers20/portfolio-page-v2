import earth from "../images/earth.gif";
import trivia from "../images/trivia.png";
import simpsons from "../images/simpsons.png";
import bside from "../images/bside.png";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";
import "../Screens/Projects/Projects.css";

function Projects() {
  return (
    <>
      <h1 className="page-heading">Projects</h1>
      <h2 className="project-click-more-info">
        Click image for more information
      </h2>
      <main className="project-section">
        <MovingComponent
          type="slideInFromLeft"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <Link to="/countriesAPI">
            {" "}
            <div className="projects-container">
              <img src={earth} alt="worldmap" className="project-image" />
              <p className="project-description-title">
                Countries of The World API
              </p>
            </div>
          </Link>
        </MovingComponent>

        <MovingComponent
          type="slideInFromBottom"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <Link to="/gameoftrivia">
            <div className="projects-container">
              <img src={trivia} alt="trivia" className="project-image" />
              <p className="project-description-title">Game of Trivia</p>
            </div>
          </Link>
        </MovingComponent>

        <MovingComponent
          type="slideInFromRight"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <Link to="/simpsonsquotes">
            <div className="projects-container">
              <img src={simpsons} alt="worldmap" className="project-image" />
              <p className="project-description-title">
                Simpsons Quote Generator
              </p>
            </div>
          </Link>
        </MovingComponent>

        <MovingComponent
          type="slideInFromTop"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <Link to="/bside">
            {" "}
            <div className="projects-container">
              <img src={bside} alt="worldmap" className="project-image" />
              <p className="project-description-title">B-Side Music</p>
            </div>
          </Link>
        </MovingComponent>
      </main>
    </>
  );
}

export default Projects;
