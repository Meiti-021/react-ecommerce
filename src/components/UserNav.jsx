import React from "react";
import { useSelector } from "react-redux";
const UserNav = ({ id, icon }) => {
  const { wishList, productList } = useSelector((state) => state.cart);
  return (
    <div className="user-nav">
      <div className="user-nav__icon">
        {icon}
        {id === "nav-wish-list" && wishList.length ? (
          <span className="user-nav__counter">{wishList.length}</span>
        ) : id === "nav-cart" && productList.length ? (
          <span className="user-nav__counter">{productList.length}</span>
        ) : (
          void 0
        )}
      </div>
    </div>
  );
};

export default UserNav;
