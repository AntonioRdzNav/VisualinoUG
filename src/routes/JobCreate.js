import React from "react"
import Firebase from '../firebase.js'

class JobCreate extends React.Component{
	constructor(props){
		super(props)

        this.onSubmit = this.onSubmit.bind(this)		
	}
	_isMounted = false   

	componentDidMount(){
		this._isMounted = true
	}

	onSubmit(event){
		event.preventDefault()	
		const jobsRef = Firebase.database().ref('/jobs')	
		const job = {
			title: this.title.value,
			city: this.city.value,
			employer: this.employer.value,
			requirements: [this.requirements.value],
			tasks: [this.tasks.value]
		}
		if(this._isMounted){
			jobsRef.push(job)			
		}	
		this.props.history.push('/jobs')  
	}	    	

	componentWillUnmount(){
        this._isMounted = false
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