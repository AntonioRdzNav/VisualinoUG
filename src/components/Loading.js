import React from "react"

class Loading extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			text: 'Loading'
		}
	}
    componentDidUpdate(){
        const stopper = this.state.text + '...'

        this.interval = setInterval(() => {
            (this.state.text === stopper)? 
                this.setState({text: 'Loading'}):            
                this.setState((currentState) => {
                    return{
                        text: currentState.text + '.'
                    }
                })    
        }, 300)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

	render(){
		return (
			<div>
				<p> {this.state.text} </p>
			</div>
		)
	}
}

export default Loading;