import express from "express"
const app=express()

import router from "./routes/userRoutes.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"


dotenv.config()
const PORT=process.env.PORT as string
const MONGO_URL=process.env.MONGOOSE_URL as string

// import the default object
import models from './models/db.js'

const { Usermodel, Tagsmodel, Linkmodel, Contentmodel } = models;
app.use(express.json())
app.use(cors())


app.use("/api", router)


async function connectDB(){
 const isconnect=  await mongoose.connect(MONGO_URL)
 if(isconnect){
    console.log("db connected");
 }  else{
    console.log("db not connected");
 }
}
connectDB()

















app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})