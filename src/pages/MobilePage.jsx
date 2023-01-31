import React from "react";
import Product from "../components/Product";
import { FaSortAmountDownAlt } from "../database/icons";
import { AllProducts } from "../database/productsDatabase";

const MobilePage = () => {
  return (
    <div className="mobile-page">
      <p className="page-address">خانه / موبایل</p>
      <div className="head-menu">
        <p className="product-counter">نمایش X محصول از y محصول</p>
        <FaSortAmountDownAlt />
        <select className="head-menu-drop-down">
          <option value="latest">آخرین محصولات</option>
          <option value="price">قیمت ها</option>
          <option value="alphabet">الفبا</option>
          <option value="offers">تخفیف ها</option>
        </select>
      </div>
      <div className="mobile-page-product-container">
        <div className="mobile-page__products">
          <div className="mobile-page__products-side-menu">
            <p className="filter-title">نمایش محصولات برحسب: </p>
            <div className="filter-by">
              <p>هسته پردازنده </p>
              <div className="input-group">
                <button id="8core" className="input-group-btn">
                  8 هسته ای
                </button>
                <button id="4core" className="input-group-btn">
                  4 هسته ای
                </button>
                <button id="2core" className="input-group-btn">
                  2 هسته ای
                </button>
              </div>
            </div>
            <div className="filter-by">
              <p>رم </p>
              <div className="input-group">
                <button id="16ram" className="input-group-btn">
                  16 GB
                </button>
                <button id="8ram" className="input-group-btn">
                  8 GB
                </button>
                <button id="4ram" className="input-group-btn">
                  4 GB
                </button>
              </div>
            </div>
            <div className="filter-by">
              <p>وضوح دوربین </p>
              <div className="input-group">
                <button id="108mgpx" className="input-group-btn">
                  108 مگاپیکسل
                </button>
                <button id="60mgpx" className="input-group-btn">
                  60 مگاپیکسل
                </button>
              </div>
            </div>
            <div className="filter-by">
              <p>محدودیت قیمت </p>
              <div className="input-group input-price-group">
                <input
                  type="number"
                  name="price-from"
                  id="price-from"
                  placeholder="از :"
                  min={1_000_000}
                  max={30_000_000}
                />
                <input
                  type="number"
                  name="price-end"
                  id="price-end"
                  placeholder=" تا :"
                  min={1_000_000}
                  max={30_000_000}
                />
              </div>
            </div>
          </div>
          <div className="mobile-page__products-show">
            {AllProducts.slice(0, 6).map((product) => {
              return <Product />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
