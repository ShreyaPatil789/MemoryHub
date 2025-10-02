import express from "express"
import type {Request,Response,NextFunction}from "express"
import models from '../models/db.js'
import jwt from "jsonwebtoken"

const { Usermodel, Tagsmodel, Linkmodel, Contentmodel } = models;
const JWT_SECRET=process.env.JWT_PASSWORD as string



export function auth(req:Request,res:Response,next:NextFunction){
       console.log("entered auth ");
    const token = req.headers["token"] as string
       const decoded=jwt.verify(token,JWT_SECRET)

       
       if(!decoded){
        res.status(500).json({
            message:"user is not signed in "
        })
       

       }else{
         req.decoded=decoded
         console.log("ended auth")
        next()
       }

}