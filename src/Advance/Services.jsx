import React, { useEffect } from 'react'

function Services() {
    useEffect(()=>{
        console.log("Service Component is created");
        return () =>{
            console.log("Service component is deleted");
        }
    })
  return (
    <div>Services</div>
  )
}

export default Services