import "./Styles/Nav.css"
// import { stack as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="nav-desktop">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/about">About</NavLink>
            <NavLink className="navlink" to="/projects">Projects</NavLink>
            <NavLink className="navlink" to="/contact">Contact</NavLink>
      </div> 

      {/* <div className="nav-mobile">
        <Menu>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/about">About</NavLink>
            <NavLink className="navlink" to="/projects">Projects</NavLink>
            <NavLink className="navlink" to="/contact">Contact</NavLink>
          </Menu>
       </div>   */}
       </div>
  )
}

export default Nav