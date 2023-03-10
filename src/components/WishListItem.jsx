import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoCloseCircle, FiShoppingCart } from "../database/icons";
import { AllProducts } from "../database/productsDatabase";

import {
  addProduct,
  removeItemWishList,
} from "../stats/features/ShopCartSlice";
const WishListItem = ({ name, priceOn, id }) => {
  const disPatch = useDispatch();
  const [product, setProduct] = useState(AllProducts[0]);
  useEffect(() => {
    const mainProduct = AllProducts.find((item) => {
      return item.id === id;
    });
    setProduct(mainProduct);
  }, []);
  return (
    <div className="wish-list-item">
      <button
        className="remove-item"
        onClick={() => {
          disPatch(removeItemWishList(id));
        }}
      >
        <IoCloseCircle />
      </button>
      <div className="info">
        <figure>
          <img src={`./assets/products/${id}`} alt={name} />
        </figure>
        <div className="content">
          <p className="name">{name} </p>
          <p className="price number">{priceOn}ت</p>
        </div>
      </div>
      <div className="wish-list-btns">
        <button
          className="add-to-cart"
          onClick={() => {
            disPatch(addProduct({ info: product, amount: 1 }));
            disPatch(removeItemWishList(id));
          }}
        >
          <span className="extra"> افزودن به سبد</span>
          <FiShoppingCart className="add-to-cart-icon" />
        </button>
        <Link className="more-info" to={`/products/${id.split(".")[0]}`}>
          <span className="extra">جزئیات</span> مشاهده
        </Link>
      </div>
    </div>
  );
};

export default WishListItem;
