import type { ReactElement } from "react";

export interface ButtonProps {
    varient:"primary"|"secondary";
    size:"sm" |"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
   onClick?:()=>void;
}

const varientstyles={
    primary:"bg-purple-600 text-white",
    secondary:"bg-gray-300 text-purple-600"

}

const sizestyles={
    "sm":"py-1 px-2 text-sm rounded-sm font-normal",
    "md":"py-2 px-4 text-md rounded-md font-medium",
    "lg":"py-3 px-6 text-lg rounded-lg font-semibold"
}


export const Button=(props:ButtonProps)=>{
    return <button  onClick={props.onClick} className={` ${sizestyles[props.size]} ${varientstyles[props.varient]} flex items-center`}>
      {props.startIcon}
      <div className=" pr-1 pl-1"> {props.text}</div>
       
        {props.endIcon}
        </button>
}

