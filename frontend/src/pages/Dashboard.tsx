import {Button} from "../components/Button"
import { ShareIcon,AddIcon,TwitterIcon,YtIcon }  from "../components/icons/plusIcon"
import {Card} from "../components/Card"
import { useState } from "react"
import { Contentmodal } from "../components/Contentmodal"
import {Sidebar}from "../components/Sidebar"


export function Dashboard() {
  const[open,setopen]=useState(false)

  return (
     <>
   <Contentmodal openmodal={open} onclose={()=>{
      setopen(false)
    }}></Contentmodal>
      
   <Sidebar></Sidebar>

    <div className="p-4  bg-slate-100 min-h-screen">
    <div className="flex p-4 gap-4 justify-end">
      <Button size="md" varient='primary' text="Share" startIcon={<ShareIcon size="sm"/>}   ></Button>
      <Button size="md" varient='secondary' text="Add Content" startIcon={<AddIcon size="sm"/>}  onClick={()=>{ setopen(true) }}></Button>
   </div>

   <div className="flex p-4 gap-4 ml-72">
   
    <Card icon={<TwitterIcon/>} title="Twitter" link="https://twitter.com" type="Twitter"></Card>
   </div>

</div>
    </>
  )
}


