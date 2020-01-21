import Reflux from 'reflux'
import Firebase from '../../firebase.js'
import JobActions from '../actions/JobActions'
import ReqActions from '../actions/ReqActions'
import TaskActions from '../actions/TaskActions'

class JobStore extends Reflux.Store{
    constructor(){
        super()
        this.state = {
            allJobs: undefined, //[]
            job: undefined, // {}
            clear: undefined
        }

        this.listenables = [ // set action listeners for all actions
            JobActions,
            ReqActions,
            TaskActions
        ]
    }
    
////////////////////////////////////////////////////////////////////////
///////////////////////////// JobActions ///////////////////////////////
////////////////////////////////////////////////////////////////////////
    onGetAllJobs(){
        const jobsRef = Firebase.database().ref('/jobs')
        jobsRef.on('value', (snapshot) => {
            const data = snapshot.val()
            this.setState({   
                ...this.state.job,                          
                allJobs: data,
                clear: false    
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
                ...this.state.job,
                job: data,
                clear: false              
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
    onJobChange(name, newValue){
        this.setState({
            ...this.state,
            job: {
                ...this.state.job,
                [name]: newValue,
                clear: false
            }
        })
    }
    onClearJob(){
        const newJob = {
            title: "",
            city: "",
            employer: "",
            requirements: [],
            tasks: []                    
        }        
        this.setState({
            ...this.state,
            job: newJob,
            clear: true
        })      
    }
////////////////////////////////////////////////////////////////////////
///////////////////////////// ReqActions ///////////////////////////////
////////////////////////////////////////////////////////////////////////    
	onCreateReq(req){
		const {requirements} = this.state.job
		const newRew = (requirements)? requirements.concat(req): [req]
		this.onJobChange("requirements", newRew)
	}
	onUpdateReqByIndex(index, req){
        if(req !== ""){
            const {requirements} = this.state.job
            var reqs = requirements
            reqs[index] = req
            this.onJobChange("requirements", reqs)
        }
	}
	onDeleteReqByIndex(index){	
		const {requirements} = this.state.job
		var reqs = requirements
		reqs.splice(index,1)
		this.onJobChange("requirements", reqs)	
	}	
////////////////////////////////////////////////////////////////////////
///////////////////////////// TaskActions ///////////////////////////////
////////////////////////////////////////////////////////////////////////
	onCreateTask(task){
		const {tasks} = this.state.job
		const newTask = (tasks)? tasks.concat(task): [task] 
		this.onJobChange("tasks", newTask)	
	}
	onUpdateTaskByIndex(index, task){	
        if(task !== ""){
            const {tasks} = this.state.job
            var tasksVar = tasks
            tasksVar[index] = task
            this.onJobChange("tasks", tasksVar)
        }
	}
	onDeleteTaskByIndex(index){	
		const {tasks} = this.state.job
		var tasksVar = tasks
		tasksVar.splice(index,1)
		this.onJobChange("tasks", tasksVar)
	}	    
}

export default JobStore