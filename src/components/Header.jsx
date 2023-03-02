import React, { useEffect, useRef } from "react";
import { FaShopify, TfiMenu, BsSearch } from "../database/icons";
import { headerOption, navList, userNavInfo } from "../database/mockdata";
import HeaderOption from "./HeaderOption";
import { NavLink, useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../stats/features/ShopCartSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSideNavOpen(false);
  }, [location]);
  const searchInput = useRef(null);
  const searchInputNav = useRef(null);

  return (
    <header className="header">
      <div className="top-head">
        <div className="logo">
          shopify
          <FaShopify />
        </div>
        <div className="search-product">
          <input
            type="search"
            placeholder="نام محصول را وارد کنید"
            ref={searchInput}
          />
          <Link
            to="/search"
            onClick={() => {
              dispatch(searchProduct(searchInput.current.value));
            }}
            className="link-btn"
          >
            جستجو
          </Link>
        </div>
        <div className="header-options">
          {headerOption.map((option) => {
            return <HeaderOption {...option} key={option.id} />;
          })}
        </div>
        <ul className="nav__user nav__user-tophead">
          {userNavInfo.map((item) => {
            return <UserNav {...item} key={item.id} />;
          })}
        </ul>
      </div>
      <nav className="nav">
        <button
          className="nav__categories"
          onClick={() => {
            navigate("/all-products");
          }}
        >
          <TfiMenu />
          همه دسته ها
        </button>
        <ul className="nav__list">
          {navList.map((item) => {
            return (
              <li className="nav-item" key={item.content}>
                <NavLink className="nav-link" to={item.address}>
                  {item.content}
                </NavLink>
                <span className="nav-item__active"></span>
              </li>
            );
          })}
        </ul>
        <ul className="nav__user">
          {userNavInfo.map((item) => {
            return <UserNav {...item} key={item.id} />;
          })}
        </ul>
        <div className="modal-btns">
          <button
            className="search-modal-open"
            onClick={() => {
              if (isSideNavOpen) {
                setIsSideNavOpen(false);
              } else {
                setIsSideNavOpen(true);
              }
            }}
          >
            <BsSearch />
          </button>
          <button
            className={
              isSideNavOpen
                ? "search-modal-open nav-bar-menu-modal"
                : "search-modal-open"
            }
            onClick={() => {
              if (isSideNavOpen) {
                setIsSideNavOpen(false);
              } else {
                setIsSideNavOpen(true);
              }
            }}
          >
            <TfiMenu />
          </button>
        </div>
      </nav>
      <ul
        className="side-nav"
        style={
          isSideNavOpen ? { right: "0px", opacity: "1" } : { right: "-100vw" }
        }
      >
        <li className="nav-item side-nav-serach">
          <input
            type="search"
            placeholder="نام محصول را وارد کنید"
            ref={searchInputNav}
          />
          <Link
            to="/search"
            onClick={() => {
              dispatch(searchProduct(searchInputNav.current.value));
            }}
            className="side-nav-search-btn"
          >
            <BsSearch />
          </Link>
        </li>
        {navList.map((item) => {
          return (
            <li className="nav-item" key={item.content}>
              <NavLink className="nav-link" to={item.address}>
                {item.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
