import React, { useState, useRef } from "react";
import Product404 from "./ProductNotFound";
import { AllProducts } from "../database/productsDatabase";
import { useEffect } from "react";
import LastDealerProduct from "./LastDealerProduct";

const LastDealers = () => {
  const [activeBtn, setActiveBtn] = useState({});
  const [ProductList, setProductList] = useState([]);
  const autoBtn = useRef(null);
  useEffect(() => {
    autoBtn.current.click();
  }, []);
  useEffect(() => {
    setProductList(AllProducts.slice(0, 5));
  }, []);
  const clickHandler = (event) => {
    if (event.target.id === "app-btn") {
      const appProducts = AllProducts.filter((product) => {
        return product.categories.indexOf("Appliance") > -1;
      });
      setActiveBtn({
        tv: false,
        mobile: false,
        it: false,
        app: true,
      });
      setProductList(appProducts.slice(0, 5));
    } else if (event.target.id === "tv-btn") {
      const appProducts = AllProducts.filter((product) => {
        return product.categories.indexOf("Tv") > -1;
      });
      setActiveBtn({
        tv: true,
        mobile: false,
        it: false,
        app: false,
      });
      setProductList(appProducts.slice(0, 5));
    } else if (event.target.id === "it-btn") {
      const appProducts = AllProducts.filter((product) => {
        return product.categories.indexOf("IT") > -1;
      });
      setActiveBtn({
        tv: false,
        mobile: false,
        it: true,
        app: false,
      });
      setProductList(appProducts.slice(0, 5));
    } else if (event.target.id === "mobile-btn") {
      const appProducts = AllProducts.filter((product) => {
        return product.categories.indexOf("Mobile") > -1;
      });
      setActiveBtn({
        tv: false,
        mobile: true,
        it: false,
        app: false,
      });
      setProductList(appProducts.slice(0, 5));
    }
  };
  return (
    <div className="last-dealers">
      <h2 className="last-dealers__title">آخرین معاملات</h2>
      <div className="last-dealers__headers">
        <button
          className={
            activeBtn.tv
              ? "last-dealers__btn last-dealers__btn-active"
              : "last-dealers__btn"
          }
          id={"tv-btn"}
          onClick={() => clickHandler(event)}
        >
          تلوزیون
        </button>
        <button
          className={
            activeBtn.mobile
              ? "last-dealers__btn last-dealers__btn-active"
              : "last-dealers__btn"
          }
          id={"mobile-btn"}
          onClick={() => clickHandler(event)}
        >
          موبایل
        </button>
        <button
          className={
            activeBtn.it
              ? "last-dealers__btn last-dealers__btn-active"
              : "last-dealers__btn"
          }
          id={"it-btn"}
          onClick={() => clickHandler(event)}
        >
          لبتاپ
        </button>

        <button
          className={
            activeBtn.app
              ? "last-dealers__btn last-dealers__btn-active"
              : "last-dealers__btn"
          }
          id={"app-btn"}
          onClick={() => clickHandler(event)}
          ref={autoBtn}
        >
          لوازم جانبی
        </button>
      </div>
      <div className="last-dealers__products-container">
        <div
          className={
            ProductList.length
              ? "last-dealers__products"
              : "last-dealers__products-empty"
          }
        >
          {ProductList.length ? (
            ProductList.map((item) => {
              return <LastDealerProduct {...item} key={item.id} />;
            })
          ) : (
            <Product404 />
          )}
        </div>
      </div>
    </div>
  );
};

export default LastDealers;
