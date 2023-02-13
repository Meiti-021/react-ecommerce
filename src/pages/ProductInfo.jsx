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
  RiHeart3Fill,
} from "../database/icons";
import { AllProducts } from "../database/productsDatabase";
import {
  addToWishList,
  addProduct,
  removeItemWishList,
  addAmount,
  lessAmount,
} from "../stats/features/ShopCartSlice";
import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";
const ProductInfo = () => {
  const { productList, wishList } = useSelector((state) => state.cart);
  const disPatch = useDispatch();
  const ProductId = useParams();
  const [product, setProduct] = useState(AllProducts[0]);
  const [productAmount, setProductAmount] = useState(1);
  const [rate, setRate] = useState(0);
  const [isInWishList, setIsInWishList] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
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
      setIsInCart(true);
    }

    setProduct(mainProduct);
    setRate(mainProduct.rate);
  }, []);
  useEffect(() => {
    const mainProduct = AllProducts.find((item) => {
      const oldid = item.id.split(".")[0];
      return oldid === ProductId.id;
    });
    const productInWishList = wishList.findIndex((item) => {
      return item.id === mainProduct.id;
    });
    if (productInWishList > -1) {
      setIsInWishList(true);
    }
  }, [isInWishList]);
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
                  if (isInCart) {
                    setProductAmount(productAmount + 1);
                    disPatch(addAmount(product.id));
                  } else {
                    setProductAmount(productAmount + 1);
                  }
                }}
              >
                +
              </button>
              {productAmount}
              <button
                onClick={() => {
                  if (isInCart) {
                    if (productAmount > 1) {
                      setProductAmount(productAmount - 1);
                      disPatch(lessAmount(product.id));
                    }
                  } else {
                    if (productAmount > 1) {
                      setProductAmount(productAmount + 1);
                    }
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
                if (isInWishList) {
                  disPatch(removeItemWishList(product.id));
                  setIsInWishList(false);
                } else {
                  disPatch(addToWishList(product.id));
                  setIsInWishList(true);
                }
              }}
            >
              افزودن به علاقه مندی ها
              {isInWishList ? (
                <RiHeart3Fill className="add-to-cart-icon" />
              ) : (
                <RiHeart3Line className="add-to-cart-icon" />
              )}
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
