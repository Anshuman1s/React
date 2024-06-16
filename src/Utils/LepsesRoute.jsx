import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../LEPSES/Home';
import About from '../LEPSES/About';
import Login from '../LEPSES/Login'
function LepsesRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/login" element={<Login/>}/>

    </Routes>
  )
}

export default LepsesRoute