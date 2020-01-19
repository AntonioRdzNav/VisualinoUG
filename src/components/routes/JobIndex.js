import React from "react"
import Loading from '../Loading'
import '../stylesheets/JobIndex.css'
import {Link} from 'react-router-dom'
import Firebase from '../../firebase.js'

class JobIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: [],
            loading: true
        }
    }
    _isMounted = false    

    componentDidMount(){
        this._isMounted = true
        // get all jobs 
        const jobsRef = Firebase.database().ref('/jobs')
        jobsRef.on('value', (snapshot) => {
            const state = snapshot.val()
            if(this._isMounted){
                this.setState({
                    jobs: state,
                    loading: false
                })
            }
        })          
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    render(){    
        const {loading, jobs} = this.state

        if(loading === true){
            return <Loading />
        }
        return (          
            <div className="index">
                <Link to={{pathname: '/jobs/create'}}>
                    <button>Create new job!</button>
                </Link>
                {
                    Object.keys(jobs).map(id => {
                        return (
                            <div key={id}>
                                <hr/>
                                <Link to={{pathname: `/jobs/${id}`}}>
                                    <h4> {jobs[id].title} </h4>            
                                </Link>
                                <h5> {jobs[id].city} </h5>
                                <h6> {jobs[id].employer} </h6>                            
                            </div>
                        )
                    })
                }                   
            </div>            
        )
    }
}

export default JobIndex