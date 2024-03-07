import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploadAndDisplayComponent = ({ userId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    fetchImage();
  }, [userId]);

  const fetchImage = async () => {
    try {
      const response = await axios.get(`/api/user_images/${userId}`);
      setImagePath(`/storage/${response.data.image_path}`);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

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
    formData.append('user_id', userId);

    try {
      const response = await axios.post('/api/user_images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setSuccessMessage('Image uploaded successfully.');
        setSelectedImage(null);
        setErrorMessage('');
        
        // Fetch the updated image path
        fetchImage();
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
      <div>
        
          <img src={imagePath} alt="User Image" />
     
      </div>
    </div>
  );
};

export default ImageUploadAndDisplayComponent;
