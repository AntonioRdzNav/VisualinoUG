import React from "react"
import Reflux from "reflux"
import Button from '../components/Button'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'
import ReqActions from '../actions/ReqActions'
import TaskActions from '../actions/TaskActions'
import '../stylesheets/JobCreate.css'

class JobCreate extends Reflux.Component{
	constructor(props){
		super(props)
		this.store = JobStore
		this.onSubmit = this.onSubmit.bind(this)
		this.onNew = this.onNew.bind(this)
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

	onNewReq(event){
		event.preventDefault()
		var requirement = this.requirement.value
		ReqActions.createReq(requirement)		
	}

	render(){
		return (
			<div className="jumbotron">
				<form onSubmit={this.onSubmit}>
	{/* NORMAL INPUTS */}
					<div className="container">
						<div className="title">
							<label className="labTitle">Job Title: </label>
							<input
								required
								type="text" 
								placeholder="Add title"
								ref={title => this.title=title}/>    
							<label className="labTitle">Location: </label>        
							<input
								required
								type="text" 
								placeholder="Add city"
								ref={city => this.city=city}/>   
							<label className="labTitle">Employer: </label>
							<input
								required
								type="text" 
								placeholder="Add employer"
								ref={employer => this.employer=employer}/>   				
						</div>
						<div className="buttons">
							<Button
								text="Create Job"
								type="success"
								size="small"
							/>													
						</div>
					</div>
					<div>
	{/* REQUIREMENTS */}						
						<label className="labTitle">Requirements:</label>
						<form onSubmit={this.onNew}>					
							<div className="container">
								<div className="data">
									<input
										type="text" 
										placeholder="Add requirements"
										ref={requirement => this.requirement=requirement}/> 
								</div>
								<div className="buttons">												
									<Button
									text="New"
									type="success"
									size="xsmall"
									/><br/>												
								</div>																
							</div>								
						</form>														
	{/* TASKS */}										
						<label className="labTitle">Tasks:</label>
						<form onSubmit={this.onNew}>											
							<div className="container">
								<div className="data">
									<input
										type="text" 
										placeholder="Add tasks"
										ref={tasks => this.tasks=tasks}/> 
									</div>
								<div className="buttons">												
									<Button
										text="New"
										type="success"
										size="xsmall"
									/>																						
								</div>	
							</div>															
						</form>																												
					</div>						
				</form>
			</div>
		)
	}
}

export default JobCreate;