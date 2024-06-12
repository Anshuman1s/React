// import React, { useState } from 'react'

// function UseStateAd() {
//     const [val,setVal] = useState({name:"Anshuman",isBanned:false})
//   return (
//     <div className='p-4'>
//         <h1>Name is: {val.name}</h1>
//         <h2>Banned : {val.isBanned.toString()}</h2>
//         <button onClick = {()=>setVal({...val,isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-600" : "bg-red-600"} text-white text-xs rounded-full`}>Change</button>
//     </div>
//   )
// }

// export default UseStateAd
import React, { useState } from 'react';

function UseStateAd() {
    // const [val,setVal]  = useState({name:"Anshuman",age:28})
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
    const [data, changeData] = useState([{ name: "Anshuman", age: 18 }, { name: "Ankur", age: 15 }, { name: "Anmol", age: 2 }]);

    return (
        <div className='p-4'>
            {/* <button onClick={()=>setVal({...val,gender:"male"})}>click</button> */}
            {/* {val.map(items=><h1>{items}</h1>)} */}
            {/* <button onClick={()=>setVal(()=>{
                return val.filter((item,index)=>index!=val.length-1)
            })}>Click</button>  Removing the last item */}
            {/* {val.map((items)=><h1>{items}</h1>)} */}
            {/* <button onClick={()=>setVal(()=>val.filter((items,index) => index!=2))}>Remove</button>  Removing the val from array the index no is 2*/ }
            {/* <button onClick={()=>setVal(()=>val.filter((items)=> items%2 !== 0))}>Filter</button> */}
            {/* <button onClick = {()=>setVal([...val,7])}>Update</button> */}
            {data.map((items, index) => (
                <div key={index}>
                    <h1>{items.name}</h1>
                    <h1>{items.age}</h1>
                </div>
            ))}
            <button onClick={() => changeData(data.map(item => item.name === "Anshuman" ? { name: "Anshuman", age: 21 } : item))}>
                Change
            </button>
        </div>
    );
}

export default UseStateAd

