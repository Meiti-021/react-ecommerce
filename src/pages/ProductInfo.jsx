import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import StarRating from "../components/StarRating";
import {
  BsFillCheckCircleFill,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  FiShoppingCart,
  RiHeart3Line,
} from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import { addToWishList, addProduct } from "../stats/features/ShopCartSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductInfo = () => {
  const { productList } = useSelector((state) => state.cart);
  const disPatch = useDispatch();
  const ProductId = useParams();
  const [product, setProduct] = useState(AllProducts[0]);
  const [productAmount, setProductAmount] = useState(1);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    const mainProduct = AllProducts.find((item) => {
      const oldid = item.id.split(".")[0];
      return oldid === ProductId.id;
    });
    const productInShopCart = productList.findIndex((item) => {
      return item.info.id === mainProduct.id;
    });
    if (productInShopCart > -1) {
      setProductAmount(productList[productInShopCart].amount);
    }
    setProduct(mainProduct);
    setRate(mainProduct.rate);
  }, []);
  return (
    <div className="product-info">
      <p className="page-address ">
        خانه /
        {`${
          product.categories[0] === "Mobile"
            ? " موبایل "
            : product.categories[0] === "Wireless Headphones" ||
              product.categories[0] === "Headphones"
            ? " هدفون "
            : void 0
        }/ ${product.name}`}
      </p>
      <div className="product-info__intro">
        <figure>
          <img src={`../assets/products/${product.id}`} alt={product.name} />
        </figure>
        <div className="product-info___intro-content">
          <h1>{product.name}</h1>
          <p className="product-info__existence">
            {product.exist ? "موجود" : "ناموجود"}
            <BsFillCheckCircleFill />
          </p>
          <ul>
            {product.features.map((item) => {
              return (
                <li key={`${Math.random() * 10000000}`}>
                  {item.title} : {item.content}
                </li>
              );
            })}
          </ul>
          <div className="product-info__price">
            {product.priceOff ? (
              <p>
                <span className="product-info__price-off">
                  {product.priceOn}ت
                </span>
                <span className="product-info__price-on">
                  {product.priceOff}ت
                </span>
              </p>
            ) : (
              <p>
                <span className="product-info__price-off">
                  {product.priceOn}ت
                </span>
              </p>
            )}
            <div>
              <StarRating rate={rate} />
              <span className="product-reviews">({product.reviews})</span>
            </div>
          </div>

          <div className="product-info__buy-cart">
            <div className="counter">
              <button
                onClick={() => {
                  setProductAmount(productAmount + 1);
                }}
              >
                +
              </button>
              {productAmount}
              <button
                onClick={() => {
                  if (productAmount > 1) {
                    setProductAmount(productAmount + 1);
                  }
                }}
              >
                -
              </button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => {
                disPatch(addProduct({ info: product, amount: productAmount }));
              }}
            >
              افزودن به سبد
              <FiShoppingCart className="add-to-cart-icon" />
            </button>
            <button
              className="add-to-wish-list"
              onClick={() => {
                disPatch(addToWishList(product.id));
              }}
            >
              افزودن به علاقه مندی ها
              <RiHeart3Line className="add-to-cart-icon" />
            </button>
          </div>
          <p className="product-info__categories">
            دسته :
            {`${
              product.categories[0] === "Mobile"
                ? " موبایل "
                : product.categories[0] === "Wireless Headphones" ||
                  product.categories[0] === "Headphones"
                ? " هدفون "
                : void 0
            }`}
          </p>
          <ul className="social-media-links">
            <li>
              <BsTelegram />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsGithub />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
