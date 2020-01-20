import Reflux from 'reflux'
import Firebase from '../../firebase.js'
import JobActions from '../actions/JobActions'
import ReqActions from '../actions/ReqActions'
import TaskActions from '../actions/TaskActions'

class JobStore extends Reflux.Store{
    constructor(){
        super()
        this.state = {
            allJobs: [],
            job: {},
			requirements: [],
			tasks: []            
        }

        this.listenables = [    // set action listeners for all actions
            JobActions, 
            ReqActions,
            TaskActions
        ] 
    }

    onGetAllReqs(){

    }
    onCreateReq(req){
        const {allJobs, job, requirements, tasks} = this.state
        var reqs = requirements
        reqs.push(req)
        this.setState({
            allJobs: allJobs,
            job: job,
			requirements: reqs,
			tasks: tasks
        })
    }
    onUpdateReqbyKey(key){

    }
    onDeleteReqbyKey(key){

    }

    onGetAllTasks(){
        
    }
    onCreateTask(){

    }
    onUpdateTaskbyKey(key){

    }
    onDeleteTaskbyKey(key){

    }

    onGetAllJobs(){
        const {allJobs, job, requirements, tasks} = this.state
        const jobsRef = Firebase.database().ref('/jobs')
        jobsRef.on('value', (snapshot) => {
            const data = snapshot.val()
            this.setState({
            allJobs: allJobs,              
                allJobs: data,
                job: job,
                requirements: requirements,
                tasks: tasks                  
            })
        })                 
    }
    onCreateJob(job){
		const jobsRef = Firebase.database().ref('/jobs')	
        jobsRef.push(job)  			 
    }
    onGetJobById(id){
        const {allJobs, job, requirements, tasks} = this.state
        const jobRef = Firebase.database().ref(`/jobs/${id}`)
        jobRef.on('value', (snapshot) => {
            const data = snapshot.val()        
            console.log(data)    
            this.setState({
                allJobs: this.state.allJobs,
                job: data,
                requirements: requirements,
                tasks: tasks                   
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