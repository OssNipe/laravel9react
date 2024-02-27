import React from 'react';
import Navbar from './Navbar';
import "../../css/index.css"
function Header(props) {
  return (
    <div className='header'>
<Navbar {...props} />

        <div className="intro">
            <p>Looking for a tutor !</p>
            <h1><span>Find </span>the<span> Tutors</span></h1>
            <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione odit quia, assumenda cumque quidem nemo neque eveniet at excepturi ducimus, accusamus illo porro recusandae, maiores soluta. In perspiciatis labore ea.</p>
            <a href="#" className="header-btn">Get started</a>
        </div>
    </div>
  )
}

export default Header;