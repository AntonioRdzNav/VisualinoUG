import React from "react"
import Axios from "axios"
import Loading from '../Loading'

class JobUpdate extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			job: {},
			loading: true
		}

        this.onUpdate = this.onUpdate.bind(this)		
	}

    componentDidMount(){
		// get only job with corresponding id
        Axios.get('http://localhost:8080/jobs/', {params: {id: this.props.match.params.id}})
		  	.then(response => {
				this.setState({
					job: response.data[0],
					loading: false
            	})			  
		  	})	
			.catch(error => {
				console.log(error);
			});			  	
    }		

	onUpdate(event){	
		event.preventDefault()	
        Axios.put('http://localhost:8080/jobs/'+String(this.props.match.params.id), {
				id: this.props.match.params.id,
				title: this.title.value,
				city: this.city.value,
				employer: this.employer.value,
				requirements: this.requirements.value,
				tasks: this.tasks.value
			})
			.then(resp => {
				console.log(resp.data)
			}).then(() => {
				this.props.history.push('/jobs/'+String(this.props.match.params.id))
			}).catch(error => {
				console.log(error)
			}); 
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