// import React, { useState } from 'react';
// import Props from './Components/Props';

// function App() {
//     const data = [
//         { name: "Alok", profession: "Gamer", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: false },
//         { name: "Ankur", profession: "Cricketer", image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: false },
//         { name: "Rahul", profession: "Singer", image: "https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: false },
//         { name: "Mahesh", profession: "Coder", image: "https://images.unsplash.com/photo-1618393649689-c997c7455ef5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend: false },
//     ];

//     const [realdata, setRealdata] = useState(data);

//     // State jaha banti hai wahi modify bhi ki ja skti hai
//     const handleFriendsButton = (propindex) => {
//         setRealdata((previous) => {
//             return previous.map((item, index) => {
//                 if (index === propindex) {
//                     return { ...item, friend: !item.friend };
//                 }
//                 return item;
//             });
//         });
//     };

//     return (
//         <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
//             {realdata.map((elem, index) => (
//                 <Props
//                     key={index}
//                     image={elem.image}
//                     name={elem.name}
//                     profession={elem.profession}
//                     friend={elem.friend}
//                     handleClick={() => handleFriendsButton(index)}
//                 />
//             ))}
//         </div>
//     );
// }

// export default App;












// // import Card from './Components/Card';
// // import Cards from './Components/Cards';
// // import Courses from './Components/Courses';
// // import UseState from './Components/UseState';
// // import UseStateAd from './Components/UseStateAd';
// // import UseStateEx from './Components/UseStateEx';
// import React, { useState } from 'react';
// import Props from './Components/Props';
// function App(){
//     const data = [
//       {name:"Alok",profession:"Gamer",image:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false},
//       {name:"Ankur",profession:"Crickter",image:"https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false},
//       {name:"Rahul",profession:"Singer",image:"https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false},
//       {name:"Mahesh",profession:"Coder",image:"https://images.unsplash.com/photo-1618393649689-c997c7455ef5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false},
//     ];
//     const [realdata,setRealdata] = useState (data)
//     // State jaha banti hai wahi modify bhi ki ja skti hai
//     const handleFriendsButton = (propindex)=>{
//       setRealdata((previous)=>{
//       return previous.map((item,index)=>{
//           if(index === propindex){
//             return {...item, friend: !item.friend}
//           }
//           return item;
//         })
//       })
//     }
//   return (
//     <>
//       {/* <UseStateAd/> */}
//       {/* <Courses/> */}
//        {/* <Cards/> */}
//        {/* <Card/> */}
//        {/* <UseState/> */}
//        {/* <UseStateEx/> */}
//        {/* Props ka use kiya hai hamne taaki data kaise use hota hai dekh sake */}
//        {/* <Props data="Change Profile" color = "bg-blue-600"/>
//        <Props data = "download Data" color = "bg-red-500"/> */}
//        <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">

//       {realdata.map((elem,index)=>(
//         <Props key={index} index={index} handleClick ={handleFriendsButton}  image={elem.image} name={elem.name} profession={elem.profession}/>
//       ))}
//        </div>

//     </>
//   )
// }
// export default App;

// import React from 'react'
// import Hello from './Components/Hello'
// function App() {
//   return (
//     <div>
//         <Hello/>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react';
// import Music from './Components/Music';
// import NavBar from './Components/NavBar';

// function App() {
//   const data = [
//     { image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Beliver", artist: "Michel", added: false },
//     { image: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Bella ciao", artist: "Root", added: false },
//     { image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Come By", artist: "Julie", added: false },
//     { image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Hey", artist: "Pup", added: false },
//   ];

//   const [SongData, setSongData] = useState(data);

//   const handleClick = (index) => {
//     setSongData((prev) => {
//       return prev.map((item, itemindex) => {
//         if (itemindex === index) {
//           return { ...item, added: !item.added };
//         }
//         return item;
//       });
//     });
//   };

//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-400">
//         <NavBar data={SongData} />
//         <div className="px-20 flex gap-10 mt-10 flex-wrap">
//           {SongData.map((elem, index) => {
//             return <Music data={elem} handleClick={() => handleClick(index)} index={index} key={index} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
// Form 
// import React, { useRef } from 'react'
// import Form from './Components/Form';
// import React, { useState } from 'react';
// import FormCards from './Components/FormCards';
// import FormData from './Components/FormData';

// function App() {
//   const [users, setUsers] = useState([]);

//   const handleFormSubmitData = (data) => {
//     setUsers([...users, data]);
//   };
//   const handleRemove = (id) =>{
//     setUsers(()=>users.filter((item,index)=>index!=null))
//   }

//   return (
//     <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
//       <div className="container mx-auto">
//         <FormCards users={users} handleRemove={handleRemove}/>
//         <FormData handleFormSubmitData={handleFormSubmitData} />
//       </div>
//     </div>
//   );
// }

// export default App;

// Routing Code is here

// import React from 'react';
// import Routing from './Utils/Routing'
// import NavBar from './Advance/NavBar'

// function App() {
//   return (
//     <>
//     <NavBar/>
//     <Routing/>
//     </>
//   );
// }

// export default App;

// Integrating API in ReactJs


// import React, { useState } from 'react'
// import axios from 'axios'
// function App() {
//   const [products,setProducts] = useState([])
//   const getProducts = () =>{
//     const api = "https://fakestoreapi.com/products";
//     axios.get(api).then(data =>{
//       console.log(data);
//       setProducts(data.data);
//     }).catch(err=>{
//       console.log(err);
//     })
//   }
//   const addProducts = () =>{
//     const api = "https://fakestoreapi.com/products";
//     axios.post(api,{
      
//       title: 'test product',
//       price: 13.5,
//       description: 'lorem ipsum set',
//       image: 'https://i.pravatar.cc',
//       category: 'electronic'
//     }).then(res =>{
//       console.log(res);
//     }).catch(err=>{
//       console.log(err);
//     })
//   }
//   console.log(products);

//   return (
//     <div className='p-10 '>
//       <button onClick={getProducts} className='px-3 py-3 bg-blue-200 rounded mr-10'>Call Api</button>
//       <button onClick={addProducts} className='px-3 py-3 bg-blue-200 rounded'>Send</button>
//       <hr className='my-10' />
//       <ul>
//         {products.length>0 ? (products.map(p=>(<li className=' p-5 bg-red-200 rounded mb-10'>{p.title}</li> ))):(<h1>Loading...</h1>) }
        
        
//       </ul>
//     </div>

//   )
// }

// export default App

// UseEffect

import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Show from './Advance/Show'
import Home2 from './Advance/Home2'
import Services from './Advance/Services'
function App() {
  return (
    <div className='pt-[5%] pl-[5%]'>
      <nav className='flex justify-center gap-10'>
        <Link to = "/">Home</Link>
        <Link to = "/show">Show</Link>
        <Link to = "/services">Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path = "/" element={<Home2/>}></Route>
        <Route path = "/show" element={<Show/>}></Route>
        <Route path = "/services" element={<Services/>}></Route>
      </Routes>
    </div>
  )
}

export default App

// LEPSES 

// import React from 'react'

// import LepsesRoute from './Utils/LepsesRoute';
// function App() {
//   return (
//     <div>
      
//       <LepsesRoute/>
//     </div>
//   )
// }

// export default App
