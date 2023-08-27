import { useState } from "react";
import "./PhotoCard.css";

const PhotoCard = ({ photo, label }: { photo: string; label: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img src={photo} className="card-image" />
      <div className="card-label overlay">
        <p>{label}</p>
      </div>
      <button className="delete-btn overlay">delete</button>
    </div>
  );
};

export default PhotoCard;
