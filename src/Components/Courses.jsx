import React from 'react'

function Courses() {
    const data = [{img:"https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Java+DSA",description:"Anshuman shukla will teach You DSA with Java",isEnroll:true},{img:"https://media.istockphoto.com/id/1472104429/photo/close-up-of-fingers-touching-holograms-on-digital-virtual-screen.webp?b=1&s=170667a&w=0&k=20&c=5TBBMdtxr_mHucDUUFVOqhGXc7Pd7LjOvOGQpXZ-HyE=",name:"CPP+DSA",description:"Akash Kaushik will teach You DSA with Java",isEnroll:false},{img:"https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"OS",description:"Govind Gupta will teach You DSA with Java",isEnroll:true}]
  return (
    <div className='w-full h-screen bg-black flex item-center justify-center rounded gap-4 '>
       {data.map((elem,index)=>( <div className="w-60 h-64 px-2 py-2 bg-zinc-300 mt-60 rounded">
            <div className="w-20 h-20 bg-zinc-600 rounded-full">
               <img  className = "w-full h-full object-cover rounded-full" src={elem.img} alt="" />
            </div>
            <div className="w-50 h-9">
                <h1 className=' text-xl font-semibold mt-2'>{elem.name}</h1>
                <p className='text-xm mt-2 '>{elem.description}</p>
                <h3 className='font-semibold'>Price:- ₹5999</h3>
                <button className={` ${elem.isEnroll ? 'bg-blue-600' : 'bg-red-500'} 'bg-blue-600 rounded px-1 py-1 mt-2'`}>{elem.isEnroll?"ClassRoom" :"Enroll Now"}</button>
            </div>
        </div>))}
    </div>
  )
}

export default Courses