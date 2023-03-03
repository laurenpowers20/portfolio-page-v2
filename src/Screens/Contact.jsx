import MovingComponent from "react-moving-text";
import Form from "../Components/Form";

function Contact() {
  return (
    <>
      <h1 className="page-heading">Contact</h1>
      <p className="contact-me">Send me a message!</p>
      <MovingComponent
        type="bounce"
        duration="1000ms"
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
