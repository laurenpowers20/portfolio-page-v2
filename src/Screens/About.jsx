import "../App.css"
import headshot from "../images/headshot.jpeg"

function About() {
  return (
    <div className="about-component">
      <h1 className="page-heading">About Me</h1>
      <img className="headshot" src={headshot} alt="Lauren Powers Head Shot"/>
      <p className="about-branding-statement">
I am a Software Engineer who is excited to build and create. My 12 years of experience in financial operations has helped me turn problem solving and crisis management into an everyday practice. My collaborative and determined approach enables me to see challenges as opportunities to learn and grow.</p>
      </div>
  )
}

export default About