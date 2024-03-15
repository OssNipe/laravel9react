import React from 'react';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#4056A1] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=' text-[#D79922] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Find Your Tutor
        </h1>
        <div className='flex justify-center items-center'>
          <p className=' text-[#D79922] md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Search, Pick and learn
          </p>
          
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#4056A1]'>Online tutoring that releases potential.</p>
        <button className='bg-[#F13C20] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border border-3 border-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
