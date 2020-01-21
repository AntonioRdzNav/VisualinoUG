import Reflux from 'reflux'

var JobActions = Reflux.createActions([
    "getAllJobs",
    "createJob",
    "getJobById",
    "updateJobById",
    "deleteJobById",
    "jobChange",
    "clearJob"
])

export default JobActions