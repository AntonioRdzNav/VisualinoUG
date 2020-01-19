import React from "react"
import Loading from '../components/Loading'
import Firebase from '../firebase.js'

class JobUpdate extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			job: {},
			loading: true
		}

        this.onUpdate = this.onUpdate.bind(this)		
	}
	_isMounted = false   

    componentDidMount(){
        this._isMounted = true
        // get job by id 
		const {id} = this.props.match.params
        const ref = Firebase.database().ref(`/jobs/${id}`)
        ref.on('value', (snapshot) => {
            const state = snapshot.val()
            if(this._isMounted){
				this.setState({
					job: state,
					loading: false
            	})
			}
        }) 		  	
    }	

	componentWillUnmount(){
        this._isMounted = false
    }	

	onUpdate(event){	
		const {id} = this.props.match.params
		event.preventDefault()	
		const jobsRef = Firebase.database().ref('/jobs')	
		const job = {
			title: this.title.value,
			city: this.city.value,
			employer: this.employer.value,
			requirements: [this.requirements.value],
			tasks: [this.tasks.value]
		}
		jobsRef.child(id).update(job).catch(error => {
			console.log(error)
		})
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