import Reflux from 'reflux'

var JobActions = Reflux.createActions([
    "getAllJobs",
    "createJob",
    "getJobById",
    "updateJobById",
    "deleteJobById"
])

export default JobActions