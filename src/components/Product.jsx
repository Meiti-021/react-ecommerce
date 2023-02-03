import React from "react";
import { FaShoppingCart, RiHeart3Line, BiSupport } from "../database/icons";

const Product = ({ name, id, priceOff, priceOn, exist }) => {
  return (
    <div className="product">
      <p className="product__off">{exist ? "موجود" : "ناموجود"}</p>
      <div className="product__btns">
        <button>
          <RiHeart3Line />
        </button>
        <button>
          <BiSupport />
        </button>
      </div>
      <figure>
        <img src={`./assets/products/${id}`} alt="" />
      </figure>
      <p className="product__name">{name}</p>
      <div className="product__footer">
        <div className="product__footer-price">
          {priceOff ? (
            <p className="product__price-on">
              {priceOn} <span>تومان</span>
            </p>
          ) : (
            void 0
          )}
          <p className="product__price-offer">
            {priceOff ? priceOff : priceOn} <span>تومان</span>
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
