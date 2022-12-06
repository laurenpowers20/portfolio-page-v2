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
        type="slideInFromTop"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="about-branding-statement-container">
          <p className="about-branding-statement">
            I am a Software Engineer with a passion to build and create. My 12
            years of experience in financial operations and leadership has
            helped me turn problem solving and crisis management into an
            everyday practice. My collaborative and determined approach enables
            me to see challenges as opportunities to learn and grow as an
            engineer. By coding by convention, staying organized, and
            establishing a standard by which to follow I am able to cultivate a
            productive and successful environment. I'm excited to use my skills
            to help make web applications relatable and easy to understand for
            my peers and clients, and in turn, create products that improve the
            lives of people like me.
          </p>
        </div>
      </MovingComponent>
      <div className="about-icons-container">
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
      </div>
    </>
  );
}

export default About;
