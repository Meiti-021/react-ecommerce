import React from "react";

const Brand = ({ icon, color, size }) => {
  return (
    <div className="brand " style={{ color: color, fontSize: size }}>
      {icon}
    </div>
  );
};

export default Brand;
