import type { ReactElement } from "react"
import { ShareIcon ,DeleteIcon,TwitterIcon,YtIcon } from "./icons/plusIcon";  
import { Tweet } from "react-tweet"; 


interface cardprops{
icon:ReactElement;
title:string;
link?:string;
type?:any
}


export const Card=(props:cardprops)=>{
const embedLink = props.link?.includes("watch?v=")
  ? props.link.replace("watch?v=", "embed/")
  : props.link;

  const match = props.link?.match(/status\/(\d+)/);
const tweetId = match ? match[1] : "1234567890"; // Default tweet ID if not found


    return<>
   <div className=" shadow rounded p-4 gap-4 w-72 bg-white min-h-48 min-w-72">
        <div className=" flex justify-between  items-center">
         <div className="flex items-center gap-3">
          {props.icon}
          <span className="text-gray-800 font-medium">{props.title}</span>
        </div>
        <div className="flex gap-4">
            <a href={props.link} target="_blank">
                {<ShareIcon size="sm"/>}
            </a>
            
            {<DeleteIcon />}
        </div>
        </div>


     <div className="w-full pt-6 ">
        <div className="w-full aspect-video">
            { props.type=="youtube" &&  <iframe
      className="w-full h-full rounded-md"
      src={embedLink}
      title={props.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
         } 

       {props.type === "twitter" && (
        <Tweet id={tweetId} /> 
 
)}
   
  </div>
</div>

    </div>
    
    
    </>

}