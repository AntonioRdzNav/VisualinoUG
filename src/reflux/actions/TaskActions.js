import Reflux from 'reflux'

var TaskActions = Reflux.createActions([
    "createTask",
    "updateTaskByIndex",
    "deleteTaskByIndex"
])

export default TaskActions