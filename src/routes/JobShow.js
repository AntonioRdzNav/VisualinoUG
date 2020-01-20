import React from "react"
import Reflux from "reflux"
import Modal from "../components/Modal"
import Loading from '../components/Loading'
import {Link} from 'react-router-dom'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'

class JobShow extends Reflux.Component{
	constructor(props){
		super(props)
		this.state = {
			loading: true,
			openModal: false
		}
		this.store = JobStore
		this.toggleModal = this.toggleModal.bind(this)
		this.onDelete = this.onDelete.bind(this)
	}

    componentDidMount(){
		const {id} = this.props.match.params
       	// get job by id
		JobActions.getJobById(id)
        this.setState({
			loading: false,
			openModal: false				
        })   		   
    }	

	toggleModal() {
		this.setState({
			loading: this.state.loading,			
			openModal: !this.state.openModal
		})
	}	
	onDelete(id){
		// delete job by id	
		JobActions.deleteJobById(id)
		this.props.history.push('/jobs')  	
	}

	render(){
        if(this.state.loading === true){
            return <Loading />
        }

		const {title, city, employer, requirements, tasks} = this.state.job		
		const {id} = this.props.match.params	
		return (
			<div>
				<h4> {title} </h4>            
				<h5> {city} </h5>
				<h6> {employer} </h6>
				<p> {requirements} </p>
				<p> {tasks} </p>

                <Link to={{pathname: "/jobs/"+id+"/update"}}>
                    <button>Update</button>
                </Link>
				<button onClick={this.toggleModal}>Delete</button>
				<Modal 
					show={this.state.openModal}
					onClose={this.toggleModal}
					onYes={this.onDelete}
					id={id}
				>
					Are you sure you want to delete?
				</Modal>				
			</div>
		)
	}
}

export default JobShow;