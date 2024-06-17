import React, { useEffect, useState } from 'react'

function Services() {
    useEffect(()=>{
        console.log("Service Component is created");
        return () =>{
            console.log("Service component is deleted");
        }
    },[])
    const [first,setFirst] = useState("This is Normal data")
    const [second,setSecond] = useState("This is important data")
  return (
    <div>
      <h1>{first}</h1>
      <button className='px-3 py-3 bg-red-300 rounded mb-10' onClick={()=>setFirst("Normal data Has Been Changed")}>Change Normal data</button>
      <h1>{second}</h1>
      <button className='px-3 py-3 bg-blue-300 rounded' onClick={()=>setSecond("Importabt data has been changed")}>Change important data</button>
    </div>
  )
}

export default Services