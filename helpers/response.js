const successResponse  = (req,res,data,message,statusCode)=>{
    return res.status(statusCode).send({
        error:false,
        success:true,
        message:message,
        data
    });
};

const failResponses = (req,res,data,message,statusCode)=>{
    return res.status(statusCode).send({
        error:false,
        success:false,
        message:message,
        data
    })
}

const errorResponses = (req,res,errorDesc,errorKey)=>{
    const statusCode = errorKey ? errorKey:500;
    return res.status(statusCode).send({
        error:true,
        success:false,
        message:errorDesc.message,
        data:null
    })
}

module.exports={
    successResponse,
    failResponses,
    errorResponses
}