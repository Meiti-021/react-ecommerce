import React from "react";
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
const ProductInfo = () => {
  return (
    <div className="product-info">
      <p className="page-address ">خانه / موبایل / موبایل شیائومی</p>
      <div className="product-info__intro">
        <figure>
          <img src="./assets/products/d65995.jpg" alt="" />
        </figure>
        <div className="product-info___intro-content">
          <h1>هدفون شیائومی مدل ۱More Design Piston Fit</h1>
          <p className="product-info__existence">
            موجود
            <BsFillCheckCircleFill />
          </p>
          <ul>
            <li>ابعاد: 45 * 52 اینچ</li>
            <li>ابعاد: 45 * 52 اینچ</li>
            <li>ابعاد: 45 * 52 اینچ</li>
          </ul>
          <div className="product-info__price">
            <p>
              <span className="product-info__price-off">12500000ت</span>
              <span className="product-info__price-on"> 13000000ت</span>
            </p>
            <div>
              <StarRating rate={4.5} />
              <span className="product-reviews">(145)</span>
            </div>
          </div>

          <div className="product-info__buy-cart">
            <div className="counter">
              <button>+</button>1<button>-</button>
            </div>
            <button className="add-to-cart">
              افزودن به سبد
              <FiShoppingCart className="add-to-cart-icon" />
            </button>
            <button className="add-to-wish-list">
              افزودن به علاقه مندی ها
              <RiHeart3Line className="add-to-cart-icon" />
            </button>
          </div>
          <p className="product-info__categories"> دسته : موبایل ها</p>
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
