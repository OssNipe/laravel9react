import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "../../css/Profile.css";
import { Link } from '@inertiajs/react';

function ProfileCard({ name, id ,AdId,location, lessonsTaught, hourlyRate, advertTitle, aboutYou, imagePath }) {
  return (
    <Link href={`/Tutordetails/${id}/${AdId}`}>
    <div className="profile-card">
      <div className="profile-image">
        {imagePath && <img src={`http://localhost:8000/storage/${imagePath}`} alt="de profil" />}
      </div>
      <div className="profile-details">
        <h3 className="h3">{name}</h3>
      
        <p className="p"><FontAwesomeIcon icon={faLocationDot}  style={{  color:'#F13C20' , marginRight: '10px' }}/>{location}</p>
        <p className="p"><FontAwesomeIcon icon={faPenToSquare}  style={{ color:'#F13C20', marginRight: '10px' }}/>{lessonsTaught}</p>
        
        <div className="desc">
        <p className="para">{advertTitle}</p>
        <p className="p1 truncate">{aboutYou.length > 100 ? `${aboutYou.substring(0, 100)}...` : aboutYou}</p>
        </div>
      </div>
      <h2 className="mad">{hourlyRate} MAD/H</h2>
     
      
                                   
                            
    </div>
    </Link>
  );
}

export default ProfileCard;
