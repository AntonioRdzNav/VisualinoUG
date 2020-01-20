import React from "react"
import Reflux from "reflux"
import Loading from '../components/Loading'
import '../stylesheets/JobIndex.css'
import {Link} from 'react-router-dom'
import JobStore from '../reflux/stores/JobStore'
import JobActions from '../reflux/actions/JobActions'

class JobIndex extends Reflux.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
        this.store = JobStore
    } 

	componentDidMount(){ 
        // get all jobs
        JobActions.getAllJobs()
        this.setState({
            loading: false				
        })   
    }

    render(){    
        const {loading, allJobs} = this.state

        if(loading === true){
            return <Loading />
        }
        return (          
            <div className="index">
                <Link to={{pathname: '/jobs/create'}}>
                    <button>Create new job!</button>
                </Link>
                {
                    Object.keys(allJobs).map(id => {
                        return (
                            <div key={id}>
                                <hr/>
                                <Link to={{pathname: `/jobs/${id}`}}>
                                    <h4> {allJobs[id].title} </h4>            
                                </Link>
                                <h5> {allJobs[id].city} </h5>
                                <h6> {allJobs[id].employer} </h6>                            
                            </div>
                        )
                    })
                }                   
            </div>            
        )
    }
}

export default JobIndex