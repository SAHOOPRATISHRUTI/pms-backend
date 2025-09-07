const userService = require("../services/userService")
const Responses = require("../helpers/response")
const createUser = async(req,res)=>{
    try{
        const result = await userService.createUser(req.body);

        if(result.isDuplicate){
            return Responses
        }

    }catch(error){

    }
}