import "./Styles/Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="nav-desktop">
        {" "}
        <NavLink className="navlink" to="/">
          <button className="button-74"> Home </button>
        </NavLink>
        <NavLink className="navlink" to="/about">
          <button className="button-74">About</button>
        </NavLink>
        <NavLink className="navlink" to="/projects">
          <button className="button-74"> Projects</button>
        </NavLink>
        <NavLink className="navlink" to="/contact">
          <button className="button-74"> Contact</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
