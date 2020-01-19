import React from "react"
import Loading from '../Loading'
import jobsData from '../../jobs.json'

localStorage.setItem('jobsData', JSON.stringify(jobsData))

class JobShow extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			job: {},
			loading: true
		}
	}

    componentDidMount(){
        const jobsData = JSON.parse(localStorage.getItem('jobsData'))
        this.setState({
            job: jobsData.filter((currJob) => currJob._id === this.props.match.params.id)[0],
            loading: false
        })   
    }	

	render(){
        if(this.state.loading === true){
            return <Loading />
        }

		const {title, city, employer, requirements, tasks} = this.state.job		
		return (
			<div>
				<h4> {title} </h4>            
				<h5> {city} </h5>
				<h6> {employer} </h6>
				<p> {requirements} </p>
				<p> {tasks} </p>

				<button>Update</button>
				<button>Delete</button>
			</div>
		)
	}
}

export default JobShow;