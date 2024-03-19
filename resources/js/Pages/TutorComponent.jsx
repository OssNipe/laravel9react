import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";
import ProfileCard from "@/Components/ProfileCard";

export default function TutorsList(props) {
    const [tutors, setTutors] = useState([]);
    const [searchLessons, setSearchLessons] = useState('');
    const [searchLocation, setSearchLocation] = useState('');

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

    // Function to handle search
    const handleSearch = () => {
        const filteredTutors = tutors.filter(tutor => {
            const lessonsMatch = tutor.lessons_taught.toLowerCase().includes(searchLessons.toLowerCase());
            const locationMatch = tutor.location.toLowerCase().includes(searchLocation.toLowerCase());
            return lessonsMatch && locationMatch;
        });
        setTutors(filteredTutors);
    };

    return (
        <AppLayout {...props}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by lessons taught"
                                value={searchLessons}
                                onChange={e => setSearchLessons(e.target.value)}
                            />
                            <input
                            class="mb-20 bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"

                                type="text"
                                className="mb-20"
                                placeholder="Search by location"
                                value={searchLocation}
                                onChange={e => setSearchLocation(e.target.value)}
                            />
                            <button class="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]" onClick={handleSearch}>
 Search
</button>
                            
                        </div>
                    </div>
                    <div className="col-12">
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
