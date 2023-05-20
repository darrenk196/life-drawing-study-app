// TimeSelector.js
import React, { useState } from "react";

const TimeSelector = ({ selectedTime, onTimeSelect }) => {
  const [customTime, setCustomTime] = useState("");
  const timeOptions = [30, 60, 120, 180, 300, 420]; // Example time options

  const handleTimeChange = (event) => {
    const selectedTime = parseInt(event.target.value);
    setCustomTime("");
    onTimeSelect(selectedTime);
  };

  const handleCustomTimeChange = (event) => {
    const customTime = parseInt(event.target.value);
    setCustomTime(event.target.value);
    onTimeSelect(customTime * 60); // Convert minutes to seconds
  };

  const handleCustomTimeBlur = () => {
    if (customTime === "") {
      onTimeSelect(timeOptions[0]); // Default to first option
    }
  };

  const getTimeInMinutes = (timeInSeconds) => {
    return timeInSeconds / 60;
  };

  return (
    <div className="time-selector">
      <label htmlFor="timeSelect">Select Time:</label>
      <select
        id="timeSelect"
        value={customTime === "" ? selectedTime : ""}
        onChange={handleTimeChange}
        className="time-select"
      >
        {timeOptions.map((time) => (
          <option key={time} value={time}>
            {getTimeInMinutes(time)} minutes ({time} seconds)
          </option>
        ))}
        <option value="">Custom</option>
      </select>
      <div className="custom-time-input">
        <label htmlFor="customTime">Enter time in minutes:</label>
        <input
          type="number"
          id="customTime"
          min="1"
          value={customTime}
          onChange={handleCustomTimeChange}
          onBlur={handleCustomTimeBlur}
          className="custom-time-input-field"
        />
      </div>
    </div>
  );
};

export default TimeSelector;
