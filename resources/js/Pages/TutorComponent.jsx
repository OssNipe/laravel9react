import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";
import ProfileCard from "@/Components/ProfileCard";

export default function TutorsList(props) {
    const [tutors, setTutors] = useState([]);
    const [searchLessons, setSearchLessons] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [searchLocationPreference, setSearchLocationPreference] = useState('');
    const [noTutorsFound, setNoTutorsFound] = useState(false);

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
            const locationPrefMatch = searchLocationPreference === '' || tutor.location_preference.toLowerCase() === searchLocationPreference.toLowerCase();
            return lessonsMatch && locationMatch && locationPrefMatch;
        });
        setTutors(filteredTutors);
        setNoTutorsFound(filteredTutors.length === 0); // Set noTutorsFound state based on filteredTutors length
    };

    // Function to handle reset
    const handleReset = () => {
        setSearchLessons('');
        setSearchLocation('');
        setSearchLocationPreference('');
        fetchTutors(); // Reset by fetching all tutors again
        setNoTutorsFound(false); // Reset noTutorsFound state
    };

    return (
        <AppLayout {...props}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <div class="flex gap-4">
                            <input type="text" class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 focus:ring-black focus:border-black placeholder-gray-500" placeholder="Lessons" value={searchLessons} onChange={e => setSearchLessons(e.target.value)} />
                            
                            <input type="text" class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 focus:ring-black focus:border-black placeholder-gray-500" placeholder="Location" value={searchLocation} onChange={e => setSearchLocation(e.target.value)} />
                            <select class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 focus:ring-black focus:border-black" value={searchLocationPreference} onChange={e => setSearchLocationPreference(e.target.value)}>
                                <option value="">Location Preference</option>
                                <option value="at home">At Home</option>
                                <option value="online">Online</option>
                                <option value="both">Both</option>
                            </select>
                            <button class="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-md transition-transform duration-50 hover:shadow-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sm" onClick={handleSearch}>Search</button>
                            <button class="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-md transition-transform duration-50 hover:shadow-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sm" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                    {noTutorsFound ? (
                        <div className="col-12 mb-3">
                            <p>No tutors found.</p>
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
