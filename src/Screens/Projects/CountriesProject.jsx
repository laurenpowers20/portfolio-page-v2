import { Link } from "react-router-dom";

function CountriesProject() {
  return (
    <>
      <h1>Countries of the World API</h1>
      <button className="button1">
        <a
          href="https://github.com/laurenpowers20/jsonapi"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          GitHub Repo
        </a>
      </button>
      <p className="project-description-text">
        A JSON API built with Mongoose, Express, and JavaScript.
      </p>
      <Link to="/projects">
        <button className="button1">Back to Projects</button>
      </Link>
    </>
  );
}

export default CountriesProject;
