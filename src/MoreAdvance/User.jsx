import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../Utils/Context';

function User() {
  const { users,setUsers } = useContext(userContext);

  return (
    <div>
      <h1 className='text-3xl'>User List</h1>
      <div className="mt-10">
        {users.map((u) => (
          <Link 
            key={u.id} 
            to={`/user/${u.id}`} 
            className='bg-blue-300 p-3 m-2 inline-block'
          >
            {u.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
