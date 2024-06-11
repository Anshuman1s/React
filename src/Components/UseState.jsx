import React, { useState } from 'react'

function UseState() {
    const [Score,SetScore] = useState(0)
    const [banned,setBanned] = useState(false);
    // const [name,ChangeName] = useState("Anshuman")
    const [val,changeVal] = useState(12);
    const [value,setValue] = useState({name:"Anshuman",isBanned:false})
  return (
    <div className='p-4 mt-3'>
      {/* <h1>{name.toString()}</h1> */}
      <h1>name is:{value.name}</h1>
      <h2>isBanned {value.isBanned.toString()}</h2>
    <button onClick={()=>setValue({...value, isBanned: !value.isBanned})} className='px-2 py-2 bg-blue-300 rounded-full '>Change</button>
    </div>
  )
}

export default UseState