import "../App.css";
import MovingComponent from "react-moving-text";
import headshot from "../images/headshot.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about-component">
   
        <MovingComponent
          type="popIn"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <img
            className="headshot"
            src={headshot}
            alt="Lauren Powers Head Shot"
          />
          </MovingComponent>
          </div>
        <MovingComponent
          type="slideInFromBottom"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <p className="about-branding-statement">
            I am a Software Engineer who is excited to build and create. My 12
            years of experience in financial operations has helped me turn
            problem solving and crisis management into an everyday practice. My
            collaborative and determined approach enables me to see challenges
            as opportunities to learn and grow.
          </p>
      </MovingComponent>
      
      <div className="about-icons">
        <MovingComponent
          type="fadeInFromRight"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <a
            href="https://www.linkedin.com/in/lauren-powers20/"
            target="_blank"
            className="about-me-icons"
            rel="noreferrer"
          >
            <FaLinkedin alt="linkedin" />
          </a>

          <a
            href="https://github.com/laurenpowers20"
            target="_blank"
            alt="github"
            className="about-me-icons"
            rel="noreferrer"
          >
            <FaGithub alt="github" />
          </a>

          <a href="" className="about-me-icons" alt="resume file">
            <FaFileAlt alt="resume" />
          </a>
        </MovingComponent>
      </div>
    </>
  );
}

export default About;
