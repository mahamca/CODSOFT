// FileUpload.js
import React from 'react';
import axios from 'axios';

const FileUpload = ({ onUpload }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await axios.post('http://127.0.0.1:4002/upload/upload', formData);
        onUpload();
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return <input type="file" accept="application/pdf" onChange={handleFileChange} />;
};

export default FileUpload;
