import React from 'react';
import '../stylesheets/Modal.css'
import Button from './Button'

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
                    <Button 
                        text="Yes"
                        type="success"
                        size="small"
                        onClick={this.onYes}
                    />
                    <Button 
                        text="No"
                        type="danger"
                        size="small"
                        onClick={this.props.onClose}
                    />                                            
                </div>
            </div>
        </div>
        );
    }
}

export default Modal;