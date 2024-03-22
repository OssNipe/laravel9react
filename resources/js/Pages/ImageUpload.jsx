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
    <div class="p-4">
    
    {errorMessage && <div class="text-red-500">{errorMessage}</div>}
    {successMessage && <div class="text-green-500">{successMessage}</div>}
    <div className="logo-container w-80  h-80 flex justify-center items-center rounded-full overflow-hidden translate-x-[800px] ">
            <img src={imagePath} alt="User Logo" className="logo-image w-full h-full object-cover rounded-full" />
    </div>
    <div class=" translate-x-[680px]">
    <input type="file" onChange={handleFileChange} class="mb-2 "  />
    <button onClick={uploadImage} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Upload Image
    </button>
    </div>
  </div>
  
  );
};

export default ImageUploadAndDisplayComponent;
