import React from "react"
import Reflux from "reflux"
import Modal from "../components/Modal"
import Loading from '../components/Loading'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'
import '../stylesheets/JobShow.css'

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
		console.log(this)
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
						<label className="labTitle">Requirements:</label>
						<ul className="tab">
							{
								(requirements)?
									requirements.map((req, i) => {
										return(
											<li className="list" key={i}>
												{req}
											</li>	
										)
									}):
									<li></li>
							}
						</ul>
						<label className="labTitle">Tasks:</label>
						<ul className="tab">
							{
								(tasks)?
									tasks.map((task, i) => {
										return(
											<li className="list" key={i}>
												{task}
											</li>	
										)
									}):
									<li></li>
							}
						</ul>
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