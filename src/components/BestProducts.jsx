import React from "react";
import StarRating from "./StarRating";
import { FiShoppingCart } from "../database/icons";
import { Link } from "react-router-dom";

const BestProducts = ({
  id,
  name,
  reviews,
  rate,
  priceOn,
  priceOff,
  exist,
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
        {priceOn - priceOff ? (
          <div className="best-product__offer">
            <p>تخفیف</p>
            <p className="number">{`${Math.abs(
              Math.floor(((priceOn - priceOff) * 100) / priceOn)
            )}%`}</p>
          </div>
        ) : (
          void 0
        )}
      </figure>
      <div className="best-product-rating">
        <StarRating rate={rate} />
        <span className="rate-number number">
          ({reviews}) {rate}
        </span>
      </div>
      {exist ? (
        <div
          className="best-product__condition"
          style={{ color: "rgb(123, 194, 17)" }}
        >
          موجود
        </div>
      ) : (
        <div className="best-product__condition" style={{ color: "red" }}>
          ناموجود
        </div>
      )}

      <div className="best-product__footer">
        <div className="best-product__price">
          {priceOn - priceOff !== 0 && (
            <p className="off-price">
              <span className="number">{priceOn}</span> تومان
            </p>
          )}
          <p className="on-price">
            <span className="number">{priceOff} </span> تومان
          </p>
        </div>
        <div className="best-product__btns">
          <Link
            to={`/products/${id.split(".")[0]}`}
            className="best-product__buy-link"
          >
            <FiShoppingCart />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BestProducts;
