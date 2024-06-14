import React from 'react';
import FormCard from './FormCard';

function FormCards({ users,handleRemove }) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((user, index) => (
        <FormCard user={user} key={index}handleRemove={handleRemove} id={index}/>
      ))}
    </div>
  );
}

export default FormCards;
