import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing-page.style.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/study");
  };

  return (
    <div className="landing-page">
      <div className="background-images">
        <img
          className="img-1"
          src="https://images.unsplash.com/photo-1458312732998-763933ed4896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmlndXJlJTIwZHJhd2luZyUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
          alt="colage of people drawing"
        />
        <img
          className="img-2"
          src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlndXJlJTIwZHJhd2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
          alt="colage of people drawing"
        />
        <img
          className="img-3"
          src="https://images.unsplash.com/photo-1529038578964-1a563e9a15e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZpZ3VyZSUyMGRyYXdpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"
          alt="colage of people drawing"
        />
        <img
          className="img-4"
          src="https://images.unsplash.com/photo-1528415784548-1850e0fc8c57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmaWd1cmUlMjBkcmF3aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
          alt="colage of people drawing"
        />
      </div>
      <div className="content">
        <h1 className="title">Life Drawing Study Aid</h1>
        <p className="description">
          Enhance your life drawing skills with photo references and timed
          sessions.
        </p>
        <button onClick={handleClick} className="start-button">
          Start Studying!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
