import React from "react";

const Service = ({ icon, title, description }) => {
  return (
    <div className="service">
      <div className="service__icon">{icon}</div>
      <div className="service__text">
        <p className="service__title">{title}</p>
        <p className="service__description">{description}</p>
      </div>
    </div>
  );
};

export default Service;
