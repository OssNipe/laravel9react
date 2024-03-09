import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "../../css/Profile.css";

function ProfileCard({ name, location, lessonsTaught, hourlyRate, advertTitle, aboutYou, imagePath }) {
  return (
    <div className="profile-card">
      <div className="profile-image">
        {imagePath && <img src={`http://localhost:8000/storage/${imagePath}`} alt="de profil" />}
      </div>
      <div className="profile-details">
        <h3 className="h3">{name}</h3>
        <p className="h2"><FontAwesomeIcon icon={faLocationDot} />{location}</p>
        <p className="p"><FontAwesomeIcon icon={faPenToSquare} />{lessonsTaught}</p>
      </div>
      <h2 className="mad">{hourlyRate}</h2>
      <div className="container">
        <p className="para">{advertTitle}</p>
        <p className="p1">{aboutYou}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
