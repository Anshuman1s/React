import React, { useContext } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Utils/Context';
import Loding from './Loading';

function Home() {
  const [products] = useContext(ProductContext);

  return (
    products ? (
      <>
        <Navigation />
        <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
          {products.map((p,i) => (
            <Link to={"/details"} key={p.id} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[35vh] flex justify-center items-center flex-col">
              <div className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110 cursor-pointer" style={{ backgroundImage: `url(${p.image})`}}></div>
              <h1 className='hover:text-green-600 cursor-pointer'>{p.title}</h1>
            </Link>
          ))}
        </div>
      </>
    ) : (
      <Loading />
    )
  );
}

export default Home;
