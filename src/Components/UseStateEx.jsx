import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function UseStateEx() {
    // const [val,setVal] = useState(false); 
    const [val,setVal] = useState(false)
    
  return (
    // <div className='p-4'>
    //     <h1>{val === false ? "Bahar Jao" : "Mat Jao Ruko"}</h1>
    //     <button onClick={()=> setVal(()=>!val)} className='px-2 py-2 bg-blue-300 rounded-full'>Change</button>
    // </div>
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 rounded-md  relative flex overflow-hidden">
        <img  className = {`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]" } w-full h-full object-cover `} src="https://images.unsplash.com/photo-1718049720096-7f1af82d69af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
        <img  className = {`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]" } w-full h-full object-cover `} src="https://images.unsplash.com/photo-1618381801643-3d253a63a386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick = {()=>setVal(()=>!val)} className='w-8 h-8  flex items-center justify-center bg-[#dadada8b] rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] '>
        <FaArrowRightLong size = {".7em"}/>
        </span>

      </div>
    </div>
  )
}

export default UseStateEx