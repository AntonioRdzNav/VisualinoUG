import React from "react"
import Axios from "axios"

class JobCreate extends React.Component{
	constructor(props){
		super(props)

        this.onSubmit = this.onSubmit.bind(this)		
	}

	onSubmit(event){
		event.preventDefault()		
        Axios.post('http://localhost:8080/jobs', {
				id: String(Math.ceil(Math.random() * 100000)),
				title: this.title.value,
				city: this.city.value,
				employer: this.employer.value,
				requirements: this.requirements.value,
				tasks: this.tasks.value
			})
			.then(resp => {
				console.log(resp.data)
			}).then(() => {
				this.props.history.push('/jobs')
			}).catch(error => {
				console.log(error)
			});   
	}	    	

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input 
						placeholder="Add title"
						ref={title => this.title=title}
					/>
					<input 
						placeholder="Add city"
						ref={city => this.city=city}
					/>
					<input 
						placeholder="Add employer"
						ref={employer => this.employer=employer}
					/>
					<textarea 
						placeholder="Add requirements"
						ref={requirements => this.requirements=requirements}
					/>
					<textarea 
						placeholder="Add tasks"
						ref={tasks => this.tasks=tasks}
					/>
					<button>Create</button>
				</form>
			</div>
		)
	}
}

export default JobCreate;