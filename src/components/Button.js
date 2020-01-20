import React from "react"
import '../stylesheets/Button.css'

function Button(props){
    const {text, type, size, onClick} = props //type: success, info, danger, yellow, black
    return (                                  //size: large, small, xsmall
        <button 
            className={`button ${type} ${size}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;