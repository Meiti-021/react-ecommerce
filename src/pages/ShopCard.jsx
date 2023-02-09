import React, { useState } from "react";
import { AllProducts } from "../database/productsDatabase";
import ShopCardItem from "./ShopCardItem";
import { FiShoppingCart } from "react-icons/fi";
const ShopCard = () => {
  const [product, setProduct] = useState(AllProducts.slice(0, 7));
  return (
    <div className="shop-card">
      <h1>سبد خرید شما</h1>
      <div className="shop-card-products">
        {product.map((item) => {
          return <ShopCardItem />;
        })}
      </div>
      <div className="shop-card-total-price">
        <p>مجموع: 21000000 تومان</p>
        <button className="add-to-card">
          ثبت سفارش
          <FiShoppingCart className="add-to-card-icon" />
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
