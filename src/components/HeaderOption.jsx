import React from "react";

const HeaderOption = ({ icon, content }) => {
  return (
    <div className="HeaderOption">
      <div className="HeaderOptionIcon">{icon}</div>
      <div className="HeaderOptionContent">{content}</div>
    </div>
  );
};

export default HeaderOption;
