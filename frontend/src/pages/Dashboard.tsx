import {Button} from "../components/Button"
import { ShareIcon,AddIcon,TwitterIcon,YtIcon }  from "../components/icons/plusIcon"
import {Card} from "../components/Card"
import { useState } from "react"
import { Contentmodal } from "../components/Contentmodal"
import {Sidebar}from "../components/Sidebar"
import {useContents} from "../Hooks/useContent"

export function Dashboard() {
  const[open,setopen]=useState(false)
const contentsdata= useContents();
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
  console.log(json.stringify(contentsdata))
   <div className="flex p-4 gap-4 ml-72">
    {contentsdata.map(({title,link,type})=>{
      return <Card key={link} icon={type=="Youtube" ? <YtIcon/> : <TwitterIcon/>} title={title} link={link} type={type}></Card>
    })}


   </div>

</div>
    </>
  )
}


