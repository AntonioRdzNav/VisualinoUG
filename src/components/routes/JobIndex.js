import React from "react"
import Axios from "axios"
import Loading from '../Loading'
import '../stylesheets/JobIndex.css'
import {Link} from 'react-router-dom'

class JobIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: [],
            loading: true
        }
    }

    componentDidMount(){
        // get all jobs 
        Axios.get('http://localhost:8080/jobs')
            .then(response => {
				this.setState({
					jobs: response.data,
					loading: false,
					openModal: false
            	})			  
		    })         
    }

    render(){    
        if(this.state.loading === true){
            return <Loading />
        }
        return (          
            <div className="index">
                <Link to={{pathname: '/jobs/create'}}>
                    <button>Create new job!</button>
                </Link>
                {
                    this.state.jobs.map(job => {
                        return (
                            <div key={job.id}>
                                <hr/>
                                <Link to={{pathname: `/jobs/${job.id}`}}>
                                    <h4> {job.title} </h4>            
                                </Link>
                                <h5> {job.city} </h5>
                                <h6> {job.employer} </h6>                            
                            </div>
                        )
                    })
                }                   
            </div>            
        )
    }
}

export default JobIndex