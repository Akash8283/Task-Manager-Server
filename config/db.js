const mongoose = require('mongoose')

const connectionstring = process.env.ATLASBDCOLLECTION

mongoose.connect(connectionstring).then(res=>{
    console.log("MongoDB connection succesfull");
}).catch(err=>{
    console.log(err);
    console.log("MongoDB connection error");
})