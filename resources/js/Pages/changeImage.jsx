import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Auth } from '@inertiajs/inertia-react'; 
import React, { useState, useEffect } from "react";
import ProfileCard from '@/Components/ProfileCard';
import ImageUpload from './ImageUpload'
import Imagedisplay from'@/Components/Imagedisplay';
import axios from 'axios';

export default function ChangeImage(props) {
    const [formData, setFormData] = useState({
        advert_title: "",
        lessons_taught: "",
        about_lessons: "",
        about_you: "",
        location_preference: "",
        levels: [],
        location: "",
        PhoneNumber: "",
        hourly_rate: "",
        user_id: props.userId,
    });
    const [userNotFound, setUserNotFound] = useState(false); // New state to handle user not found

    const handleDelete = async () => {
      try {
        // Send a DELETE request to the backend to delete the ad
        const response = await axios.delete(`api/brother/${props.userId}`);
        console.log(response.data.message);
        // Redirect or perform any necessary actions after deletion
      } catch (error) {
        console.error("Error deleting tutor ad:", error);
      }
    };
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/api/brother/${props.userId}`);
                const data = response.data;
                setUserNotFound(false);
                // Update formData state with fetched data
                setFormData({
                    ...formData,
                    advert_title: data.advert_title,
                    lessons_taught: data.lessons_taught,
                    about_lessons: data.about_lessons,
                    about_you: data.about_you,
                    location_preference: data.location_preference,
                    levels: data.levels,
                    location: data.location,
                    PhoneNumber: data.PhoneNumber,
                    hourly_rate: data.hourly_rate,
                });
            } catch (error) {
              if (error.response && error.response.status === 404) {
                // Handle user not found
                setUserNotFound(true);
             
            } else {
              console.error("Error fetching data:", error);} 
          }
        }

        fetchData();
    }, [props.userId]);
    const subjects = ['Math', 'Science', 'History', 'English', 'Art'];
  const cities = [
    
      "Agadir",
      "Al Hoceima",
      "Asilah",
      "Azemmour",
      "Azrou",
      "Beni Mellal",
      "Berkane",
      "Berrechid",
      "Casablanca",
      "Chefchaouen",
      "El Jadida",
      "Errachidia",
      "Essaouira",
      "Fes",
      "Fnideq",
      "Guelmim",
      "Ifrane",
      "Kenitra",
      "Khemisset",
      "Khenifra",
      "Khouribga",
      "Ksar El Kebir",
      "Laayoune",
      "Larache",
      "Marrakech",
      "Martil",
      "Meknes",
      "Mohammedia",
      "Nador",
      "Ouarzazate",
      "Ouezzane",
      "Oujda",
      "Rabat",
      "Safi",
      "Salé",
      "Sefrou",
      "Settat",
      "Sidi Bennour",
      "Sidi Ifni",
      "Sidi Kacem",
      "Sidi Slimane",
      "Skhirat",
      "Tan-Tan",
      "Tangier",
      "Taourirt",
      "Taroudant",
      "Taza",
      "Témara",
      "Tétouan",
      "Tifelt",
      "Tinghir",
      "Tiznit",
      "Youssoufia",
      "Zagora"
    ];
    const [showSubjectList, setShowSubjectList] = useState(true);
    const handleSubjectClick = (subject) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          lessons_taught: subject
        }));
        // Hide the subject list when a subject is clicked
        setShowSubjectList(false);
      };
      const handleChange = (e) => {
        const { name, value, checked } = e.target;
    
        if (name === 'levels') {
            // Ensure we're working with an array
            setFormData((prevData) => {
                const levelsArray = Array.isArray(prevData.levels) ? prevData.levels : [];
                
                const updatedLevels = checked
                    ? [...levelsArray, value] // Add the level if it's checked
                    : levelsArray.filter((l) => l !== value); // Remove the level if it's unchecked
    
                return {
                    ...prevData,
                    levels: updatedLevels,
                };
            });
        } else {
            // Handle other form fields
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
        // Show the subject list when the input changes
        setShowSubjectList(true);
      };
      const filteredSubjects = subjects.filter(subject =>
        subject.toLowerCase().includes(formData.lessons_taught.toLowerCase())
      );
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`api/brother/${props.userId}`, formData);
            console.log(response.data.message);
            // Optionally, redirect the user or show a success message
        } catch (error) {
            console.error("Error updating tutor ad:", error);
        }
    };
    if (userNotFound) {
      // User not found, show button to become a tutor
      return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">changeImage</h2>}
    >
          <div>
              <p>User not found. Would you like to become a tutor?</p>
              <button onClick={() => {/* logic to handle becoming a tutor, possibly redirect to a form */}}>
                  Become a Tutor
              </button>
          </div>
          </AuthenticatedLayout>

      );
  }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">changeImage</h2>}
        >
            <Head title="Change image" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <ImageUpload userId={props.userId} />
                        <div className="container">
                            <form className="form-container" onSubmit={handleSubmit}>
                                {/* Render form fields with their respective values */}
                                <div className="form-row">
                                    <label className="label">
                                        <span>advert title:</span>
                                        <input
                                            type="text"
                                            name="advert_title"
                                            value={formData.advert_title}
                                            onChange={handleChange}
                                            placeholder=""
                                        />
                                    </label>
                                </div>
                                <div style={{ position: 'relative' }}>
              <div className="form-row">
                <label className="label">
                  <span>Subject:</span>
                  <input
                    type="text"
                    name="lessons_taught"
                    value={formData.lessons_taught}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </label>
              </div>
              {/* Display filtered subjects as a list at the bottom */}
              {showSubjectList && formData.lessons_taught && (
                <ul style={{
                  position: 'absolute',
                  width: '74%',
                  backgroundColor: 'white',
                  borderTop: 'none',
                  borderRadius: '0 0 5px 5px',
                  padding: '1px 20px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  boxSizing: 'border-box',
                  zIndex: 1,
                  left: '26%'
                }}>
                  {filteredSubjects.map((subject, index) => (
                    <li key={index} onClick={() => handleSubjectClick(subject)} style={{
                      listStyle: 'none',
                      padding: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}>
                      {subject}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="form-row">
          <label className="label">
            <span className="change">about the lesson:</span>
            <textarea
              className="textarea-input"
              name="about_lessons"
              value={formData.about_lessons}
              onChange={handleChange}
            />
            
          </label>
        </div> 
        
        <div className="form-row">
          <label className="label">
            <span className="change">About You:</span>
            <textarea
              className="textarea-input"
              name="about_you"
              value={formData.about_you}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-row">
  <label className="label">
    <span className="loci">Location:</span>
    <select
      name="location"
      value={formData.location}
      onChange={handleChange}
    >
      <option value="">Select a city</option>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  </label>
</div>
<div className="form-row">
  <label className="label">
  <span>Location Preference:</span>
    <ul>
      <li>
        <label  class="container2">
          <input
             type="checkbox"
            name="location_preference"
            value="online"
            checked={formData.location_preference === "online"}
            onChange={handleChange}
          /> <div class="checkmark"></div>
          Online
        </label>
      </li>
      <li>
        <label class="container2">
          <input
            type="checkbox"
            name="location_preference"
            value="at_home"
            checked={formData.location_preference === "at_home"}
            onChange={handleChange}
          /><div class="checkmark"></div>
          At Home
        </label>
      </li>
      <li>
        <label class="container2">
          <input
            type="checkbox"
            name="location_preference"
            value="both"
            checked={formData.location_preference === "both"}
            onChange={handleChange}
          /><div class="checkmark"></div>
          Both
        </label>
      </li>
    </ul>
  </label>
</div>
<div className="form-row">
  <label className="label">
  <span>Levels:</span>
  <ul>
    <li>
      <label className="container2">
        <input
          type="checkbox"
          name="levels"
          value="2_BAC"
          checked={formData.levels.includes("2_BAC")}
          onChange={handleChange}
        />
        <div className="checkmark"></div>
        2 BAC
      </label>
    </li>
    <li>
      <label className="container2">
        <input
          type="checkbox"
          name="levels"
          value="1_BAC"
          checked={formData.levels.includes("1_BAC")}
          onChange={handleChange}
        />
        <div className="checkmark"></div>
        1 BAC
      </label>
    </li>
    <li>
      <label className="container2">
        <input
          type="checkbox"
          name="levels"
          value="LA_FAC"
          checked={formData.levels.includes("LA_FAC")}
          onChange={handleChange}
        />
        <div className="checkmark"></div>
        LA FAC
      </label>
    </li>
  </ul>
  </label>
</div>
<div className="form-row">
          <label className="label">
            <span className="loci2">Phone number:</span>
            <input
            className="baba"
              type="number"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span className="loci2">Hourly Rate:</span>
            <input
            className="baba"
              type="number"
              name="hourly_rate"
              value={formData.hourly_rate}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="button" className="button-delete" onClick={handleDelete}>
            Delete Ad
          </button>
                                {/* Other form fields */}
                                <button type="submit" className="button">
                                    Update my ad
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
