import React, { useState, useEffect } from "react";
import { FiShoppingCart, RiHeart3Line } from "../database/icons";
import { addProduct, addToWishList } from "../stats/features/ShopCartSlice";
import { useDispatch } from "react-redux";
import { AllProducts } from "../database/productsDatabase";

const LastDealerProduct = ({ id, name }) => {
  const disPatch = useDispatch();
  const [product, setProduct] = useState(AllProducts[0]);
  useEffect(() => {
    const mainProduct = AllProducts.find((item) => {
      return item.id === id;
    });
    setProduct(mainProduct);
  }, []);
  return (
    <article className="last-dealer-product">
      <figure className="last-dealer-product__figure">
        <img src={`./assets/products/${id}`} alt="" />
      </figure>
      <p className="last-dealer-product__title">{name}</p>
      <div className="last-dealer-product__btns">
        <button
          className="last-dealer-product-btn"
          onClick={() => {
            disPatch(addProduct({ info: product, amount: 1 }));
          }}
        >
          <FiShoppingCart />
        </button>
        <button
          className="last-dealer-product-btn"
          onClick={() => {
            disPatch(addToWishList(id));
          }}
        >
          <RiHeart3Line />
        </button>
      </div>
    </article>
  );
};

export default LastDealerProduct;
