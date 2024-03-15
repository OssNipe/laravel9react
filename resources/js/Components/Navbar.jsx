import React, { useState } from 'react';
import logo from "../../images/Group 1.png";
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Navbar(props) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); };
 
  return (
<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>     
<h1 className='w-full text-3xl font-bold text-[#4056A1]'>SWAY3.</h1>
      
      <ul className='hidden md:flex'>
        <li className='p-4 text-black'><Link href={route('Home')}>Home</Link></li>
        <li className='p-4 whitespace-nowrap text-black'><Link href={route('TutorComponent')}>find a tutor</Link></li>
        <li className='p-4 whitespace-nowrap text-black'><Link href={route('BecomTutor')}>Become a tutor</Link></li>
     
    
      
{props.auth.user ? (   <li className='p-4 text-black'> 
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span >
                                            <button
                                                type="button"
                                               
                                            >
                                                {props.auth.user.name}

                                                
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link  href={route('dashboard')}>Dashboard</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                           
                        </li> ) : (
       
       <>
          <li className='p-4 whitespace-nowrap  text-black'>
            <Link href={route('login')}>
              Log in
            </Link>
          </li >
          <li  className='p-4 whitespace-nowrap  text-black'>
            <Link href={route('register')}>
              Register
            </Link>
          </li>
          </>
          )}
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#EAE7DC] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#4056A1] m-4'>SWAY3.</h1>
      <li className='p-4 text-black border-b border-gray-600' ><Link href={route('Home')}>Home</Link></li>
        <li className='p-4 text-black border-b border-gray-600'><Link href={route('TutorComponent')}>find a tutor</Link></li>
        <li className='p-4 text-black border-b border-gray-600'><Link href={route('BecomTutor')}>Become a tutor</Link></li>
    
      
{props.auth.user ? (   <li className='p-4 '> 
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span >
                                            <button
                                                type="button"
                                               
                                            >
                                                {props.auth.user.name}

                                               
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link  href={route('dashboard')}>Dashboard</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                           
                        </li> ) : (
       
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
          )}
        </ul>
        </div>
    );
      
  
}

export default Navbar;
