import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BestProductsSlice from "../stats/features/BestSellersSlice";

const BestSellers = () => {
  const [activeBtn, setActiveBtn] = useState({
    popular: true,
    news: false,
    offers: false,
  });
  const x = useSelector((state) => state.bests);
  console.log(x);
  return (
    <div className="best-sellers">
      <h2 className="best-sellers__title">برترین ها</h2>
      <div className="best-sellers__headers">
        <button
          className={
            activeBtn.popular
              ? "best-sellers__btn best-sellers__btn-active"
              : "best-sellers__btn"
          }
        >
          محبوب ترین ها
        </button>
        <button
          className={
            activeBtn.news
              ? "best-sellers__btn best-sellers__btn-active"
              : "best-sellers__btn"
          }
        >
          تازه ترین ها
        </button>
        <button
          className={
            activeBtn.offers
              ? "best-sellers__btn best-sellers__btn-active"
              : "best-sellers__btn"
          }
        >
          پرتخفیف ترین ها
        </button>
      </div>
      <div className="best-sellers__products"></div>
    </div>
  );
};

export default BestSellers;
