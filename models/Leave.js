const mongoose = require("mongoose")

const leaveSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true
    },
    reason:String,
    status:{
        type:String,
        enum:["Pending","Approved","Rejected"],
        default:"Pending"
    }
},{timestamps:true})

module.exports = mongoose.model("Leave",leaveSchema)