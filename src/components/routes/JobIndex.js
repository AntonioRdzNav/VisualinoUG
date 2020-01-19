import React from "react"
import Loading from '../Loading'
import '../stylesheets/JobIndex.css'
import {Link} from 'react-router-dom'

class JobIndex extends React.Component {
    constructor(){
        super()
        this.state = {
            jobs: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/jobs', {
            "method": "GET"
        }).then((response) => response.json())
          .then(data => this.setState({
                jobs: data,
                loading: false
            }))           
    }

    render(){    
        if(this.state.loading === true){
            return <Loading />
        }
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