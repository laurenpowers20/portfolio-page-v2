import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import "../App.css"
import headshot from "../images/headshot.jpeg"
import lightning from "../images/lightning(1).png"
import { Link } from "react-router-dom"



const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "5em" }}>Hi, I'm Lauren! <img className="lightning" src={lightning}/></span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>I'm a Software Engineer</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "4em" }}>Want to see my work?
              <Link to="/projects">Projects</Link>
            </span>
          
   

        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div >
          <span style={{ fontSize: "4em" }}>
            {/* <Animator animation={MoveIn(10000, 10000)}>I'm a Software Engineer</Animator> */}
              <div>
              <img className="headshot" src={headshot} />
              </div>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Project here</span>
          <span style={{ fontSize: "3em" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Presenter
