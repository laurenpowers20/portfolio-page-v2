import "../App.css";
import lightning from "../images/lightning(1).png";
import MovingComponent from "react-moving-text";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="im-lauren">
          <MovingComponent
            type="fadeInFromLeft"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
           <p>
              {" "}
              Hi, I'm Lauren Powers!{" "}
              <img className="lightning" src={lightning} alt="logo" />
              </p>
          </MovingComponent>
        </div>

        <div className="software-enigneer-title">
          <MovingComponent
            type="popIn"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <div className="front-page-heading">
              I'm a Software Engineer
            </div>
          </MovingComponent>
        </div>

        <div className="home-project-link">
          <MovingComponent
            type="fadeInFromRight"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
              <p>
              <NavLink className="navlink" to="/projects"><HiChevronDoubleRight /><p className="home-explore-work">Explore work</p> </NavLink>
              </p>
          </MovingComponent>
        </div>
      </div>
    </>
  );
}

export default Home;
