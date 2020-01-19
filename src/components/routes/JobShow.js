import React from "react"
import Axios from "axios"
import Modal from "../Modal"
import Loading from '../Loading'

class JobShow extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			job: {},
			loading: true,
			openModal: false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.onDelete = this.onDelete.bind(this)
	}

    componentDidMount(){
		// get only job with corresponding id
        Axios.get('http://localhost:8080/jobs/', {params: {id: this.props.match.params.id}})
		  	.then(response => {
				this.setState({
					job: response.data[0],
					loading: false,
					openModal: false
            	})			  
		  	})	
			.catch(error => {
				console.log(error);
			});			  	
    }	

	toggleModal() {
		this.setState({
			openModal: !this.state.openModal
		})
	}	

	onDelete(id){
        Axios.delete('http://localhost:8080/jobs/'+String(id))
			.then(resp => {
				console.log(resp.data)
			})
			.then(() => {
				this.props.history.push('/jobs')
			})  			
			.catch(error => {
				console.log(error);
			}) 
	}

	render(){
        if(this.state.loading === true){
            return <Loading />
        }

		const {id, title, city, employer, requirements, tasks} = this.state.job		
		return (
			<div>
				<h4> {title} </h4>            
				<h5> {city} </h5>
				<h6> {employer} </h6>
				<p> {requirements} </p>
				<p> {tasks} </p>

				<button>Update</button>
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