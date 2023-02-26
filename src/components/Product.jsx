import React, { useEffect } from "react";
import { FiShoppingCart, RiHeart3Line, BiSupport } from "../database/icons";
import { Link } from "react-router-dom";

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
              <span className="number">{priceOn}</span> <span>تومان</span>
            </p>
          ) : (
            void 0
          )}
          <p className="product__price-offer">
            <span className="number">{priceOff ? priceOff : priceOn}</span>{" "}
            <span>تومان</span>
          </p>
        </div>
        <div className="product__footer-link">
          <Link to={`/products/${id.split(".")[0]}`}>
            <FiShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
