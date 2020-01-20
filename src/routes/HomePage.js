import React from "react"
import '../stylesheets/HomePage.css'
import {Link} from 'react-router-dom'

function HomePage(props) {
    return (
        <div>
            <div id="landing-header">
                <h1>
                    Welcome to this Test!
                </h1>
                <Link to={{pathname: '/jobs'}}>
                    <button>Go see Jobs...</button>
                </Link>
            </div>        

            <ul className="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default HomePage;