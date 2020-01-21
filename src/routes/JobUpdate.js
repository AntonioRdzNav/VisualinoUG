import React from "react"
import Reflux from "reflux"
import Loading from '../components/Loading'
import Button from '../components/Button'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'
import ReqActions from '../reflux/actions/ReqActions'
import TaskActions from '../reflux/actions/TaskActions'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

class JobUpdate extends Reflux.Component{
	constructor(props){
		super(props)

		this.store = JobStore
		this.updateJob = this.updateJob.bind(this)								
		this.onCreateReq = this.onCreateReq.bind(this)
		this.onUpdateReqByIndex = this.onUpdateReqByIndex.bind(this)
		this.onCreateTask = this.onCreateTask.bind(this)
		this.onUpdateTaskByIndex = this.onUpdateTaskByIndex.bind(this)	
	}

	componentDidMount(){
		const {id} = this.props.match.params		
        // get job by id 	
		JobActions.getJobById(id)
    }	
	componentWillUnmount(){
		JobActions.undefineJob()		
	}	
	notify(error){
		(error)?
			toast.error('That Job does not exist', {
				position: "top-right",
				hideProgressBar: false,
				closeOnClick: true
			}):
			toast.success('The Job was Updated!', {
				position: "top-right",
				hideProgressBar: false,
				closeOnClick: true
			})
	}		
////////////////////////////////////////////////////////////////////////
///////////////////////////// JobActions ///////////////////////////////
////////////////////////////////////////////////////////////////////////
	onChange(event){
		event.preventDefault()
		const {name, value} = event.target
		JobActions.jobChange(name, value)
  	}
	updateJob(event){	
		event.preventDefault()
		const job = this.state.job
		const {id} = this.props.match.params	
		// update job by id
		JobActions.updateJobById(id, job)
		this.props.history.push(`/jobs/${id}`)
		this.notify(false)  
	}	  

////////////////////////////////////////////////////////////////////////
///////////////////////////// ReqActions ///////////////////////////////
////////////////////////////////////////////////////////////////////////
	onCreateReq(event){
		event.preventDefault()		
		const req = this.refs.requirement.value
		ReqActions.createReq(req)
		this.refs.reqForm.reset()
		this.refs.reqForm.scrollIntoView({ behavior: "smooth" });
	}
	onUpdateReqByIndex(index){	
		const req = this.refs.requirement.value
		ReqActions.updateReqByIndex(index, req)
		this.refs.reqForm.reset()
		this.refs.reqForm.scrollIntoView({ behavior: "smooth" });
	}
	onDeleteReqByIndex(index){	
		ReqActions.deleteReqByIndex(index)	
		this.refs.reqForm.scrollIntoView({ behavior: "smooth" });
	}	
////////////////////////////////////////////////////////////////////////
///////////////////////////// TaskActions //////////////////////////////
////////////////////////////////////////////////////////////////////////
	onCreateTask(event){
		event.preventDefault()		
		const task = this.refs.task.value
		TaskActions.createTask(task)	
		this.refs.taskForm.reset()
		this.refs.taskForm.scrollIntoView({ behavior: "smooth" });
	}
	onUpdateTaskByIndex(index){	
		const task = this.refs.task.value
		TaskActions.updateTaskByIndex(index, task)
		this.refs.taskForm.reset()
		this.refs.taskForm.scrollIntoView({ behavior: "smooth" });
	}
	onDeleteTaskByIndex(index){	
		TaskActions.deleteTaskByIndex(index)
		this.refs.taskForm.scrollIntoView({ behavior: "smooth" });
	}		

////////////////////////////////////////////////////////////////////////
//////////////////////////////// Render ////////////////////////////////
////////////////////////////////////////////////////////////////////////
	render(){
        if(this.state.job === undefined){
            return <Loading />
        }
        if(this.state.job === null){	
			this.notify(true)
            return (
				<Redirect path="*" to="/jobs" />
			)
        }			
		const {title,city,employer,requirements,tasks} = this.state.job
		return (
			<div className="jumbotron">
	{/* NORMAL INPUTS */}
				<div className="data">
					<label className="labTitle">Job Title: </label>
					<input
						name="title"
						type="text" 
						placeholder="Add title"
						value={title}
						onChange={this.onChange}/>    
					<label className="labTitle">Location: </label>        
					<input
						name="city"
						type="text" 
						placeholder="Add city"
						value={city}
						onChange={this.onChange}/>   
					<label className="labTitle">Employer: </label>
					<input
						name="employer"
						type="text" 
						placeholder="Add employer"
						value={employer}
						onChange={this.onChange}/>   				
				</div>		
	{/* REQUIREMENTS */}					
				<div>					
					<label className="labTitle">Requirements:</label>
					<form ref="reqForm" onSubmit={this.onCreateReq}>					
						<div className="container">
							<div className="data">
								<input
									required
									type="text" 
									placeholder="Add/update requirements"
									ref="requirement"/> 
							</div>
							<div className="buttons">												
								<Button
									text="Add"
									type="success"
									size="xsmall"
								/><br/>												
							</div>																
						</div>								
					</form>		
					{
						(requirements)?
							requirements.map((data,i) => {
								return(
									<div key={i} className="container">
										<div className="datas">
											<p className="datas"> Req {i+1}: {data} </p>
										</div>
										<div className="buttons">										
											<Button
												text="Update with InputText"
												type="yellow"
												size="xsmall"
												onClick={() => this.onUpdateReqByIndex(i)}
											/>													
											<Button
												text="Delete"
												type="danger"
												size="xsmall"
												onClick={() => this.onDeleteReqByIndex(i)}
											/>													
										</div>	
									</div>								
								)
							}):
							null
					}  																						
	{/* TASKS */}										
					<label className="labTitle">Tasks:</label>
					<form ref="taskForm" onSubmit={this.onCreateTask}>											
						<div className="container">
							<div className="data">
								<input
									required								
									type="text" 
									placeholder="Add/update tasks"
									ref="task"/> 
								</div>
							<div className="buttons">												
								<Button
									text="Add"
									type="success"
									size="xsmall"
								/>																						
							</div>	
						</div>															
					</form>		
					{
						(tasks)?
							tasks.map((data,i) => {
								return(
									<div key={i} className="container">
										<div className="datas">
											<p className="datas"> Task {i+1}:  {data} </p>
										</div>
										<div className="buttons">
											<Button
												text="Update with InputText"
												type="yellow"
												size="xsmall"
												onClick={() => this.onUpdateTaskByIndex(i)}
											/>																						
											<Button
												text="Delete"
												type="danger"
												size="xsmall"
												onClick={() => this.onDeleteTaskByIndex(i)}
											/>													
										</div>	
									</div>								
								)
							}):
							null
					}  																															
				</div>				
				<div className="container">
					<Button
						text="Update Job"
						type="success"
						size="large"
						onClick={this.updateJob}
					/>			
				</div>		
			</div>
		)
	}
}

export default JobUpdate;