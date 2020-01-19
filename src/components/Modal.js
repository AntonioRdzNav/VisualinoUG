import React from 'react';
import './stylesheets/Modal.css'

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
                <button onClick={this.onYes}>
                    Yes
                </button>              
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