import React from "react"
import Modal from "../Modal"
import Loading from '../Loading'
import {Link} from 'react-router-dom'
import Firebase from '../../firebase.js'

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
	_isMounted = false   

    componentDidMount(){
        this._isMounted = true
        // get job by id 
		const {id} = this.props.match.params
        const jobRef = Firebase.database().ref(`/jobs/${id}`)
        jobRef.on('value', (snapshot) => {
            const state = snapshot.val()
            if(this._isMounted){
				this.setState({
					job: state,
					loading: false,
					openModal: false
            	})
			}
        })         		
    }	

	componentWillUnmount(){
        this._isMounted = false
    }

	toggleModal() {
		this.setState({
			openModal: !this.state.openModal
		})
	}	

	onDelete(id){
		// delete job by id
        const jobRef = Firebase.database().ref(`/jobs/${id}`)
        jobRef.remove()  	
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