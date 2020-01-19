import React from "react"
import '../stylesheets/NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
      <nav className="navbar">
        <Link to="/">
          <i className="fab fa-react"></i>			
        </Link>			
        <ul className="navlinks">
          <Link to="/jobs">
              <li className="links">
                <h3> Jobs </h3>
              </li>				
          </Link>
        </ul>
      </nav>
    )
}

export default NavBar;