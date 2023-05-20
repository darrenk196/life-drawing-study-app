// ImageUploader.js
import React, { useState } from "react";
import TimeSelector from "./time-selector.component";
import "./image-selection.style.css";

const MAX_IMAGES = 5; // Maximum number of images a user can upload

const ImageUploader = ({ onUrlsGenerated, onTimeSelect }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedTime, setSelectedTime] = useState(30);
  const [errorMessage, setErrorMessage] = useState(""); // For showing error messages

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const images = files.filter((file) => file.type.startsWith("image/")); // Ensure the files are images
    if (images.length + uploadedImages.length > MAX_IMAGES) {
      setErrorMessage(`You can upload a maximum of ${MAX_IMAGES} images.`);
    } else {
      setUploadedImages([...uploadedImages, ...images]);
      setErrorMessage("");
    }
  };

  const handleRemoveImage = (index) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const handleGenerateData = () => {
    if (uploadedImages.length === 0) {
      setErrorMessage("You must upload at least one image.");
    } else {
      const urls = uploadedImages.map((file) => URL.createObjectURL(file));
      onUrlsGenerated(urls);
      setErrorMessage("");
    }
  };

  const handleTimeChange = (selectedTime) => {
    setSelectedTime(selectedTime);
    onTimeSelect(selectedTime);
  };

  return (
    <div className="image-uploader">
      <input
        type="file"
        multiple
        onChange={handleFileUpload}
        className="input-reset ba b--black-20 pa2 mb4 db center"
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="uploaded-images">
        {uploadedImages.map((file, index) => (
          <div className="image-preview" key={index}>
            <img
              className="preview-image"
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      <TimeSelector
        selectedTime={selectedTime}
        onTimeSelect={handleTimeChange}
      />
      <button onClick={handleGenerateData} className="start-button">
        Begin Study!
      </button>
    </div>
  );
};

export default ImageUploader;
