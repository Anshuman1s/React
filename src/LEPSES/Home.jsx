import React from 'react'
import {NavLink } from 'react-router-dom'
import Card from './Card'
import logo from './lepses.png'

function Home() {
  return (

    <div className='w-full h-screen bg-zinc-300'>
    <nav className=' flex items-center gap-[25vw] '>
        <h1 className='text-4xl font-[Poppins] font-semibold m-3'>LEPSES</h1>
        
        <NavLink style = {(e)=>{
            return {color:e.isActive?"tomato" :""}
        }}to="/" className="text-xl font-medium font-[Poppins]" >Home</NavLink>
        <NavLink style = {(e)=>{
            return {color:e.isActive?"tomato" :""}
        }} to="/about" className="text-xl font-medium font-[Poppins]">About</NavLink>
        <NavLink style = {(e)=>{
            return {color:e.isActive?"tomato" :""}
        }} to="/login" className="text-xl font-medium font-[Poppins]">Login</NavLink>
    </nav>
    
    <div className="">
        <h1 className='text-[10vw] flex items-center justify-center mt-20 font-medium font-[Gloriant] tracking-widest'>LEPSES</h1>
        {/* <h2 className='flex items-center justify-center text-[5vw] font-[Gloriant]'>Building</h2> */}
        <h2 className='flex items-center justify-center text-[4vw] font-[Gloriant]'> Building Learing EcoSystem....</h2>
    </div>
   <Card/>
    </div>
  )
}

export default Home