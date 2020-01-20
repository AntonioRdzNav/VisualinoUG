import React from "react"
import Button from '../components/Button'
import '../stylesheets/HomePage.css'
import {Link} from 'react-router-dom'

function HomePage(props) {
    return (
        <div>
            <div id="landing-header">
                <h1 className="homeTitle">
                    Welcome to this Test!
                </h1>
                <Link to={{pathname: '/jobs'}}
                      style={{textDecoration:'inherit',color:'inherit'}}>
                    <Button 
                        text="Go see Jobs..."
                        type="info"
                        size="large"
                    />
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