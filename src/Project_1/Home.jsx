import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Navigation/>
    <div className="w-[85%]  p-10 pt-[5%]  flex flex-wrap overflow-x-hidden overflow-y-auto">
    <Link to={"/details"} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[35vh] flex justify-center items-center flex-col">
      <div className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110 cursor-pointer" style={{backgroundImage: "URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}></div>
      <h1 className='hover:text-green-600 cursor-pointer'>Lorem ipsum dolor sit.</h1>
    </Link>
  </div>
  </>
  )
}

export default Home