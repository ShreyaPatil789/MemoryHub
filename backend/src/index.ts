import express from "express"
const app=express()

import router from "./routes/userRoutes.js"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./utility/dbconnection.js"

dotenv.config()
const PORT=process.env.PORT as string

// import the default object
import models from './models/db.js'

const { Usermodel, Tagsmodel, Linkmodel, Contentmodel } = models;
app.use(express.json())
app.use(cors())


app.use("/api", router)



connectDB()

















app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})