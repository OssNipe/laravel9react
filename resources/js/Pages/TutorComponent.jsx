import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";
import ProfileCard from "@/Components/ProfileCard"
export default function TutorsList(props) {
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetchTutors();
    }, []);

    const fetchTutors = async () => {
        try {
            const response = await axios.get("api/brother");
            setTutors(response.data);
        } catch (error) {
            console.error("Error fetching tutors:", error);
        }
    };

    return (
        <AppLayout {...props}>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <table className="table">
                            
                            <tbody>
                            {tutors.map((tutor, index) => (
                                
                            <ProfileCard 
                                key={index}
                                name={tutor.user.name}
                                id={tutor.user_id}
                                AdId={tutor.id}
                                advertTitle={tutor.advert_title}
                                lessonsTaught={tutor.lessons_taught}
                                aboutLessons={tutor.about_lessons}
                                aboutYou={tutor.about_you}
                                location={tutor.location}
                                locationPreference={tutor.location_preference}
                                levels={tutor.levels}
                                hourlyRate={tutor.hourly_rate}
                                imagePath={tutor.user.image_path}
                            />
                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            </AppLayout>
    );
}
