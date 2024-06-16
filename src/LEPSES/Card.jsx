import React from 'react'

function Card() {
    const data = [{image:"https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Adele",review:"LEPSES excels in edtech with intuitive design and robust educational features."},{image:"https://plus.unsplash.com/premium_photo-1663100081334-ba86f8c3ff1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Isabella",review:"LEPSES redefines education by integrating technology for a seamless learning experience."},{image:"https://images.unsplash.com/photo-1517842536804-bf6629e2c291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Amara",review:"LEPSES transforms education with personalized, immersive, and impactful digital tools."},{image:"https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Elsie",review:"LEPSES empowers students and educators with dynamic, efficient, and interactive tools."},{image:"https://images.unsplash.com/photo-1545696968-1a5245650b36?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Auga",review:"LEPSES transforms education with personalized, immersive, and impactful digital tools."},{image:"https://images.unsplash.com/photo-1514369118554-e20d93546b30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Beatriz",review:"LEPSES empowers students and educators with dynamic, efficient, and interactive tools."},{image:"https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Joe",review:"LEPSES transforms education with personalized, immersive, and impactful digital tools."},{image:"https://images.unsplash.com/photo-1520722359162-8ead33ae9ba4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Tom",review:"LEPSES empowers students and educators with dynamic, efficient, and interactive tools."},{image:"https://images.unsplash.com/photo-1525748822304-6807cb1348ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Zhang",review:"LEPSES transforms education with personalized, immersive, and impactful digital tools."},{image:"https://images.unsplash.com/photo-1615263787251-a9a7c6c26cf1?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Adelita",review:"LEPSES empowers students and educators with dynamic, efficient, and interactive tools."},{image:"https://images.unsplash.com/photo-1600870187251-b55f9c574638?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Jonny",review:"LEPSES transforms education with personalized, immersive, and impactful digital tools."},{image:"https://images.unsplash.com/photo-1568392021577-fad7eb6efba1?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Steve",review:"LEPSES empowers students and educators with dynamic, efficient, and interactive tools."}]
  return (
    <>
    {/* <h2 className='font-[Poppins] flex items-center justify-center text-[3vw]  hover:text-blue-900 cursor-pointer'>Review</h2> */}
    <div className='w-full h-screen bg-zinc-300 gap-10 flex items-center justify-center flex-wrap'>
        
        {data.map((elem,index)=>(
            <div key ={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
            <div className="w-full h-32 bg-zinc-300">
                <img className = "w-full h-full object-cover" src={elem.image} alt="" />
            </div>
            <div className="w-full px-3 py-3 font-[Poppins]">
                <h1 className='font-semibold'>{elem.name}</h1>
                <p className='text-xs mt-2 text-wrap font-medium font-[Poppins]'>{elem.review}</p>
            </div>
            </div>
        ))}
    </div>
    </>
    
  )
}

export default Card