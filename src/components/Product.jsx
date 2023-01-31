import React from "react";
import { FaShoppingCart, RiHeart3Line, BiSupport } from "../database/icons";

const Product = () => {
  return (
    <div className="product">
      <p className="product__off">10%</p>
      <div className="product__btns">
        <button>
          <RiHeart3Line />
        </button>
        <button>
          <BiSupport />
        </button>
      </div>
      <figure>
        <img src="./assets/products/f80ada.jpg" alt="" />
      </figure>
      <p className="product__name">
        گوشی موبایل شیائومی Mi 10 Lite 5G ظرفیت 128/6 گیگابایت
      </p>
      <div className="product__footer">
        <div className="product__footer-price">
          <p className="product__price-on">
            21000000 <span>تومان</span>
          </p>
          <p className="product__price-offer">
            2000000 <span>تومان</span>
          </p>
        </div>
        <div className="product__footer-link">
          <a href="#">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
