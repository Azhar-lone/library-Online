import { useState } from "react"
import {IoClose} from "react-icons/io5"

export default function ConfirmBox(props) {    

   return(
    <div className={`bg-white text-center align-center dark shadow-lg border-2 md:w-[80%] h-[40vh]  w-[99%] fixed top-[24vh] md:left-[10%] rounded-lg `}>
<IoClose  className="size-8   rounded-lg hover:cursor-pointer absolute right-3 top-1 hover:bg-slate-200 hover:text-blue-800" onClick={props.onCancel}/>
     <h1 className="text-3xl mt-8">Are you sure {props?.msg}</h1>
<div className="mt-14 gap flex gap-10 justify-center">
    <button  className={`p-2 hover:cursor-pointer rounded-lg  ${props.cancelBtnBg||"bg-green-500 hover:bg-green-400"}  ` } onClick={props.onCancel}>cancel</button>
    <button  onClick={props.onConfirm} className={`p-2 hover:cursor-pointer rounded-lg hover:bg-red-400 ${props.confimrBtnBg||"bg-red-500"} `}>confirm</button>

</div>
    </div>
   ) 
}