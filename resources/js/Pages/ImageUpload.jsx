import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadComponent = ({ userId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      setErrorMessage('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('user_id', userId); // Append user ID to the form data

    try {
      const response = await axios.post('/api/User_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setSuccessMessage('Image uploaded successfully.');
        setSelectedImage(null);
        setErrorMessage('');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadImage}>Upload Image</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
    </div>
  );
};

export default ImageUploadComponent;
