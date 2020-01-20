import Reflux from 'reflux'
import Firebase from '../../firebase.js'
import JobActions from '../actions/JobActions'

class JobStore extends Reflux.Store{
    constructor(){
        super()
        this.state = {
            allJobs: [],
            job: {}
        }

        this.listenables = JobActions // set action listeners for all actions
    }

    onGetAllJobs(){
        const jobsRef = Firebase.database().ref('/jobs')
        jobsRef.on('value', (snapshot) => {
            const data = snapshot.val()
            this.setState({
                allJobs: data,
                job: this.state.job
            })
        })                 
    }
    onCreateJob(job){
		const jobsRef = Firebase.database().ref('/jobs')	
        jobsRef.push(job)  			 
    }
    onGetJobById(id){
        const jobRef = Firebase.database().ref(`/jobs/${id}`)
        jobRef.on('value', (snapshot) => {
            const data = snapshot.val()            
            this.setState({
                allJobs: this.state.allJobs,
                job: data
            })			
        })         
    }
    onUpdateJobById(id, job){
		const jobsRef = Firebase.database().ref('/jobs')	
		jobsRef.child(id).update(job)
    }
    onDeleteJobById(id){
        const jobRef = Firebase.database().ref(`/jobs/${id}`)
        jobRef.remove()
    }
}

export default JobStore