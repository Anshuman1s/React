import React from 'react'

function Navigation() {
  return (
    
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a className='py-y px-5 border rounded border-blue-200 text-blue-300' href="/create">Add New Product</a>
        <hr  className='w-[80%] my-3'/>
       <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
       <ul className=' w-[80%]'>
        <li className='mb-3  flex items-center'>
          <span className=' w-[15px] h-[15px] bg-red-200 rounded-full mr-2'></span>
          Cat One</li>
        <li className='mb-3  flex items-center'>
          <span className=' w-[15px] h-[15px] bg-blue-200 rounded-full mr-2'></span>
          Cat One</li>
        <li className='mb-3  flex items-center'>
          <span className=' w-[15px] h-[15px] bg-green-200 rounded-full mr-2'></span>
          Cat One</li>
       
       </ul>
      </nav>
  )
}

export default Navigation