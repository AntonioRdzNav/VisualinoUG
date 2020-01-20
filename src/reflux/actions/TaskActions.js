import Reflux from 'reflux'

var TaskActions = Reflux.createActions([
    "getAllTasks",
    "createTask",
    "updateTaskByKey",
    "deleteTaskbyKey"
])

export default TaskActions