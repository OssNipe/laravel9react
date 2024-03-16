import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploadAndDisplayComponent = ({ userId }) => {
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

  return (
    <div className="logo-container w-12 h-12 flex justify-center items-center rounded-full overflow-hidden mt-[-10px]">
    <img src={imagePath} alt="User Logo" className="logo-image w-full h-full object-cover" />
  </div>
   
  );
};

export default ImageUploadAndDisplayComponent;
