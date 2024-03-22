import React, { useEffect,useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ImageUploadAndDisplayComponent from './ImageUploadAndDisplayComponent'; // Import the image component
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); };
  return (
<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
  <Link href="/">
    <h1 className='w-full text-3xl font-bold text-black'>SWAY3.</h1>
  </Link>
  <ul className='hidden md:flex flex-grow justify-center'>
    <li className='p-4 text-black'><Link href={route('Home')}>Home</Link></li>
    <li className='p-4 whitespace-nowrap text-black'><Link href={route('TutorComponent')}>Find a Tutor</Link></li>
    <li className='p-4 whitespace-nowrap text-black'><Link href={route('BecomTutor')}>Become a Tutor</Link></li>
  </ul>

  <ul className='hidden md:flex'>
   
      <li className='p-4 text-black'> 
        
      </li>
   
      <>
        <li className='p-4 whitespace-nowrap text-black font-bold'>
          <Link href={route('login')}>
            Log in
          </Link>
        </li>
        <li className='p-2 whitespace-nowrap text-white font-bold'>
          <Link href={route('register')}>
            <a className="inline-block px-4 py-2 bg-black hover:bg-gray-700 rounded-md transition duration-300">
              Register
            </a>
          </Link>
   

</li>

          </>
         
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#EAE7DC] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#4056A1] m-4'>SWAY3.</h1>
      <li className='p-4 text-black border-b border-gray-600' ><Link href={route('Home')}>Home</Link></li>
        <li className='p-4 text-black border-b border-gray-600'><Link href={route('TutorComponent')}>find a tutor</Link></li>
        <li className='p-4 text-black border-b border-gray-600'><Link href={route('BecomTutor')}>Become a tutor</Link></li>
    
      
 <li className='p-4 '> 
                                
                           
                        </li> 
       
       <>
          <li className='p-4 border-b border-gray-600 text-black'>
            <Link href={route('login')}>
              Log in
            </Link>
          </li >
          <li  className='p-4 border-b border-gray-600 text-black'>
            <Link href={route('register')}>
              Register
            </Link>
          </li>
          </>
          
        </ul>
        </div>
    );
      
  
}

export default Navbar;
