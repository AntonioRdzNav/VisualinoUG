import React from "react"
import '../stylesheets/NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/">
        <i className="fab fa-react"></i>			
      </a>		
      <ul className="navlinks">
        <Link to="/jobs"
              style={{textDecoration:'inherit',color:'inherit'}}>
            <li className="links">
              <h3> Jobs </h3>
            </li>		
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar;