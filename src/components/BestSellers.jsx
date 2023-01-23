import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BestProducts from "./BestProducts";
import { setPopular } from "../stats/features/BestSellersSlice";
import Product404 from "./ProductNotFound";

const BestSellers = () => {
  const [activeBtn, setActiveBtn] = useState({
    popular: true,
    news: false,
    offers: false,
  });
  const ProductList = useSelector((state) => state.bests.products);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(setPopular());
  }, []);

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
      <div className="best-sellers__products-container">
        <div className="best-sellers__products">
          {ProductList.length ? (
            ProductList.map((item) => {
              return <BestProducts {...item} />;
            })
          ) : (
            <Product404 />
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
