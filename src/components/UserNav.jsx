import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const UserNav = ({ id, icon, address }) => {
  const { wishList, productList } = useSelector((state) => state.cart);
  return (
    <div className="user-nav">
      <Link className="user-nav-link" to={address}>
        <div className="user-nav__icon">
          {icon}
          {id === "nav-wish-list" && wishList.length ? (
            <span className="user-nav__counter number">{wishList.length}</span>
          ) : id === "nav-cart" && productList.length ? (
            <span className="user-nav__counter number">
              {productList.length}
            </span>
          ) : (
            void 0
          )}
        </div>
      </Link>
    </div>
  );
};

export default UserNav;
