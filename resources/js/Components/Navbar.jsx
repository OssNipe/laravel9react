import React from 'react';
import logo from "../../images/Group 1.png";
import { Link, Head } from '@inertiajs/react';
import "../../css/index.css"

function Navbar() {
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
        </>
      </ul>
    </nav>
  );
}

export default Navbar;
