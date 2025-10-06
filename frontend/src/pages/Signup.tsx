import {Button} from "../components/Button"
import { useRef } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios"
import cors from "cors"
import {useNavigate} from "react-router-dom"
cors();


export function Signup(){
const usernameRef=useRef<any>(null);
const passwordRef=useRef<any>(null);
const navigate=useNavigate();

  async function signup(){
   const username=usernameRef.current?.value;
   const password=passwordRef.current?.value;

   await axios.post(`${BACKEND_URL}/signup`,{
    username,
      password
   })
   alert("user signed up !");
   navigate("/signin")
  
  }

    return <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
       <div className="bg-white rounded p-4 border-black hover:shadow-lg ">
            <InputHandle  referance={usernameRef} placeholder="Enter Username"></InputHandle>
            <InputHandle  referance={passwordRef} placeholder="Enter password"></InputHandle>
            <div className="flex justify-center">
            <Button  onClick={signup} varient="primary" size="md" text="Sign Up"></Button>
           
            </div>
             <div>Login if you have already signed up </div>
      </div>

    </div>
}



type InputHandleProps = {
  placeholder: string;
  referance?:any
  title?: string;
  link?:string;
  type?:"youtube" |"twitter"
};
function InputHandle({placeholder,referance}:InputHandleProps ){
    return <div>
    <input ref={referance} type="text" className="border border-gray-300 rounded px-3 py-4 m-4" placeholder={placeholder}/>
    
</div>
}