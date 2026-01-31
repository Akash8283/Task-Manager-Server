const express = require('express')
const taskController = require('../controllers/taskController')

const routes = new express.Router()

// add task
routes.post('/tasks',taskController.addTaskContoller)

// get all tasks
routes.get('/tasks',taskController.getAllTaskController)

// view task
routes.get('/tasks/view/:id',taskController.viewTaskContoller)

// edit task
routes.put('/tasks/:id',taskController.editTaskContoller)

// delete task
routes.delete('/tasks/:id',taskController.deleteTaskContoller)

module.exports = routes

