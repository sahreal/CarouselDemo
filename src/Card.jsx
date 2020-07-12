import React from "react";
import "./styles.css";

const Card = ({ image }) => {
  return (
    <div className="card-container">
      <div className="backdrop">
        <img src={image.pic} alt={image.id} />
      </div>
    </div>
  );
};

export default Card;
