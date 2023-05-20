// Study.js
import React, { useState, useEffect } from "react";
import TimerWithImageCarousel from "./timer-with-image-carousel.component";
import ImageUploader from "./image-selection.component";
import { useNavigate } from "react-router-dom";
import "./study.style.css";

const Study = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [generatedUrls, setGeneratedUrls] = useState([]);
  const [timeInSeconds, setTimeInSeconds] = useState(30);
  const [studyCompleted, setStudyCompleted] = useState(false);

  useEffect(() => {
    return () => {
      // Cleanup function to revoke URLs when they're no longer needed
      generatedUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [generatedUrls]);

  const handleTimerEnd = () => {
    if (currentImageIndex === generatedUrls.length - 1) {
      setCurrentImageIndex(0);
      setStudyCompleted(true);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleUrlsGenerated = (urls) => {
    setGeneratedUrls(urls);
    setStudyCompleted(false); // Reset studyCompleted when new images are uploaded
  };

  const handleTimeSelect = (selectedTime) => {
    setTimeInSeconds(selectedTime);
  };

  const handleResetStudy = () => {
    setGeneratedUrls([]);
    setCurrentImageIndex(0);
    setTimeInSeconds(30);
    setStudyCompleted(false);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="study-page">
      <div className="study-header">
        {studyCompleted && <h2>Study Completed!</h2>}
        <button
          onClick={handleResetStudy}
          className="study-button reset-button"
        >
          Reset Study!
        </button>
        <button onClick={goHome} className="study-button home-button">
          Home
        </button>
      </div>
      <div className="study-content">
        {generatedUrls.length > 0 ? (
          <TimerWithImageCarousel
            timeInSeconds={timeInSeconds}
            onTimerEnd={handleTimerEnd}
            images={generatedUrls}
          />
        ) : (
          <ImageUploader
            onUrlsGenerated={handleUrlsGenerated}
            onTimeSelect={handleTimeSelect}
          />
        )}
      </div>
    </div>
  );
};

export default Study;
