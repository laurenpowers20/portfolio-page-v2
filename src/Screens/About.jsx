import "../App.css";
import MovingComponent from "react-moving-text";
import headshot from "../images/HeadShot.png";

function About() {
  return (
    <>
      <div className="headshot-container">
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
            ></MovingComponent>
          </div>
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
              Hi there! My name is Lauren and I am an engineer based in New York
              City. My professional background lies in financial operations,
              where I spent 12 years at JP Morgan Chase. During my tenure there,
              I steadily progressed within the firm and eventually became the
              manager of one of its largest branches in NYC. However, when my
              time in banking came to an end, I saw an opportunity to pursue my
              passion for building and hands-on work. I'm one of those rare
              people who love putting Ikea furniture together and “figuring it
              all out!” I was inspired by my friends who had completed Software
              Engineering Immersive programs and were thriving in their roles.
            </p>
            <p className="about-branding-statement">
              In the summer of 2022, I began teaching myself JavaScript and
              coding simple projects. In September, I enrolled in General
              Assembly's Software Engineering Immersive program, where I worked
              on both front-end and back-end projects every week. Throughout
              this journey, I've embraced challenges and pushed myself beyond my
              comfort zone. It's been a wild ride, and I am confident in my
              abilities and excited to continue learning and growing in my
              career.
            </p>
            <p className="about-branding-statement">
              {" "}
              When I'm not coding, I can be found:
              <ul>
                <li>Hiking in the Hudson Valley</li>
                <li>At the beach (in winter and summer!)</li>
                <li>Traveling somewhere new </li>
                <li>Scuba diving </li>
                <li>
                  Do something artistic (I've been into embroidery lately!)
                </li>
                <li>Cooking something new and delicious!</li>{" "}
              </ul>
            </p>
          </div>
        </MovingComponent>
      </div>
    </>
  );
}

export default About;
