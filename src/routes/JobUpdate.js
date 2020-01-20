import React from "react"
import Reflux from "reflux"
import Loading from '../components/Loading'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'

class JobUpdate extends Reflux.Component{
	constructor(props){
		super(props)
		this.state = {
			loading: true
		}
		this.store = JobStore	
		this.onUpdate = this.onUpdate.bind(this)
	}

    componentDidMount(){
		const {id} = this.props.match.params		
        // get job by id 	
		JobActions.getJobById(id)
		this.setState({
			loading: false
		})	
    }	

	onUpdate(event){	
		event.preventDefault()
		const {id} = this.props.match.params	
		const job = {
			title: this.title.value,
			city: this.city.value,
			employer: this.employer.value,
			requirements: [this.requirements.value],
			tasks: [this.tasks.value]
		}
		// update job by id
		JobActions.updateJobById(id, job)
		this.props.history.push('/jobs')  
	}

	render(){
        if(this.state.loading === true){
            return <Loading />
        }

		return (
			<div>
				<form onSubmit={this.onUpdate}>
					<input 
						placeholder="Add title"
						ref={title => this.title=title}
						defaultValue={this.state.job.title}
					/>
					<input 
						placeholder="Add city"
						ref={city => this.city=city}
						defaultValue={this.state.job.city}
					/>
					<input 
						placeholder="Add employer"
						ref={employer => this.employer=employer}
						defaultValue={this.state.job.employer}
					/>
					<textarea 
						placeholder="Add requirements"
						ref={requirements => this.requirements=requirements}
						defaultValue={this.state.job.requirements}
					/>
					<textarea 
						placeholder="Add tasks"
						ref={tasks => this.tasks=tasks}
						defaultValue={this.state.job.tasks}
					/>
					<button>Update</button>
				</form>
			</div>
		)
	}
}

export default JobUpdate;