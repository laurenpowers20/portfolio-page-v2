import "../App.css"
import lightning from "../images/lightning(1).png"
import headshot from "../images/headshot.jpeg"
import MovingComponent from 'react-moving-text'

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
 <h1> Hi, I'm Lauren! <img className="lightning" src={lightning} alt="logo" /></h1>
          </MovingComponent>
        </div>
        

      <div className="software-enigneer-title">    
        <MovingComponent
           type="squeezeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
            <div className="front-page-heading"><h2> I'm a Software Engineer</h2>
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
   <img className="headshot" src={headshot} alt="Lauren Powers Headshot"/>
          </MovingComponent>
        </div>
        </div>

     
      </>
  )
}

export default Home