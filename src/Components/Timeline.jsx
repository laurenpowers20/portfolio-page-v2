import "./Styles/Timeline.css";

function Timeline() {
  return (
    <>
      <div className="timeline">
        <ul>
          <li>
            <div className="content">
              <h3>We got set up</h3>
              <p>
                Sisters, Tracy and Dez thought Lauren and Jesse were compatible
                and suggested they go on a date. Jesse called Lauren to ask her
                out and she ignored it because it was probably a scam likely. He
                left a voicemail, though.
              </p>
            </div>
            <div className="time">
              <h4>March 2019</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h3>First Date</h3>
              <p>
                Fools, Lauren and Jesse go on a first date on April Fool's Day.
                They have pizza and beer in Astoria, Queens.
              </p>
            </div>
            <div className="time">
              <h4>April 1 2019</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h3>Moved to Forest Hills</h3>
              <p>
                After having a lot of fun being essential workers during the
                pandemic, Lauren and Jesse moved to their apartment in Forest
                Hills.
              </p>
            </div>
            <div className="time">
              <h4>November 2020</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h3>Surprise! City Hall wedding.</h3>
              <p>We just went for it! What else were we doing, really? </p>
            </div>
            <div className="time">
              <h4>August 2010</h4>
            </div>
          </li>

          <li>
            <div className="content">
              <h3>Started job at JP Morgan Chase</h3>
              <p>I worked my way up from banker to manager.</p>
            </div>
            <div className="time">
              <h4>July 7 2023</h4>
            </div>
          </li>

          <div className="bottom"></div>
        </ul>
      </div>
    </>
  );
}

export default Timeline;
