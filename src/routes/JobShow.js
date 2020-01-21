import React from "react"
import Reflux from "reflux"
import Modal from "../components/Modal"
import Loading from '../components/Loading'
import Button from '../components/Button'
import Reqs from '../components/Reqs'
import Tasks from '../components/Tasks'
import {Link, Redirect} from 'react-router-dom'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'
import {toast} from 'react-toastify'
import '../stylesheets/JobShow.css'

class JobShow extends Reflux.Component{
	constructor(props){
		super(props)
		this.state = {
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
    }	
	componentWillUnmount(){
		JobActions.undefineJob()		
	}

	toggleModal() {
		this.setState({			
			openModal: !this.state.openModal
		})
	}	
	onDelete(id){
		// delete job by id	
		JobActions.deleteJobById(id)
		this.props.history.push('/jobs')  	
		this.notify(false)
	}
	
	notify(error){
		(error)?
			toast.error('That Job does not exist', {
				position: "top-right",
				hideProgressBar: false,
				closeOnClick: true
			}):
			toast.success('That Job was Deleted!', {
				position: "top-right",
				hideProgressBar: false,
				closeOnClick: true
			})
	}	

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
		const {title, city, employer, requirements, tasks} = this.state.job		
		const {id} = this.props.match.params	
		return (
			<div>
				<div className="jumbotron">
					<div className="container">
						<div className="title">
							<label className="labTitle">Job Title:</label>
							<h4 className="hTitle"> {title} </h4><br/>    
							<label className="labTitle">Location:</label>        
							<h4 className="hTitle"> {city} </h4><br/>   
							<label className="labTitle">Employer:</label>
							<h4 className="hTitle"> {employer} </h4><br/>   
						</div>
						<div className="buttons">
							<Link to={{pathname: "/jobs/"+id+"/update"}}
								style={{textDecoration:'inherit',color:'inherit'}}>
								<Button 
									text="Update"
									type="yellow"
									size="small"
								/>
							</Link>
							<Button
								text="Delete"
								type="danger"
								size="small"
								onClick={this.toggleModal}
							/>													
						</div>
					</div>
					<div>
						<Reqs requirements={requirements}/>
						<Tasks tasks={tasks}/>					
					</div>						
				</div>
				<Modal 
					show={this.state.openModal}
					onClose={this.toggleModal}
					onYes={this.onDelete}
					id={id}>
					Are you sure you want to delete?
				</Modal>
			</div>					
		)
	}
}

export default JobShow;