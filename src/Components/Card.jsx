import React from 'react'

function Card() {
    const data = [
        {images:'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name:"Amazon Basics",descriptions:"hey this product is very useful you should try once"},
        {images:'https://images.unsplash.com/photo-1643208589888-23447d7e747f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,name:"Amazon prime",descriptions:"Amazing product available on amazon"},
        {images:'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,name:"Netflix",descriptions:"One of the largest Seeing OTT in the world"},

    ]
  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
       {data.map((elem,index)=>(
         <div key ={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
         <div className="w-full h-32 bg-zinc-300">
             <img className = "w-full h-full object-cover" src={elem.images} alt="" />
         </div>
         <div className="w-full px-3 py-3">
             <h1 className='font-semibold'>{elem.name}</h1>
             <p className='text-xs mt-5'>{elem.descriptions}</p>
         </div>
         </div>
       ))}
    </div>
  )
}

export default Card