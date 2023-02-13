import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IoCloseCircle,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import { addAmount, updateData } from "../stats/features/ShopCartSlice";
const ShopCartItem = ({ name, id, priceOn, amount }) => {
  const disPatch = useDispatch();
  const [product, setProduct] = useState(AllProducts[0]);
  useEffect(() => {
    const mainProduct = AllProducts.find((item) => {
      const oldid = item.id.split(".")[0];
      return oldid === id;
    });
    setProduct(mainProduct);
  }, []);
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
            let productAmount = product.amount;
            if (productAmount >= 0) {
              productAmount++;
              const mainProductData = AllProducts.findIndex((item) => {
                return item.id === product.id;
              });
              AllProducts[mainProductData].amount = productAmount;
              setProduct({ ...product, amount: productAmount });
            }
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
