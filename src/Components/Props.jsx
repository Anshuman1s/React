// import React from 'react'

// function Props({data,color}) {
//   return (
//     <button className={`px-3 py-3 ${color} text-white m-3 rounded`}>{data}</button>
    
//   )
// }

// export default Props

// Props use hone hai components ko reusable bnane ke liye  consider that you have button and you have to use button in multiple places better ki ke button component bna le aur uska use krte rhe 

//Task 1)
import React from "react";
function Props(image,name,profession){
    return (
        <div className="w-52 bg-whiterounded-md overflow-hidden ">
            <div className="w-full h-32 bg-sky-200">
                <img className = "w-full h-full object-cover object-[center]" src={image} alt="" />
            </div>
            <div className="w-full p-3 bg-zinc-100">
                <h1 className="text-xl font-semibold">{name}</h1>
                <h5 className="text-xs">{profession}</h5>
                <button className="mt-4 px-3 py-3 text-xs  bg-blue-500 font-semibold rounded-md text-black">Add Friend</button>
            </div>
        </div>
    )
}
export default Props;