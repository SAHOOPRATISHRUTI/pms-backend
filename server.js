const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config();
connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
    
})