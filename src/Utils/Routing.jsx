import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../Advance/Home'
import About from '../Advance/About'
import User from '../Advance/User'
function Routing() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    
  )
}

export default Routing