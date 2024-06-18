import React, { createContext, useState } from 'react';

export const userContext = createContext();

function Context(props) {
  const [users, setUsers] = useState([
    { id: 0, name: "Anshuman", email: "anshumanshukla12a@gmail.com" },
    { id: 1, name: "Ankur", email: "ankurshukla12a@gmail.com" },
    { id: 2, name: "Anmol", email: "anmolshukla12a@gmail.com" }
  ]);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {props.children}
    </userContext.Provider>
  );
}

export default Context;
