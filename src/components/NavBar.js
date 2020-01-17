import React from "react"
import {Link} from 'react-router-dom'
import './stylesheets/NavBar.css'

class NavBar extends React.Component {
    render(){
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
}

export default NavBar;