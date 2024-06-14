import React from 'react';
import { useForm } from 'react-hook-form';

function FormData({ handleFormSubmitData }) {
  const { register, handleSubmit,reset } = useForm();
  const handleformSubmit = (data) =>{
     handleFormSubmitData(data);
     reset();
  }
  return (
    <div className="mt-10 flex justify-center gap-10">
      <form className='flex gap-10' onSubmit={handleformSubmit}>
        <input {...register('name')} className='rounded-md px-2 py-2 text-base font-semibold outline-none' type="text" placeholder="Name" />
        <input {...register('email')} className='rounded-md px-2 py-2 text-base font-semibold outline-none' type="text" placeholder="Email" />
        <input {...register('image')} className='rounded-md px-2 py-2 text-base font-semibold outline-none' type="text" placeholder="Image Url" />
        <input className='px-5 py-1 rounded-md bg-blue-500 text-white font-semibold' type="submit" />
      </form>
    </div>
  );
}

export default FormData;
