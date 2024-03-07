import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Imagedisplay = ({ userId }) => {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/api/user_images/${userId}`);
        setImagePath(`/storage/${response.data.image_path}`);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    if (userId) {
      fetchImage();
    }
  }, [userId]);

  return (
    <div>
      {imagePath ? (
        <img src={imagePath} alt="User Image" />
      ) : (
        <p>No image found for the user</p>
      )}
    </div>
  );
};

export default Imagedisplay;
