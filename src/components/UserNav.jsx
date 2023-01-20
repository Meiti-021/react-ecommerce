import React from "react";
import { FiShoppingCart } from "../database/icons";
const UserNav = ({ notification, icon }) => {
  return (
    <div className="user-nav">
      <div className="user-nav__icon">
        {icon}
        {notification && (
          <span className="user-nav__counter">{notification}</span>
        )}
      </div>
    </div>
  );
};

export default UserNav;
