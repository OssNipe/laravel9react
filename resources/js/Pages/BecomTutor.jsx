import React, { useState } from "react";
import AppLayout from '@/Layouts/AppLayout';
import "../../css/FormComponent.css";
import axios from "axios";


const CreateTutorAdForm = ({ userId , ...props }) =>  {
  const [formData, setFormData] = useState({
    advert_title: "",
    lessons_taught: "",
    about_lessons: "",
    about_you: "",
    location: "",
    location_preference: "",
    levels: "",
    hourly_rate: "",
    user_id: userId 
  });
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
    
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const value = event.target.value;

    // Update the form data based on whether the checkbox is checked or unchecked
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        location_preference: [...prevData.location_preference, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        location_preference: prevData.location_preference.filter(
          (item) => item !== value
        ),
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/brother', formData);
      console.log(response.data.message);
      // Optionally, redirect the user or show a success message
    } catch (error) {
      console.error("Error creating tutor ad:", error);
    }
  };

  return (
    <AppLayout {...props}>
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
      <h4>Complete your information</h4>
      <p>Briefly tell potential students what you teach and what your lessons are like:</p>
      <div className="size">
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
        <div className="form-row">
          <label className="label">
            <span>Subject:</span>
            <input
              type="text"
              name="lessons_taught"
              value={formData.lessons_taught}
              onChange={handleChange}
              placeholder=""
            />
          </label>
        </div>
       
        <div className="form-row">
          <label className="label">
            <span>about the lesson:</span>
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
            <span>About You:</span>
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
    <span>Location:</span>
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
        <label>
          <input
            type="radio"
            name="location_preference"
            value="online"
            checked={formData.location_preference === "online"}
            onChange={handleChange}
          />
          Online
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="location_preference"
            value="at_home"
            checked={formData.location_preference === "at_home"}
            onChange={handleChange}
          />
          At Home
        </label>
      </li>
    </ul>
  </label>
</div>
        <div className="form-row">
          <label className="label">
            <span>Levels:</span>
            <input
              type="text"
              name="levels"
              value={formData.levels}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="label">
            <span>Hourly Rate:</span>
            <input
              type="number"
              name="hourly_rate"
              value={formData.hourly_rate}
              onChange={handleChange}
            />
          </label>
        </div>
        <button  type="submit" className='button'>Post my ad now</button>
      </div>
    </form>
      
    </div>
    </AppLayout>
  );
};

export default CreateTutorAdForm;
