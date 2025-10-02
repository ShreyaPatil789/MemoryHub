import express from "express"
import type {Request,Response,NextFunction}from "express"
const router=express.Router()
import {z} from "zod"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import models from '../models/db.js'

const { Usermodel, Tagsmodel, Linkmodel, Contentmodel } = models;

import {auth} from "../middlewares/auth.js"
import {randomstr} from "../utility/randomString.js"
const JWT_SECRET=process.env.JWT_PASSWORD as string


router.post("/signup",async (req:Request ,res:Response)=>{
    const rbody=z.object({
        username:z.string().min(4).max(8),
        password:z.string().min(4).max(10)
    })
    const username=req.body.username
    const pass=req.body.password
    const password=await bcrypt.hash(pass,4)
    const parseData=rbody.safeParse(req.body)
    

    if(parseData.success){

        const finduser=await Usermodel.findOne({username:username, password:password})
        if(finduser){
            res.status(411).json({
            message:"user already exist"
        })

        }else{
                 const user=await Usermodel.insertOne( {username:username, password:password})
        if(user){
            res.status(200).json({
            message:"user signed up successfully"
        })
        }else{
            res.status(500).json({
            message:"user registration failed"
        })
        }

        }

       
    }else{
        res.status(403).json({
            message:parseData.error
        })
    }
})

router.post("/signin",async (req,res)=>{
    const rbody=z.object({
        username:z.string().min(4).max(8),
        password:z.string().min(4).max(10)
    })
    const username=req.body.username
    const password=req.body.password

        console.log(username,password);

    const parseData=rbody.safeParse(req.body)
        
    console.log(username,password);
    if(parseData.success){

        const user=await Usermodel.findOne( {username:username})
        if(!user){
            res.status(500).json({
            message:"user does not exist"
        })
            return;
        }
        const valid=await bcrypt.compare(password,user.password)
        if(valid){
                if(user){
          const token=jwt.sign({username:user.username,id:user._id},JWT_SECRET)
            res.status(200).json({
            message:"user signedin successfully",
            token:token
        })
        }else{
            res.status(500).json({
            message:"user sign in failed failed"
        })
        }
        }else{
            res.status(500).json({
            message:"wrong password"
        })

        }
       

    }else{
        res.status(403).json({
            message:parseData.error
        })
    }
})


router.post("/addcontent",auth,async (req,res)=>{

    try{

 const type=req.body.type
 const link=req.body.link
 const title=req.body.title
 /*const tags=req.body.tags*/
 const tags="demo"

 const userid=(req.decoded as any).id


    console.log(link ,title ,tags);
    
let tagexist=await Tagsmodel.findOne({title:tags})

if(!tagexist){
     tagexist=await Tagsmodel.create({title:tags})
}
    
const tagid=tagexist._id
      console.log(type,link,title,userid);
 const content=await Contentmodel.create({
    type:type,
    link:link,
    title:title,
    userId:userid,
   
 })
     console.log("content added error 2");
 await Contentmodel.updateOne(
  { _id: content._id },
  { $addToSet: { tags: tagid } }
);
     console.log("content added error 3");
 if(content){
     console.log("content added");
    res.status(200).json({
            message:"content added"
        })
        
 }else{
     console.log("content added error");
        res.status(500).json({
            message:"error while adding the contents"
        })
        
 }


    }catch(e:any){
             console.log("content added catch error");

            res.status(500).json({
            message:e.message
        })
    }

})


router.get("/alldoc",auth,async (req,res)=>{
    try{
        const content=await Contentmodel.find({userId:(req.decoded as any).id})
        if(content.length>0){
             res.status(200).json({
            content:content
        })

        }else{
            if(content.length=0){
                res.status(200).json({
            content:"no content added yet"
        })

            }else{
                  res.status(200).json({
            message:"error while fetching content"
        })
            }

        }

    }catch(e:any){
         res.status(500).json({
        message:e.message
        })

    }
})

router.delete("/deletecontent/:id",auth,async(req,res)=>{
    const userid=(req.decoded as any).id
    const contentid=req.params.id

    const content=await Contentmodel.findOne({_id:contentid})
   if(!content){
    res.status(500).json({
        message:"content does not exist"    
    })
    return;
   }
    if(content.userId==userid){
        const deleted=await Contentmodel.deleteOne({_id:contentid})
        if(deleted){
                 res.status(200).json({
            message:"content deleted successfully"
        })
        }else{
            res.status(500).json({
            message:"error while deleting document"
        })
        }


    }else{
        res.status(500).json({
            message:"you are not elegible to delete this post",
            userid:userid,
            content:content,
            contentuser:content.userId
        })
    }
})

router.post("/share",auth, async(req,res)=>{
      const share=req.body.share;
      if(share){
           const hash=randomstr(10)
           const link=await Linkmodel.create({
            hash:hash,
            userId:(req.decoded as any).id,
           })

           if(link){
            res.status(200).json({
            message:"link generated"
            
           })
           }else{
            res.status(500).json({
            message:"error while generating the link" 
           })
         }}
         else{
           const link=await Linkmodel.deleteOne({
            
            userId:(req.decoded as any).id,
           })
            
           if(!link){
            res.status(500).json({
            message:"error while removing the link"
           })
           }else{
           res.status(200).json({
            message:"link removed"
           })
        }
      }
})

router.get("/shared/:link",async(req,res)=>{
    const link=req.params.link
    const linkexist=await Linkmodel.findOne({hash:link})
   
    if(linkexist){
       let content=await Contentmodel.find({userId:linkexist.userId})
       if(content){
        res.status(200).json({
            content:content
        }

        )
       }else{
        res.status(500).json({  
            message:"error while fetching the content"
        })
       }
    }else{
        res.status(500).json({
            message:"link does not exist"
        })
    }
})




export default router;