import React from 'react'
import {Link} from 'react-router-dom'
function Details() {
  return (
    <div className='w-[70%] flex  justify-center h-full  m-auto p-[10%]'>
      <img className= "w-[40%] object-contain h-[80%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      <div className="content bg-red-100 w-[40%]">
        <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack</h1>
        <h3 className='text-zinc-500'>men's clothing</h3>
        <h2>₹ 1199.00</h2>
        <p>Description</p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>

    </div>
  )
}

export default Details