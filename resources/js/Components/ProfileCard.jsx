import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {  faPenToSquare } from '@fortawesome/free-solid-svg-icons'


import "../../css/Profile.css"
//import ProfileCard from './ProfileCard';
function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="img.jpg" alt="de profil" />
      </div>
      <div className="profile-details">
        <h3 className="h3">Mustapha </h3>
      
         <p className="h2"><FontAwesomeIcon icon={faLocationDot} />Agadir</p>
        <p className="p"><FontAwesomeIcon icon={faPenToSquare} />English</p>
      </div>
      <h2 className="mad">200MAD/hr</h2>
      <div className="container">
  <p className="para">I am a qualified ESL teacher who's passionate about languages</p>
  <p className="p1">Bonjour, je propose des cours d'anglais pour des élèves allant du primaire au lycée. J'espère pouvoir transmettre ma passion pour la langue.</p>
  
</div>
    </div>
    


  );
}

export default ProfileCard;
