const express = require('express')

const TaskCtrl = require('../controllers/task-ctrl')

const router = express.Router()

router.post('/task', TaskCtrl.createTask)
router.delete('/task/:id', TaskCtrl.deleteTask)
router.get('/tasks', TaskCtrl.getTasks)
router.get('/tasks/:child', TaskCtrl.getChildTasks)  // child view tasks assigned to them
router.get('/task/:id', TaskCtrl.getTaskById)
router.put('/task/:id/:action', TaskCtrl.updateTaskStatus) // action is "accept" or "decline"

module.exports = router