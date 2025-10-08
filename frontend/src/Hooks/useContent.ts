import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
export function useContents(){
 const [contents,setContents]=useState<any[]>([])

 useEffect(()=>{
        axios.get(`${BACKEND_URL}/alldoc`,{
            headers:{
                "token":localStorage.getItem("token")
            }
        })
        .then((response) => {
      // Ensure it's always an array
      if (Array.isArray(response.data.content)) {
        setContents(response.data.content)
      } else {
        setContents([]) // fallback if backend sends a string
      }
    })
    .catch((err) => {
      console.error("Error fetching contents", err);
      setContents([]) // fallback
    })
 },[])
console.log(contents)
return contents;

}