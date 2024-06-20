// import React, { createContext, useState } from 'react';

// export const userContext = createContext();

// function Context(props) {
//   const [users, setUsers] = useState([
//     { id: 0, name: "Anshuman", email: "anshumanshukla12a@gmail.com" },
//     { id: 1, name: "Ankur", email: "ankurshukla12a@gmail.com" },
//     { id: 2, name: "Anmol", email: "anmolshukla12a@gmail.com" }
//   ]);

//   return (
//     <userContext.Provider value={{ users, setUsers }}>
//       {props.children}
//     </userContext.Provider>
//   );
// }

// export default Context;

// For Warmup project

import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products or set initial products here
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // Example fetch
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  };

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
