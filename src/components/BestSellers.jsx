import React, { useState } from "react";
import BestProducts from "./BestProducts";
import Product404 from "./ProductNotFound";
import { AllProducts } from "../database/productsDatabase";
import { useEffect } from "react";
import { useRef } from "react";

const BestSellers = () => {
  const autoBtn = useRef(null);
  const [activeBtn, setActiveBtn] = useState({});
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    autoBtn.current.click();
  }, []);
  const bestsHandler = (event) => {
    if (event.target.id === "offers__btn") {
      const copyData = [...AllProducts];
      copyData.forEach((product) => {
        product["offer"] =
          (product.priceOff - product.priceOn * 100) / product.priceOn;
      });
      const sortedArray = copyData.sort((a, b) => {
        return b.offer - a.offer;
      });
      setProductList(sortedArray.slice(0, 6));
      setActiveBtn({ popular: false, news: false, offers: true });
    }
    if (event.target.id === "news__btn") {
      const sortedArray = AllProducts.sort((a, b) => {
        return a.date - b.date;
      });
      setProductList(sortedArray.slice(0, 6));
      setActiveBtn({
        popular: false,
        news: true,
        offers: false,
      });
    }
    if (event.target.id === "popular__btn") {
      const topRatedItems = AllProducts.filter((item) => {
        return item.rate >= 4.5;
      });
      const topSellers = topRatedItems.sort((a, b) => {
        return b.reviews - a.reviews;
      });
      setActiveBtn({
        popular: true,
        news: false,
        offers: false,
      });
      setProductList(topSellers.slice(0, 6));
    }
  };

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
          id={"popular__btn"}
          onClick={() => bestsHandler(event)}
          ref={autoBtn}
        >
          محبوب ترین ها
        </button>
        <button
          className={
            activeBtn.news
              ? "best-sellers__btn best-sellers__btn-active"
              : "best-sellers__btn"
          }
          id={"news__btn"}
          onClick={() => bestsHandler(event)}
        >
          تازه ترین ها
        </button>
        <button
          className={
            activeBtn.offers
              ? "best-sellers__btn best-sellers__btn-active"
              : "best-sellers__btn"
          }
          id={"offers__btn"}
          onClick={() => bestsHandler(event)}
        >
          پرتخفیف ترین ها
        </button>
      </div>
      <div className="best-sellers__products-container">
        <div className="best-sellers__products">
          {ProductList.length ? (
            ProductList.map((item) => {
              return <BestProducts {...item} key={item.id} />;
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
