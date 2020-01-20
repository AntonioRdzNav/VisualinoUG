import React from "react"
import Reflux from "reflux"
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'

class JobCreate extends Reflux.Component{
	constructor(props){
		super(props)
		this.store = JobStore
		this.onSubmit = this.onSubmit.bind(this)
	}
	
	onSubmit(event){
		event.preventDefault()
		const job = {
			title: this.title.value,
			city: this.city.value,
			employer: this.employer.value,
			requirements: [this.requirements.value],
			tasks: [this.tasks.value]
		}		
		// create job
		JobActions.createJob(job)
		this.props.history.push('/jobs')     
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