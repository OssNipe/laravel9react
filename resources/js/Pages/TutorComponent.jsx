import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";
import ProfileCard from "@/Components/ProfileCard";

export default function TutorsList(props) {
    const [tutors, setTutors] = useState([]);
    const [allTutors, setAllTutors] = useState([]); // New state to hold the original list of tutors
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
            setAllTutors(response.data); // Keep a copy of the original tutors list
        } catch (error) {
            console.error("Error fetching tutors:", error);
        }
    };

    // Function to handle search
    const handleSearch = () => {
        const filteredTutors = allTutors.filter(tutor => { // Use allTutors for filtering
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
        setTutors(allTutors); // Reset by setting tutors to the original list
        setNoTutorsFound(false); // Reset noTutorsFound state
    };

    return (
        <AppLayout {...props}>
            <div className="mt-6  mx-auto max-w-[60%] lg:ml-[300px] "style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
  <h1 className="text-4xl font-bold mb-4">Find tutors for private lessons.</h1>
  <h2 className="text-[25px] mt-6 font-semibold">Find private tutors for lessons in over 350 subjects. Choose your tutor based on their location, subject, the level they teach, and whether they offer classes in person or online.</h2>
</div>
        <div className="container flex lg:flex-row sm:flex-col gap-[40px] mx-auto ">
            
          <div className="w-full lg:w-1/4 ">
          <div className="lg:mt-[10%] sm:mt-[20%] bg-white p-6 rounded shadow-lg border border-gray-400" style={{ borderRadius: '8px' }}>
              <div className="mb-4">
                <span>What would you like to learn?</span>
              <input
  type="text"
  className="block w-[220px] h-[50px] rounded-md py-1.5 px-4 ring-1 ring-inset ring-gray-50 focus:text-gray-800 focus:ring-black focus:border-black placeholder-gray-400 mb-2 placeholder-text-lg" // Add placeholder-text-lg class
  placeholder="Eg.: Math"
  value={searchLessons}
  onChange={e => setSearchLessons(e.target.value)}
  style={{
    width: '100%',
    font: '10pt "Open Sans", Arial, sans-serif',
    border: '1px solid #d6d6d6',
    borderRadius: '8px'
  }}
/>

<span>Where?</span>
                <input
                  type="text"
                  className="block w-[220px] h-[50px] rounded-md py-1.5 px-4 ring-1 ring-inset ring-gray-50 focus:text-gray-800 focus:ring-black focus:border-black placeholder-gray-400 mb-2 placeholder-text-lg" // Add placeholder-text-lg class
                  placeholder="Eg.: Agadir,Casablanca"
                  value={searchLocation}
                  onChange={e => setSearchLocation(e.target.value)}
                  style={{
                    width: '100%',
                    font: '10pt "Open Sans", Arial, sans-serif',
                    border: '1px solid #d6d6d6',
                    borderRadius: '8px'
                  }}
                />
                <span>Lesson location</span>

              <div className="block w-[220px] rounded-md py-2 px-4 ring-1 ring-inset ring-gray-50 focus:text-gray-800 focus:ring-black focus:border-black mb-2">
    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            className="form-checkbox mr-2 focus:ring-black focus:border-black"
            checked={searchLocationPreference === 'at_home'}
            onChange={() => setSearchLocationPreference('at_home')}
        />
        At Home
    </label>
    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            className="form-checkbox mr-2 focus:ring-black focus:border-black"
            checked={searchLocationPreference === 'online'}
            onChange={() => setSearchLocationPreference('online')}
        />
        Online
    </label>
    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            className="form-checkbox mr-2 focus:ring-black focus:border-black"
            checked={searchLocationPreference === 'both'}
            onChange={() => setSearchLocationPreference('both')}
        />
        Both
    </label>
</div>
<span>Level of the lessons
</span>

                <button
                  className="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-md transition-transform duration-50 hover:shadow-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sm"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <button
                  className="cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-md transition-transform duration-50 hover:shadow-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sm"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 mt-[20PX] flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              {noTutorsFound ? (
                <div className="mb-3">
                  <p>No tutors found.</p>
                </div>
              ) : (
                tutors.map((tutor, index) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </AppLayout>
      
    );
}
