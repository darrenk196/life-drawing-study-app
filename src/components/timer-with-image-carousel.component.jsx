import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./timer-with-image-carousel.style.css";

const TimerWithImageCarousel = ({ timeInSeconds, onTimerEnd, images }) => {
  const [timer, setTimer] = useState(timeInSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    let timerId = null;
    if (isRunning && timer > 0) {
      timerId = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      onTimerEnd();
      setIsRunning(false);
      setTimer(timeInSeconds); // reset timer
      setCurrentIndex((currentIndex + 1) % images.length); // advance image
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [
    isRunning,
    timer,
    onTimerEnd,
    timeInSeconds,
    currentIndex,
    images.length,
  ]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setTimer(timeInSeconds); // reset timer
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setTimer(timeInSeconds); // reset timer
  };

  const handleToggleFullscreen = () => {
    setShowFullscreen(!showFullscreen);
  };

  const handleTogglePlayPause = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setTimer(timeInSeconds);
    setCurrentIndex(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-with-image-carousel">
      <h1 className="timer-title">Countdown Timer</h1>
      <div className="timer-display">
        <span className="timer">{timer}</span>
      </div>
      <div className="image-container">
        <button
          className="carousel-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <div className="image-wrapper">
          <h3>Click the image for full screen.</h3>
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt="carousel"
            onClick={handleToggleFullscreen}
          />
        </div>
        <button
          className="carousel-button"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
      <div className="button-container">
        <button className="timer-button" onClick={handleTogglePlayPause}>
          {isRunning ? "Pause" : "Play"}
        </button>
        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {showFullscreen && (
        <div className="fullscreen-mode">
          <img
            className="fullscreen-image"
            src={images[currentIndex]}
            alt="fullscreen"
            onClick={handleToggleFullscreen}
          />
        </div>
      )}
    </div>
  );
};

TimerWithImageCarousel.propTypes = {
  timeInSeconds: PropTypes.number,
  onTimerEnd: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.string),
};

TimerWithImageCarousel.defaultProps = {
  timeInSeconds: 0,
  onTimerEnd: () => {},
  images: [],
};

export default TimerWithImageCarousel;
