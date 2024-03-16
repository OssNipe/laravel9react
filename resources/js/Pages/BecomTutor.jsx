import React, { useState } from "react";
import AppLayout from '@/Layouts/AppLayout';
import "../../css/FormComponent.css";
import axios from "axios";

const CreateTutorAdForm = (props ) =>  {
  const [formData, setFormData] = useState({
    advert_title: "",
    lessons_taught: "",
    about_lessons: "",
    about_you: "",
    location: "",
    location_preference: "",
    levels: "",
    hourly_rate: "",
    user_id: props.userId 
  });
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
  const [showSubjectList, setShowSubjectList] = useState(true);

  const handleSubjectClick = (subject) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      lessons_taught: subject
    }));
    // Hide the subject list when a subject is clicked
    setShowSubjectList(false);
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
                  onChange={handleInputChange}
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
        <label  class="container2">
          <input
             type="checkbox"
            name="levels"
            value="2_BAC"
            checked={formData.levels === "2_BAC"}
            onChange={handleChange}
          /> <div class="checkmark"></div>
          2 BAC
        </label>
      </li>
      <li>
        <label class="container2">
          <input
            type="checkbox"
            name="levels"
            value="1_BAC"
            checked={formData.levels === "1_BAC"}
            onChange={handleChange}
          /><div class="checkmark"></div>
          1 BAC
        </label>
      </li>
      <li>
        <label class="container2">
          <input
            type="checkbox"
            name="levels"
            value="LA_FAC"
            checked={formData.levels === "LA_FAC"}
            onChange={handleChange}
          /><div class="checkmark"></div>
          LA FAC
        </label>
      </li>
    </ul>
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
        <button  type="submit" className='button'>Post my ad now</button>
      </div>
    </form>
      
    </div>
    </AppLayout>
  );
};

export default CreateTutorAdForm;
