import React from "react";
import { useDispatch } from "react-redux";
import {
  IoCloseCircle,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "../database/icons";
import { addAmount } from "../stats/features/ShopCartSlice";
const ShopCartItem = ({ name, id, priceOn, amount }) => {
  const disPatch = useDispatch();
  return (
    <div className="shop-cart-item">
      <button className="remove-item">
        <IoCloseCircle />
      </button>
      <div className="info">
        <figure>
          <img src={`./assets/products/${id}`} alt="" />
        </figure>
        <div className="content">
          <p className="name">{name} </p>
          <p className="price">{priceOn}ت</p>
        </div>
      </div>
      <div className="counter-section">
        <button
          className="shop-item-counter"
          onClick={() => {
            disPatch(addAmount(id));
          }}
        >
          <BsFillCaretUpFill />
        </button>
        <p>{amount}</p>
        <button className="shop-item-counter">
          <BsFillCaretDownFill />
        </button>
      </div>
    </div>
  );
};

export default ShopCartItem;
