import React, { useEffect, useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import student from '../../images/image.png';
import {motion} from "framer-motion";
import {fadeIn} from '../variants';
const Hero = () => {
 
  return (
    <div name='home' className='w-full flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <motion.div variants={fadeIn("up",0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false , amount:0.7}}
          >
          <p className='text-[#4056A1] font-bold p-2'>
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className='py-3 md:text-7xl sm:text-6xl text-4xl font-bold'>Find Your Tutor</h1>
          <p className='text-2xl font-bold md:text-5xl sm:text-4xl py-4'>Search, Pick and learn</p>
          <p className='md:text-2xl text-xl font-bold text-[#4056A1]'>Online tutoring that releases potential.</p>
          <button className='bg-[#F13C20] w-[200px] rounded-md font-medium my-6 mx-auto lg:mx-0 py-3 text-black border border-3 border-black'>Get Started</button>
          </motion.div>

        </div>
        <div className=''>
          <motion.div variants={fadeIn("down",0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false , amount:0.7}}
          >
          <img src={student} alt="/" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
