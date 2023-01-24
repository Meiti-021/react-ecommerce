import React from "react";
import { FiShoppingCart, RiHeart3Line } from "../database/icons";

const LastDealerProduct = ({ id, name }) => {
  return (
    <article className="last-dealer-product">
      <figure className="last-dealer-product__figure">
        <img src={`./assets/products/${id}`} alt="" />
      </figure>
      <p className="last-dealer-product__title">{name}</p>
      <div className="last-dealer-product__btns">
        <button className="last-dealer-product-btn">
          <FiShoppingCart />
        </button>
        <button className="last-dealer-product-btn">
          <RiHeart3Line />
        </button>
      </div>
    </article>
  );
};

export default LastDealerProduct;
