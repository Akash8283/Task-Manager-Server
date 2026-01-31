const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:["pending","in_progress","completed"],
        default:"pending"
    },
})

const tasks = mongoose.model("tasks",taskSchema)
module.exports = tasks