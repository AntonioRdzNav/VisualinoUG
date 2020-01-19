import React from 'react';
import './stylesheets/Modal.css'
import { Link } from "react-router-dom";

class Modal extends React.Component {
    constructor(props){
        super(props)
        
        this.onYes = this.onYes.bind(this)
    }

    onYes(){
        const {onYes, id} = this.props

        onYes(id)
    }

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
        return null;
        }

        return (
        <div className="backdrop">
            <div className="modal">
            {this.props.children}

            <div>
                <Link to={{pathname: '/jobs'}}>
                    <button onClick={this.onYes}>
                        Yes
                    </button>
                </Link>                
                <button onClick={this.props.onClose}>
                No
                </button>
            </div>
            </div>
        </div>
        );
    }
}

export default Modal;