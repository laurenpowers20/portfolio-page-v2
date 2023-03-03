import React, { useState } from "react";
import { send } from "emailjs-com";
import LoadingSpinner from "./LoadingSpinner";
import "./Styles/Form.css";

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const clearForm = () => {
    setToSend({
      name: "",
      email: "",
      comments: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send("service_1vhbumn", "template_zs8n08f", toSend, "2PPJhR_N0_MQXbpru")
      .then((response) => {
        setIsLoading(false);
        clearForm();
        setMessage("Thanks for your message!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={toSend.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your e-mail"
            value={toSend.email}
            onChange={handleChange}
          />

          <textarea
            type="text"
            name="comments"
            className="form-comments"
            placeholder="Your message"
            value={toSend.comments}
            onChange={handleChange}
          />
          <div className="form-spinner">
            {isLoading ? <LoadingSpinner /> : null}
          </div>
          <div className="message">{message ? <h2>{message}</h2> : null}</div>
          <button type="submit" className="button1" disabled={isLoading}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
