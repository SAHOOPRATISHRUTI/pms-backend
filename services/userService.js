const User = require("../models/User")
const Organization = require("../models/Organization")
const bcrypt = require("bcrypt")

const createUser = async(data)=>{
   const existingUser = await User.findOne({email:data.email});
   if(existingUser){
    return {isDuplicate:true};
   }
   if(data.organizationId){
    const org = Organization.findById(data.organizationId);
    if(!org){return {orgNotFound:true}}
   }
   const hashedPassword = await bcrypt.hash(data.password,10);
   const newUser = new User({
    name:data.name,
    email:data.email,
    password:data.password,
    role:data.role,
    organizationId:data.organizationId
   })
   await newUser.save();
   return {data:newUser};
}

module.exports={
    createUser
}