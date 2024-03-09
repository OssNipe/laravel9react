import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../css/Profile.css";

export default function Tutordetails({ ADid,tutorId }) {
    const [tutorDetails, setTutorDetails] = useState(null);

    useEffect(() => {
        fetchTutorDetails();
    }, [tutorId]); // Add tutorId to the dependency array to refetch tutor details when tutorId changes

    const fetchTutorDetails = async () => {
        try {
            const response = await axios.get(`/api/brother/${tutorId}/${ADid}`); // Fix the API endpoint URL

            setTutorDetails(response.data);
        } catch (error) {
            console.error('Error fetching tutor details:', error);
        }
    };

    return (
        <div>
            {tutorDetails && (
                <div>
                    <h1>Tutor Details</h1>
                    <p>Name: {tutorDetails.user.name}</p>
                    <p>Advert Title: {tutorDetails.advert_title}</p>
                    <p>Lessons Taught: {tutorDetails.lessons_taught}</p>
                    <p>About Lessons: {tutorDetails.about_lessons}</p>
                    <p>About You: {tutorDetails.about_you}</p>
                    <p>Location: {tutorDetails.location}</p>
                    <p>Location Preference: {tutorDetails.location_preference}</p>
                    <p>Levels: {tutorDetails.levels}</p>
                    <p>Hourly Rate: {tutorDetails.hourly_rate}</p>
                    <div className="profile-image">
        {<img src={`http://localhost:8000/storage/${tutorDetails.user.image_path}`} alt="de profil" />}
      </div>
                </div>
            )}
        </div>
    );
}
