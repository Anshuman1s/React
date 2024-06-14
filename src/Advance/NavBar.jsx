import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function NavBar() {
  return (
    
        <nav className='mt-10 flex justify-center gap-10'>
            {/* {We Can use this type of styleing for our navbar} */}
      {/* <NavLink style={(e)=>{
        return {
            color: e.isActive ? "tomato" : "",
            fontWeight:e.isActive ? "bold" : ""
        }
      }} to="/">Home</NavLink> */}
      {/* <NavLink style={(e)=>{
        return {
            color: e.isActive ? "tomato" : "",
            fontWeight:e.isActive ? "bold" : ""
        }
      }} to="/user">User</NavLink>
      <NavLink style={(e)=>{
        return {
            color: e.isActive ? "tomato" : "",
            fontWeight:e.isActive ? "bold" : ""
        }
      }} to="/about">About</NavLink> */}
      {/* This is 2nd way of doing this type of styling */}
      {/* <NavLink 
      className={(e)=>{
        return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-bold" : ""
        ].join(" ")
      }}
      to = "/">Home</NavLink>
      <NavLink className={(e)=>{
        return [
            e.isActive ? "text-green-400" : "",
            e.isActive ? "font-bold" : ""
        ].join(" ")
      }} to = "/about">About</NavLink>
      <NavLink className={(e)=>{
        return [e.isActive ? "text-emerald-300" : "",
        e.isActive ? "font-bold" : ""
    ].join(" ")

      }} to = "/user">User</NavLink> */}
      <NavLink to="/">
      {(e)=>{
        return <span className={[
            e.isActive ? "text-emerald-300" : "",
            e.isActive ? "font-bold" : ""

        ].join(" ")}>Home</span>
        
      }}
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink>
    </nav>
    
  )
}

export default NavBar