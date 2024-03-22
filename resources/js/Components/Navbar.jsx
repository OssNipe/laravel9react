import React, { useEffect,useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ImageUploadAndDisplayComponent from './ImageUploadAndDisplayComponent'; // Import the image component
function Navbar(props) {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    fetchImage();
  }, [props.userId]);

  const fetchImage = async () => {
    try {
      const response = await axios.get(`/api/user_images/${props.userId}`);
      setImagePath(`/storage/${response.data.image_path}`);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

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
    {props.auth.user ? (
      <li className='p-4 text-black'> 
        <Dropdown>
          <Dropdown.Trigger>
            <span>
              <div className="logo-container w-7 h-7 flex justify-center items-center rounded-full overflow-hidden mt-[-2px]">
                <img src={imagePath} alt="User Logo" className="logo-image w-full h-full object-cover" />
              </div>
            </span>
          </Dropdown.Trigger>
          <Dropdown.Content className="bg-white ">
            <div className="user-info flex items-center justify-between px-2 py-4">
              <div className="logo-container w-9 h-9 flex justify-center items-center rounded-full overflow-hidden translate-x-[-2px] ml-2 mt-[2px]">
                <img src={imagePath} alt="User Logo" className="logo-image w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <p className="text-gray-700 font-bold text-[13px] translate-y-[-2px] translate-x-[-45px]">{props.auth.user.name}</p>
                <p className="text-gray-500 text-[10px] translate-y-[-7px] translate-x-[-45px] mt-0">{props.auth.user.email}</p>
              </div>  
            </div>
            <div className='bg-gray-50'>
              <Dropdown.Link href={route('profile.edit')} className="block px-7 py-2 text-gray-700 hover:bg-gray-200">
                <FontAwesomeIcon icon={faUser} className="text-[10px] mr-3 text-gray-400" />
                My Profile
              </Dropdown.Link>
              <Dropdown.Link href={route('dashboard')} className="block px-7 py-2 text-gray-700 hover:bg-gray-200 mb-2">
                <FontAwesomeIcon icon={faChartBar} className="text-[10px] mr-3 text-gray-400" />
                Dashboard
              </Dropdown.Link>
              <Dropdown.Link href={route('logout')} method="post" className="block px-7 pt-3 text-gray-700 hover:bg-gray-200 border-t border-gray-200 ">
                <FontAwesomeIcon icon={faSignOutAlt} className="text-[10px] mr-3 text-gray-400" />
                Log Out
              </Dropdown.Link>
            </div>
          </Dropdown.Content>
        </Dropdown>
      </li>
    ) : (
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
