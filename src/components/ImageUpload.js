import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      const response = await axios.post('http://localhost:8000/api/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onImageUpload(response.data.imageUrl); // Assuming the backend returns the image URL
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
