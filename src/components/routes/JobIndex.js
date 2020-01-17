import React from "react"
import jobsData from '../../jobs.json'
import '../stylesheets/JobIndex.css'
import {Link} from 'react-router-dom'

localStorage.setItem('jobsData', JSON.stringify(jobsData))

class JobIndex extends React.Component {
    constructor(){
        super()
        this.state = {
            jobs: []
        }
    }

    getProducts(){
        const jobs = JSON.parse(localStorage.getItem('jobsData'))
        this.setState({jobs: jobs})        
    }    

    componentWillMount(){
        this.getProducts()
    }

    render(){    
        return (          
            <div className="index">
                {
                    this.state.jobs.map(job => {
                        return (
                            <div key={job._id}>
                                <hr/>
                                <Link to={`/jobs/${job._id}`}>
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