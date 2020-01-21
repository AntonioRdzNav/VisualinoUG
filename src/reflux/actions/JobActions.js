import Reflux from 'reflux'

var JobActions = Reflux.createActions([
    "getAllJobs",
    "createJob",
    "getJobById",
    "updateJobById",
    "deleteJobById",
    "jobChange",
    "clearJob",
    "undefineJob"
])

export default JobActions