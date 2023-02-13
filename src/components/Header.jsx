import React from "react";
import { FaShopify, TfiMenu, BsSearch } from "../database/icons";
import { headerOption, navList, userNavInfo } from "../database/mockdata";
import HeaderOption from "./HeaderOption";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <header className="header">
      <div className="top-head">
        <div className="logo">
          shopify
          <FaShopify />
        </div>
        <div className="search-product">
          <input type="search" placeholder="نام محصول را وارد کنید" />
          <button>جستجو</button>
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
        <button className="nav__categories">
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
          <button className="search-modal-open">
            <BsSearch />
          </button>
          <button className="search-modal-open">
            <TfiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
