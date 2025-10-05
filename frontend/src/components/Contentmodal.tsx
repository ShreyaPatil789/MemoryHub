import { CrossIcon } from "./icons/plusIcon"
import { Button } from "./Button"   
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum contentType{
  Youtube="Youtube",
  Twitter="Twitter"
}

interface ContentmodalProps{
    openmodal:boolean;
    onclose:()=>void;
}
//controlled  component
export function Contentmodal({openmodal,onclose}:ContentmodalProps){

  const titleRef=useRef<HTMLInputElement>(null);
  const linkRef=useRef<HTMLInputElement>(null);
 const[type,settype]=useState(contentType.Youtube)


  async function addContent(){

    const title=titleRef.current?.value;
    const link=linkRef.current?.value;
    
    await axios.post(`${BACKEND_URL}/addcontent`,
      {
        title:title,
        link:link,
        type:type
      },{
        headers:{
          "token":localStorage.getItem("token")
        }
      }
    )

    alert("content added");
    onclose();


  }
  

return <div >
    
{openmodal && <div className="w-screen h-screen bg-gray-300  opacity-80 fixed top-0 left-0 flex justify-center items-center z-50 border-black ">

<div className=" flex  bg-white opacity-410 rounded-lg p-4 m-4 gap-5 ">
   <span>
    <div className="flex justify-end p-2"
      onClick={onclose} ><CrossIcon/></div>
    <div className="m-4 p-4" >
     <InputHandle referance={titleRef} placeholder="Enter Title"></InputHandle>
     <InputHandle  referance={linkRef} placeholder="Enter link"></InputHandle>
     
    </div>
    <div className="flex items-center gap-2">
  <Button text="Youtube" size="md" varient={type==contentType.Youtube ? "primary" :"secondary"} 
  onClick={()=>{settype(contentType.Youtube)}}></Button>
  <Button text="Twitter" size="md" varient={type==contentType.Twitter ? "primary" :"secondary"}
  onClick={()=>{settype(contentType.Twitter)}  }></Button>


    </div>
    <div className="p-4 flrx justify-items-center">
    <Button varient='primary' size='md' text="submit" 
   onClick={()=>{ addContent()}} 
     ></Button></div>
   </span>
</div>
       
    </div>
    }
    

    
    
</div>


}

type InputHandleProps = {
  referance:any
  placeholder: string;
  title?: string;
  link?:string;
  type?:"youtube" |"twitter"
};
function InputHandle({placeholder ,referance}:InputHandleProps){
    return <div>
    <input ref={referance} type="text" className="border border-gray-300 rounded px-3 py-4 m-4" placeholder={placeholder}/>
    
</div>
}