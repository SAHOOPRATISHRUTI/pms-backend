const mongoose = require("mongoose")
const { validate } = require("./Organization")
const Organization = require("./Organization")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["admin","manager","employee"],
        default:"employee"
    },
    organizationid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization"
    },
    isOnLeave:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
module.exports = mongoose.model("User",userSchema)