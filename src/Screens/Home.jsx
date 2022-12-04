import "../App.css"
import lightning from "../images/lightning(1).png"
import MovingComponent from 'react-moving-text'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"

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
      fillMode="none">
 <p> Hi, I'm Lauren Powers! <img className="lightning" src={lightning} alt="logo" /></p>
          </MovingComponent>
      </div>
        
      <div className="software-enigneer-title">    
        <MovingComponent
          // type="squeezeMix"
          type="popIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
          <div className="front-page-heading"><p>I'm a Software Engineer</p>
          </div>
          </MovingComponent>
          </div>

    
    <div className="im-lauren">
    <MovingComponent
          type="fadeInFromRight"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
            <p>
              <a href="https://www.linkedin.com/in/lauren-powers20/" target="_blank" className="home-page-icons" rel="noreferrer">
             <FaLinkedin alt="linkedin" /></a>
              <a href="https://github.com/laurenpowers20" target="_blank" alt="github"className="home-page-icons" rel="noreferrer"><FaGithub alt="github" /></a>
              {/* <a href="" className="home-page-icons"> */}
              <FaFileAlt alt="resume" />
            {/* </a> */}
            </p>
          </MovingComponent>
        </div>
        </div>

     
      </>
  )
}

export default Home