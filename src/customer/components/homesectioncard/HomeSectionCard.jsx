import React from 'react';

const HomeSectionCard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl w-[15rem] h-[20rem] overflow-hidden mx-3 border border-blue-300'>
      <div className='h-[10rem] w-full overflow-hidden'>
        <img className='object-cover object-top w-full h-full' src={product.image} alt='' />
      </div>
      <div className='p-4'>
        <h3 className='text-lg text-gray-800 font-medium overflow-hidden'>{product.title}</h3>
      </div>
    </div>
  );
};

export default HomeSectionCard;
