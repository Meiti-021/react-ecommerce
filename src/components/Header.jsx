import React from "react";
import { FaShopify, TfiMenu } from "../database/icons";
import { headerOption, navList } from "../database/mockdata";
import HeaderOption from "./HeaderOption";
import { NavLink } from "react-router-dom";

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
      </div>
      <nav className="nav">
        <button className="nav__categories">
          <TfiMenu />
          همه دسته ها
        </button>
        <ul className="nav__list">
          {navList.map((item) => {
            return (
              <li className="nav-item">
                <a href="#">{item.content}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
