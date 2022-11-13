const Task = require('../models/task-model')
  const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const apikey = process.env['SENDGRID_API_KEY']
const template_id_completed = process.env['template_id_completed']

createTask = (req, res) => {
    const body = req.body
    console.log("Create request accept");
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a task',
        })
    }

    if (!("status" in body)) {
        body["status"] = "assigned"
    }

    const task = new Task(body)

    if (!task) {
        return res.status(400).json({ success: false, error: err })
    }

    task
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: task._id,
                message: 'Task created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Task not created!',
            })
        })
}

deleteTask = async (req, res) => {
    await Task.findOneAndDelete({ _id: req.params.id }, (err, task) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!task) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }

        return res.status(200).json({ success: true, data: task })
    }).catch(err => console.log(err))
}

getTasks = async (req, res) => {
    await Task.find({}, (err, tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tasks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        return res.status(200).json({ success: true, data: tasks })
    }).catch(err => console.log(err))
}

getChildTasks = async (req, res) => {
    console.log("started")
    await Task.find({ child: req.params.child }, (err, tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tasks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        console.log("started")
        return res.status(200).json({ success: true, data: tasks })
    }).clone().catch(err => console.log(err))
}

getChildCompletedTasks = async (req, res) => {
    await Task.find({ child: req.params.child, status: "completed" }, (err, tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tasks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        return res.status(200).json({ success: true, data: tasks })
    }).catch(err => console.log(err))
}

getTaskById = async (req, res) => {
    await Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!task) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        return res.status(200).json({ success: true, data: task })
    }).catch(err => console.log(err))
}


updateTaskStatus = async (req, res) => {
  
  
    const body = req.body
    console.log("update body");
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
  
    var AssignchildTask = ""
    Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Task not found!',
            })
        }

        if (req.params.action == "accept") {
            task.status = "accepted"
            AssignchildTask = task.child;
            
        }
        else if (req.params.action == "decline") {
            task.status = "declined"
        }
        else if (req.params.action == "complete") {
            task.status = "completed"
          sgMail.setApiKey(apikey)
           const msg = {
                  from: "admin@trackyourchild.co",
                  template_id: template_id_completed,
                  personalizations: [{
                      to: { email: "vasutemporarylc@gmail.com" },
                      dynamic_template_data: {
                          child_name: "joy",
                          child_task: task.name,
                      },
                  }],
                  
                };
            sgMail
              .send(msg)
              .then(() => {
                console.log('Email sent')
              })
              .catch((error) => {
                console.error(error)
              })
        }
        
        task
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: task._id,
                    message: 'Task updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Task not updated!',
                })
            })
    })
}


module.exports = {
    createTask,
    deleteTask,
    getTasks,
    getChildTasks,
    getTaskById,
    updateTaskStatus
}