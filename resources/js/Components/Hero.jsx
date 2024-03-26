import React from 'react';
import student from '../../images/image.png';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1200px] mt-[-96px]  h-[800px] screen mx-auto flex flex-col lg:flex-row items-center justify-center'>
        {/* Adjusted height using h-3/4 */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:mr-6">
          <p className='text-[#4056A1] font-bold p-2'>
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className='text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Find Your Tutor
          </h1>
          <div className='flex justify-center lg:justify-start items-center'>
            <p className='text-black md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Search, Pick and learn
            </p>
          </div>
          <p className='md:text-2xl text-xl font-bold text-[#4056A1]'>Online tutoring that releases potential.</p>
          <button className='bg-[#F13C20] w-[200px] rounded-md font-medium my-6 mx-auto lg:mx-0 py-3 text-black border border-3 border-black'>Get Started</button>
        </div>
        <img className='w-[650px] translate-y-[40px] translate-x-[180px] mx-auto my-4 lg:my-0' src={student} alt='/' />
      </div>
    </div>
  );
};

export default Hero;
