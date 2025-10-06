import {Button} from "../components/Button"
import {useRef} from "react"
import axios from "axios"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

 export function Signin(){

  const usernameref=useRef<any>(null);
  const passwordref=useRef<any>(null);
const Navigate=useNavigate()    ;
 async function signin(){
        const username=usernameref.current?.value
        const password=passwordref.current?.value

        console.log(username,password);
 const responce=await axios.post(`${BACKEND_URL}/signin`,{
    username,
    password
  })
  localStorage.setItem("token",responce.data.token)

  alert("user signed in");
Navigate("/dashboard")
      }


    return <div className="w-screen h-screen flex justify-center items-center  bg-gray-100">
       <div className="bg-white rounded p-4 border-black hover:shadow-lg">
        <div className="mb-2 hover:shadow-lg  text-center">
            <InputHandle reference={usernameref} placeholder="Enter Username"></InputHandle></div>
          <div className="mb-2 hover:shadow-lg  text-center" >  <InputHandle reference={passwordref} placeholder="Enter password"></InputHandle></div>
            <div className="flex justify-center mt-2">
            <Button onClick={signin}varient="primary" size="md" text="Sign in"></Button>
           
            </div>
             <div>Please SignUp 1st if you haven't</div>
      </div>

    </div>
}



type InputHandleProps = {
  placeholder: string;
  reference:any;
  title?: string;
  link?:string;
  type?:"youtube" |"twitter"
};
function InputHandle({placeholder,reference}:InputHandleProps){
    return <div>
    <input ref={reference} type="text" className="border border-gray-300 rounded px-3 py-4 m-4" placeholder={placeholder}/>
    
</div>
}