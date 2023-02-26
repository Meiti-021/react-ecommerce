import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../stats/features/UserSlice";
const UserNav = ({ id, icon, address }) => {
  const disPatch = useDispatch();
  const { wishList, productList } = useSelector((state) => state.cart);
  const { alerts } = useSelector((state) => state.user);
  const [notification, setNotification] = useState(false);
  const [count, setCount] = useState({
    wishListCount: 0,
    productListCount: 0,
  });
  useEffect(() => {
    if (alerts[id]) {
      setNotification(alerts[id]);
    }
  }, [alerts[id]]);
  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification(false);
      }, 5000);
      disPatch(setAlert({ id: id, message: false }));
    }
  }, [notification]);
  useEffect(() => {
    setCount({
      wishListCount: wishList.length,
      productListCount: productList.length,
    });
  }, [wishList.length, productList.length]);
  return (
    <div className="user-nav">
      <Link className="user-nav-link" to={address}>
        <div className="user-nav__icon">
          {icon}
          {id === "navwishlist" && wishList.length ? (
            <span className="user-nav__counter number">
              {count.wishListCount}
            </span>
          ) : id === "navcart" && productList.length ? (
            <span className="user-nav__counter number">
              {count.productListCount}
            </span>
          ) : (
            void 0
          )}
        </div>
      </Link>
      <div
        className="user-nav__alert"
        style={
          notification
            ? { display: "flex" }
            : {
                display: "none",
              }
        }
      >
        <span></span>
        <p>{notification}</p>
      </div>
    </div>
  );
};

export default UserNav;
