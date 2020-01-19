import React from "react"

class JobCreate extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			job: {
				title: "",
				city: "",
				employer: "",
				requirements: "",
				tasks: ""
			}
		}
	}

	render(){
		const {title, city, employer, requirements, tasks} = this.state.job
		return (
			<div>

				<button>Create</button>
			</div>
		)
	}
}

export default JobCreate;