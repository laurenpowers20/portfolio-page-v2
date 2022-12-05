import { Link } from "react-router-dom"

function SimpsonsReact() {
  return (
    <>
      <h1>Simpsons</h1>
      <a
        href="https://github.com/laurenpowers20/simpsonsreact"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub Repo
      </a>

      <a
        href="https://simpsonsquotegenerator.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Live Site
      </a>

      <p className="project-description-text">
        A Simpsons Quote Generator built in React. All quotes and images pulled
        from an API.
      </p>
      <Link to="/projects">Back to projects</Link>
    </>
  );
}

export default SimpsonsReact;
