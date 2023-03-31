import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import food1 from "./project-images/foodathome1.jpg";
import food2 from "./project-images/foodathome2.jpg";
function FoodAtHome() {
  return (
    <>
      <main className="project-main-div">
        <div className="project-descripton-images-container">
          <img
            src={food1}
            className="project-descripton-image"
            alt="react project screen shot"
          />
          <img
            src={food2}
            className="project-descripton-image"
            alt="react project screen shot"
          />
        </div>

        <div className="project-description">
          <h1 className="project-heading">We Got Food at Home</h1>
          <button className="button1">
            <a
              href="https://github.com/laurenpowers20/we-got-food-at-home"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repo <FaGithub />
            </a>
          </button>
          <button className="button1">
            <a
              href="https://we-got-food-at-home.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Site <BsGlobe />
            </a>
          </button>

          <p className="project-description-text">
            Worked in a cross-functional team of UX designers and software
            engineers and pitched to a panel of industry experts. We created a
            gamification app that incentivizes users to cook at home instead of
            ordering out. The app rewards users with points and badges when they
            prepare meals at home. Users can input ingredients they have on hand
            and generate a recipe using OpenAI.
          </p>
          <p className="project-description-text">
            Technologies used:{" "}
            <ul>
              <li>
                React: Used to build the user interface and handle the front-end
                development.
              </li>

              <li>
                OpenAI API: Integrated to provide recipe recommendations and
                suggestions based on ingredients users have in on hand in their
                own kitchens.
              </li>

              <li>
                Firebase: Used as the back-end to store user data, manage
                authentication, and handle real-time updates.
              </li>
            </ul>
          </p>
        </div>
      </main>
      <div className="back-to-projects-button-div">
        <button className="button1">
          <Link className="project-link" to="/projects">
            Back to Projects
          </Link>
        </button>
      </div>
    </>
  );
}

export default FoodAtHome;
