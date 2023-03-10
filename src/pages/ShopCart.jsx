import React, { useEffect, useState, useRef } from "react";
import ShopCartItem from "./ShopcartItem";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ProductNotFound from "../components/ProductNotFound";
import { submition } from "../stats/features/ShopCartSlice";
import { setAlert } from "../stats/features/UserSlice";
const Shopcart = () => {
  const disPatch = useDispatch();
  const { productList } = useSelector((state) => state.cart);
  const { isLogin } = useSelector((state) => state.user);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    let total = 0;
    productList.forEach((element) => {
      total += element.amount * element.info.priceOn;
    });
    setTotalPrice(total);
  }, [productList]);
  useEffect(() => {
    if (isModalOpen) {
      window.scrollTo(0, modalRef.current.getBoundingClientRect().top);
    }
  }, [isModalOpen]);
  return (
    <div className="shop-cart">
      <div
        className="shop-cart-modal-container"
        style={isModalOpen ? { display: "flex" } : { display: "none" }}
      >
        <div className="shop-cart-modal" ref={modalRef}>
          <p>آیا از ثبت سفارش مطمئن هستید؟</p>
          <div>
            <button
              className="yes"
              onClick={() => {
                if (isLogin) {
                  disPatch(submition());
                  setIsModalOpen(false);
                } else {
                  setIsModalOpen(false);
                  disPatch(
                    setAlert({
                      id: "navprofile",
                      message: "ابتدا باید وارد حسابتان شوید!",
                    })
                  );
                }
              }}
            >
              بله
            </button>
            <button
              className="no"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              خیر
            </button>
          </div>
        </div>
      </div>
      <div className="shop-cart-container">
        <h1>سبد خرید شما</h1>
        <div className="shop-cart-products">
          {productList.length ? (
            productList.map((item) => {
              return <ShopCartItem {...item} key={item.info.id} />;
            })
          ) : (
            <ProductNotFound />
          )}
        </div>
        <div className="shop-cart-total-price">
          <p className="number">مجموع: {totalPrice} تومان</p>
          <button
            className="add-to-cart"
            onClick={() => {
              if (productList.length !== 0) {
                setIsModalOpen(true);
              } else {
                disPatch(
                  setAlert({ id: "navcart", message: "سبد خرید شما خالی است!" })
                );
              }
            }}
          >
            ثبت سفارش
            <FiShoppingCart className="add-to-cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopcart;
