import React from 'react'

function Cards() {
    const data = [{name:"Mahiya Ve",Description:"The name of the card that will be displayed on the screen "},{name:"Saathiya",Description:"The name of the card that will be displayed on the screen "}];
    const handle = ()=> alert("Download Start")
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
       {data.map((item,index)=>(
         <div className="song w-90 px-3 py-2 bg-zinc-100 rounded">
         <h3 className='font-semibold text-xl'>{item.name}</h3>
         <p className='text-xm mt-2'>{item.Description}</p>
         <button onClick={handle} className='px-2 py-1 bg-blue-200 text-xs font-semibold text-black rounded mt-3'>Download Now</button>
     </div>
       ))}
    </div>
  )
}
export default Cards;