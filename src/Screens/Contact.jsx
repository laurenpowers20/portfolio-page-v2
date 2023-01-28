import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import MovingComponent from "react-moving-text";
// import React, { useState } from "react";

function Contact() {
  // const [form, setForm] = useState({
  //   email: "",
  //   message: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm((prevProps) => ({
  //     ...prevProps,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(form);
  // };

  return (
    <>
      <h1 className="page-heading">Contact</h1>
      <MovingComponent
        type="bounce"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        
        <p className="contact-me">
          {" "}
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/lauren-powers20/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>{" "}
          or{" "}
          <a href="mailto:lauren.powers20@gmail.com">
            <TfiEmail /> e-mail
          </a>{" "}
          me!
        </p>
      </MovingComponent>
    </>
  );
}

export default Contact;
