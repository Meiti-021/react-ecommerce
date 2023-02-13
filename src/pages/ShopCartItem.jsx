import React from "react";
import { useDispatch } from "react-redux";
import {
  IoCloseCircle,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "../database/icons";

import {
  addAmount,
  lessAmount,
  removeItemProducts,
} from "../stats/features/ShopCartSlice";
const ShopCartItem = ({ info, amount }) => {
  const disPatch = useDispatch();
  return (
    <div className="shop-cart-item">
      <button
        className="remove-item"
        onClick={() => {
          disPatch(removeItemProducts(info.id));
        }}
      >
        <IoCloseCircle />
      </button>
      <div className="info">
        <figure>
          <img src={`./assets/products/${info.id}`} alt={info.name} />
        </figure>
        <div className="content">
          <p className="name">{info.name} </p>
          <p className="price">{info.priceOn}ت</p>
        </div>
      </div>
      <div className="counter-section">
        <button
          className="shop-item-counter"
          onClick={() => {
            disPatch(addAmount(info.id));
          }}
        >
          <BsFillCaretUpFill />
        </button>
        <p>{amount}</p>
        <button
          className="shop-item-counter"
          onClick={() => {
            disPatch(lessAmount(info.id));
          }}
        >
          <BsFillCaretDownFill />
        </button>
      </div>
    </div>
  );
};

export default ShopCartItem;
