import { Link } from "react-router-dom";

function CountriesProject() {
  return (
    <>
      <h1>Countries of the World API</h1>
      <a
        href="https://github.com/laurenpowers20/jsonapi"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub Repo
      </a>
      <p className="project-description-text">
        A JSON API built with Mongoose, Express, and JavaScript.
      </p>
      <Link to="/projects">Back to projects</Link>
    </>
  );
}

export default CountriesProject;
