import React from 'react'
import {Link} from 'react-router-dom'
function Details() {
  return (
    <div className='w-[70%] flex  justify-center h-full  m-auto p-[10%]'>
      <img className= "w-[40%] object-contain h-[80%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      <div className="content w-[60%] ">
        <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack</h1>
        <h3 className='text-zinc-500 my-5'>men's clothing</h3>
        <h2 className='text-blue-500 '>₹ 1199.00</h2>
        <p className='mb-[5%]'>Your perfect pack for everyday use and walks in the forest. Stash your laptop <span className='text-red-500 hover:text-green-500 cursor-pointer'>(up to 15 inches)</span> in the padded sleeve, your everyday</p>
        <Link className='mr-5 py-2 px-5 border rounded-blue-200 text-blue-300'>Edit</Link>
        <Link className='py-2 px-5 border rounded-red-200 text-red-300'>Delete</Link>
      </div>

    </div>
  )
}

export default Details