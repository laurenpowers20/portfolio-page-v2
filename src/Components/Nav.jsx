import "./Styles/Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="nav-desktop">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
