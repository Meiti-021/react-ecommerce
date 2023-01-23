import React from "react";
import StarRating from "./StarRating";
import { FiShoppingCart } from "../database/icons";

const BestProducts = ({
  id,
  name,
  offer,
  reviews,
  rate,
  priceOn,
  PriceOff,
}) => {
  return (
    <article className="best-product">
      <h3 className="best-product__title">{name}</h3>
      <figure className="best-product__figure">
        <img
          src={`./assets/products/${id}`}
          alt=""
          className="best-product__image"
        />
        {PriceOff && (
          <div className="best-product__offer">
            <p>تخفیف</p>
            <p>{`${(+PriceOff * 100) / +priceOn}%`}</p>
          </div>
        )}
      </figure>
      <div className="best-product-rating">
        <StarRating rate={rate} />
        <span className="rate-number">
          ({reviews}) {rate}
        </span>
      </div>
      <div className="best-product__condition">موجود</div>
      <div className="best-product__footer">
        <div className="best-product__price">
          <p className="off-price">{PriceOff || 0} تومان</p>
          <p className="on-price">{priceOn} تومان</p>
        </div>
        <div className="best-product__btns">
          <a href="#" className="best-product__buy-link">
            <FiShoppingCart />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BestProducts;
