import React, { useState } from 'react'

function Hello() {
    const [val,setVal] = useState(true)
    

    
  return (
    <div className='p-4'>
        {/* <button className={`px-3 py-3 ${val === true ? "bg-green-400" : "bg-blue-500"} absolute left-[45%] top-[20%] rounded text-xl font`} onClick={()=>{setVal(!val)}}>{val === true ? "Remove Friend" : "Add Friend"}</button> */}
    </div>
  )
}

export default Hello;