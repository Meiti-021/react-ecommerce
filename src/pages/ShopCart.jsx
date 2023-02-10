import React, { useState } from "react";
import { AllProducts } from "../database/productsDatabase";
import ShopCartItem from "./ShopcartItem";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import ProductNotFound from "../components/ProductNotFound";
const Shopcart = () => {
  const [product, setProduct] = useState(AllProducts.slice(0, 7));
  const { productList } = useSelector((state) => state.cart);
  return (
    <div className="shop-cart">
      <h1>سبد خرید شما</h1>
      <div className="shop-cart-products">
        {productList.length ? (
          product.map((item) => {
            return <ShopCartItem {...item} />;
          })
        ) : (
          <ProductNotFound />
        )}
      </div>
      <div className="shop-cart-total-price">
        <p>مجموع: 21000000 تومان</p>
        <button className="add-to-cart">
          ثبت سفارش
          <FiShoppingCart className="add-to-cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default Shopcart;
