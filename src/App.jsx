import React from 'react';
import Card from './Components/Card';
function App(){
    const data =["Anshuman","Ankur","Meethi","Kanaha"]
  return (
    <div>
       {/* {data.map((val,index)=><h1 key={val}>Hey</h1>)}
       {data.map((elem,index)=>(
        <div key = {index} className="px-3 py-4 bg-zinc-300 rounded-md w-fit">
            {elem}
       </div>))} */}
       <Card/>
       

    </div>
  )
}
export default App;