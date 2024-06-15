import React, { useState } from "react";
import axios from 'axios'
function Show() {
    const [products,setProducts] = useState([])
      const getProducts = () =>{
        const api = "https://fakestoreapi.com/products";
        axios.get(api).then(data =>{
          console.log(data);
          setProducts(data.data);
        }).catch(err=>{
          console.log(err);
        })
      }
  return (
    <>
    <button onClick={getProducts} className='px-3 py-3 bg-blue-200 rounded mr-10'>Call Api</button>
    <hr />
    <ul>
      {products.length > 0 ? (
        products.map((p) => (
          <li key={p.id} className=" p-5 bg-red-200 rounded mb-10">{p.title}</li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
    </>
  );
}

export default Show;
