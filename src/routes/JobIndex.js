import React from "react"
import Reflux from "reflux"
import Loading from '../components/Loading'
import Button from '../components/Button'
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
                <div>
                    <h1>Discover Jobs</h1>
                    <Link to={{pathname: '/jobs/create'}} 
                          style={{textDecoration:'inherit',color:'inherit'}}>
                        <Button 
                            text="Create new job!"
                            type="success"
                            size="large"
                        />
                    </Link>                    
                    <hr/>                    
			    </div>
            <table id="jobsTable">
				<thead>	 
					<tr>
						<th>Job Title</th>
						<th>Location</th>
						<th>Employer</th>
					</tr>
				</thead>
				<tbody>
                    {
                        Object.keys(allJobs).map(id => {
                            return (
                                <tr key={id}>
                                    <td> 
                                        <Link to={{pathname: `/jobs/${id}`}} 
                                              style={{textDecoration:'inherit',color:'inherit'}}>
                                            {allJobs[id].title} 
                                        </Link>                       
                                    </td>                                           
                                    <td> {allJobs[id].city} </td>
                                    <td> {allJobs[id].employer} </td>                            
                                </tr>
                            )
                        })
                    }                       
				</tbody>
			</table>                                
            </div>            
        )
    }
}

export default JobIndex