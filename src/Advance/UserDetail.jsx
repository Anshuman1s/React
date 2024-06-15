import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
   const {name} =  useParams();
   const Navigate = useNavigate();
   const GoBackHandler = () =>{
    // Navigate("/user") it will redirect to given route
    Navigate(-1); //It will redirect to exact one step back
   }
  return (
    <div className='w-1/2 m-auto mt-10'>
         <h1 className='text-green-600 text-5xl mb-2'>Hey {name}</h1>
      <h1 className='text-2xl mt-3'>User</h1>
      <button onClick = {GoBackHandler} className='mt-5 text-white p- px-3 py-2 bg-red-600 font-semibold'>Go Back</button>
    </div>
  )
}

export default UserDetail