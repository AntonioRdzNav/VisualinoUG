import React from "react"

class JobShow extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			job: props.location.job
		}
	}

	render(){
		const {title, city, employer, requirements, tasks} = this.state.job

		return (
			<div>
				<h4> {title} </h4>            
				<h5> {city} </h5>
				<h6> {employer} </h6>
				<p> {requirements} </p>
				<p> {tasks} </p>

				<button>Update</button>
				<button>Delete</button>
			</div>
		)
	}
}

export default JobShow;