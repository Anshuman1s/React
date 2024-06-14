// Using useRef prevent from form submission reload
// import React, { useRef } from 'react'

// function Form() {
//     const name = useRef(null);
//     const age = useRef(null);
//     const email = useRef(null);
//     const handleClick = (event)=>{
//         event.preventDefault();
//         console.log(name.current.value,age.current.value,email.current.value );
//     }
//   return (
//     <form action="" onSubmit={handleClick}>
//         <input ref={name} type="text" placeholder='name' />
//         <input ref={age} type="text" placeholder='age' />
//         <input ref={email} type="text" placeholder='email' />
//         <input type="submit" />
//     </form>
//   )
// }

// export default Form;

// Using useState we can change the value by instently 
// import React, { useState } from 'react'

// function Form() {
//     const [val,setVal]=useState({name:""})
//     // const OnChange= (event)=>{
//     //     return event.target.value
//     // }
//     const handleSubmit = (event)=>{
//         event.preventDefault();
//     }
//   return (
//     <form action="" onSubmit={handleSubmit}>
//         <input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" placeholder="name"/>
//         <input onChange={(event)=>setVal({...val,email:event.target.value})} type="email" placeholder="email"/>
//         <input type="submit" />
//     </form>
//   )
// }

// export default Form

// Using react hook form we can prevent the loading of thee form

import React from 'react'
import {useForm} from 'react-hook-form'

function Form() {
    const {register,handleSubmit} = useForm();
  return (
    <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="email" placeholder='email' />
        <input type="submit"/>
    </form>
  )
}

export default Form