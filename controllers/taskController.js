const tasks = require('../models/taskModel')

// add task
exports.addTaskContoller = async(req,res)=>{
    console.log("inside addTaskContoller");
    
    const {title,description,status} = req.body
    try{
       const existingTask = await tasks.findOne({title})
       if (existingTask) {
         res.status(409).json("Task already exists")
       }
       else{
        const newTask = await tasks.create({
            title,description,status
        })
        res.status(200).json(newTask)
       }
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

// get all tasks
exports.getAllTaskController = async(req,res)=>{
    console.log("inside getAllTaskController");
    try{
      const allTasks = await tasks.find()
      res.status(200).json(allTasks)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

// view task
exports.viewTaskContoller = async(req,res)=>{
    console.log("inside viewTaskContoller");
    const {id} = req.params
    try{
       const viewTask = await tasks.findOne({_id:id})
       res.status(200).json(viewTask)
       
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

// edit task
exports.editTaskContoller = async(req,res)=>{
    console.log("inside editTaskContoller");
    const {id} = req.params
    const {title,description,status} = req.body
    try{
       const existingTask = await tasks.findById({_id:id})
       if (existingTask.title == title && existingTask.description == description && existingTask.status == status) {
        res.status(409).json("Values not changed")
       }
       else{
            const editTask = await tasks.findByIdAndUpdate({_id:id},{
            title,description,status
        },{new:true})
            res.status(200).json(editTask)
       }
       
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}

// delete task
exports.deleteTaskContoller = async(req,res)=>{
    console.log("inside deleteTaskContoller");
    const {id} = req.params
    try{
       const deleteTask = await tasks.findByIdAndDelete({_id:id})
       res.status(200).json(deleteTask)
       
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
