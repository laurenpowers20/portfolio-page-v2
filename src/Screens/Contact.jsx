import MovingComponent from "react-moving-text";
import Form from "../Components/Form";
import resume from "../images/resume.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <h1 className="page-heading">Contact</h1>
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
      <a
        href={resume}
        className="about-me-icons"
        rel="noreferrer"
        alt="resume file"
        target="_blank"
      >
        <FaFileAlt alt="resume" />
      </a>
      <p className="contact-me">Send me a message!</p>
      <MovingComponent
        type="bounce"
        duration="1500ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <Form />
      </MovingComponent>
    </>
  );
}

export default Contact;
