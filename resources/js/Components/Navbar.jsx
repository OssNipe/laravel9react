import React from 'react';
import logo from "../../images/Group 1.png";
import Dropdown from '@/Components/Dropdown';
import { Link, Head } from '@inertiajs/react';
import "../../css/index.css"

function Navbar(props) {
  return (
    <nav>
      <a href="#" className='logo'>
        <img src={logo} alt="logo" />
      </a>
      <input type="checkbox" className="menu-btn" id='menu-btn' />
      <label htmlFor="menu-btn" className="menu-icon"> {/* Replace "for" with "htmlFor" */}
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
      <li>  <Link href={route('Home')}>
Home</Link></li>
        <li>  <Link href={route('TutorComponent')}>
    Find a Tutor
</Link></li>
        <li><Link href={route('BecomTutor')}>
    Become a Tutor
</Link></li>
{props.auth.user ? (   <li> 
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span >
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-3 color:#242424; "
                                            >
                                                {props.auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
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
       
          <li>
            <Link href={route('login')}>
              Log in
            </Link>
          </li>
          <li>
            <Link href={route('register')}>
              Register
            </Link>
          </li>
       
        </>   )}
      </ul>
    </nav>
  );
}

export default Navbar;
