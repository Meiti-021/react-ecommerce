import React, { useEffect, useState } from "react";
import { AllProducts } from "../database/productsDatabase";
import ShopCartItem from "./ShopcartItem";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import ProductNotFound from "../components/ProductNotFound";
const Shopcart = () => {
  const { productList } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    productList.forEach((element) => {
      total += element.amount * element.priceOn;
    });
    setTotalPrice(total);
  }, [productList]);
  return (
    <div className="shop-cart">
      <h1>سبد خرید شما</h1>
      <div className="shop-cart-products">
        {productList.length ? (
          productList.map((item) => {
            return <ShopCartItem {...item} key={item.id} />;
          })
        ) : (
          <ProductNotFound />
        )}
      </div>
      <div className="shop-cart-total-price">
        <p>مجموع: {totalPrice} تومان</p>
        <button className="add-to-cart">
          ثبت سفارش
          <FiShoppingCart className="add-to-cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default Shopcart;
