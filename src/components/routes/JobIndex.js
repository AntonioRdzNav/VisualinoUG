import React from "react"
import Loading from '../Loading'
import jobsData from '../../jobs.json'
import '../stylesheets/JobIndex.css'
import {Link} from 'react-router-dom'

localStorage.setItem('jobsData', JSON.stringify(jobsData))

class JobIndex extends React.Component {
    constructor(){
        super()
        this.state = {
            jobs: [],
            loading: true
        }
    }

    componentDidMount(){
        const jobsData = JSON.parse(localStorage.getItem('jobsData'))
        this.setState({
            jobs: jobsData,
            loading: false
        })   
    }

    getJobs(){
        return this.state.jobs
    }        

    render(){    
        return (          
            <div className="index">
                {
                    this.state.jobs.map(job => {
                        return (
                            <div key={job._id}>
                                <hr/>
                                <Link to={{
                                    pathname: `/jobs/${job._id}`,
                                    job: job
                                }}>
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