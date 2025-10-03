import mongoose from "mongoose";

const MONGO_URL=process.env.MONGOOSE_URL as string  
export async function connectDB(){
 const isconnect=  await mongoose.connect(MONGO_URL)
 if(isconnect){
    console.log("db connected");
 }  else{
    console.log("db not connected");
 }
}