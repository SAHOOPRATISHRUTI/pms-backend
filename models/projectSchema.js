const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    managerId:{
        type:mongoose.Schema.Types.ObjectId,
    }
})