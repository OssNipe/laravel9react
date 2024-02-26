import React, { useState } from "react";
import axios from "axios";

const CreateTutorAdForm = ({ userId }) =>  {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
    <div className="container">
      <h2>Create Tutor Ad</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="advert_title">Advert Title</label>
          <input
            type="text"
            className="form-control"
            id="advert_title"
            name="advert_title"
            value={formData.advert_title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lessons_taught">Lessons Taught</label>
          <input
            type="text"
            className="form-control"
            id="lessons_taught"
            name="lessons_taught"
            value={formData.lessons_taught}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="about_lessons">About Lessons</label>
          <textarea
            className="form-control"
            id="about_lessons"
            name="about_lessons"
            value={formData.about_lessons}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="about_you">About You</label>
          <textarea
            className="form-control"
            id="about_you"
            name="about_you"
            value={formData.about_you}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location_preference">Location Preference</label>
          <input
            type="text"
            className="form-control"
            id="location_preference"
            name="location_preference"
            value={formData.location_preference}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="levels">Levels</label>
          <input
            type="text"
            className="form-control"
            id="levels"
            name="levels"
            value={formData.levels}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hourly_rate">Hourly Rate</label>
          <input
            type="number"
            className="form-control"
            id="hourly_rate"
            name="hourly_rate"
            value={formData.hourly_rate}
            onChange={handleChange}
            required
          />
        </div>
       
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTutorAdForm;
