import React from "react"
import JobItem from '../JobItem.js'
import jobsData from '../../jobs.json'
import '../stylesheets/JobIndex.css'

class JobIndex extends React.Component {
    constructor(){
        super()
        this.state = {
            jobs: jobsData
        }
    }

    render(){
        const jobComponents = this.state.jobs.map(currentJob => {
            return ( <JobItem key={currentJob._id} job={currentJob}/> )
        })   
                 
        return (
            <div className="index">
                {jobComponents}
            </div>            
        )
    }
}

export default JobIndex