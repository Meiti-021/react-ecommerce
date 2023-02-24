import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BankCard from "../components/BankCard";
import ShopHistory from "../components/ShopHistory";
import {
  BiEdit,
  BsInfoCircle,
  TbPremiumRights,
  MdCancelScheduleSend,
  BiLogOut,
  FaHistory,
  BsFillCreditCardFill,
  FiSettings,
  AiFillDelete,
} from "../database/icons";
import {
  signup,
  goPremium,
  cancelNewsletter,
  logout,
  deleteAccount,
} from "../stats/features/UserSlice";
import { backToInitial } from "../stats/features/ShopCartSlice";
const Account = () => {
  const { userInfo, address } = useSelector((state) => state.user);
  const { history, productList } = useSelector((state) => state.cart);
  const disPatch = useDispatch();
  const [readOnlyInput, setREadOnlyInput] = useState({
    name: true,
    family: true,
    password: true,
    email: true,
  });
  const [formData, setFormData] = useState({
    name: `${userInfo.name}`,
    family: `${userInfo.family}`,
    email: `${userInfo.email}`,
    password: `${userInfo.password}`,
  });
  const formHandler = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <div className="account">
      <div className="account__info">
        <h2>
          <BsInfoCircle /> مشخصات من
        </h2>
        <div className="input-group">
          <label htmlFor="name">نام</label>
          <input
            type="text"
            name="account-name"
            id="name"
            value={formData.name}
            readOnly={readOnlyInput.name ? true : false}
            onChange={(event) => {
              formHandler(event);
            }}
            onBlur={() => {
              setREadOnlyInput({ ...readOnlyInput, name: true });
            }}
            required
          />
          <button
            className="account-edit-icon"
            onClick={() => {
              setREadOnlyInput({ ...readOnlyInput, name: false });
            }}
          >
            <BiEdit />
          </button>
        </div>
        <div className="input-group">
          <label htmlFor="family">نام خانوادگی</label>
          <input
            type="text"
            name="account-family"
            id="family"
            value={formData.family}
            readOnly={readOnlyInput.family ? true : false}
            onChange={(event) => {
              formHandler(event);
            }}
            onBlur={() => {
              setREadOnlyInput({ ...readOnlyInput, family: true });
            }}
            required
          />
          <button
            className="account-edit-icon"
            onClick={() => {
              setREadOnlyInput({ ...readOnlyInput, family: false });
            }}
          >
            <BiEdit />
          </button>
        </div>
        <div className="input-group">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            name="account-email"
            id="email"
            readOnly={readOnlyInput.email ? true : false}
            onChange={(event) => {
              formHandler(event);
            }}
            onBlur={() => {
              setREadOnlyInput({ ...readOnlyInput, email: true });
            }}
            value={formData.email}
            required
          />
          <button
            className="account-edit-icon"
            onClick={() => {
              setREadOnlyInput({ ...readOnlyInput, email: false });
            }}
          >
            <BiEdit />
          </button>
        </div>
        <div className="input-group" readOnly>
          <label htmlFor="password">رمز</label>
          <input
            type="text"
            name="account-password"
            id="password"
            value={formData.password}
            readOnly={readOnlyInput.password ? true : false}
            onChange={(event) => {
              formHandler(event);
            }}
            onBlur={() => {
              setREadOnlyInput({ ...readOnlyInput, password: true });
            }}
            required
          />
          <button
            className="account-edit-icon"
            onClick={() => {
              setREadOnlyInput({ ...readOnlyInput, password: false });
            }}
          >
            <BiEdit />
          </button>
        </div>
        <textarea
          name="account-address"
          id="address"
          cols="30"
          rows="10"
          defaultValue={address}
          placeholder="آدرس: "
        ></textarea>
      </div>
      <div className="account__history">
        <h2>
          <FaHistory /> تراکنش های اخیر
        </h2>

        <div className="account__history-data">
          <table className="account__history-table">
            <thead>
              <tr>
                <th>ترتیب</th>
                <th>مجموع </th>
                <th>وضعیت</th>
                <th>تاریخ</th>
              </tr>
            </thead>
            {history.slice(0, 5).map((item, index) => {
              return <ShopHistory sort={index + 1} {...item} />;
            })}
          </table>
        </div>
      </div>
      <div className="account__card">
        <h2>
          <BsFillCreditCardFill /> اطلاعات کارت بانکی:{" "}
        </h2>
        <div className="account__card-btns"></div>
        <div className="account__card-cards">
          <BankCard />
        </div>
      </div>
      <div className="account__security">
        <h2>
          <FiSettings /> تنظیمات حساب
        </h2>
        <div className="account_setting-btns">
          <button
            onClick={() => {
              disPatch(logout());
            }}
          >
            <BiLogOut /> خروج از حساب
          </button>
          <button
            onClick={() => {
              disPatch(deleteAccount());
              disPatch(backToInitial());
            }}
          >
            <AiFillDelete /> حذف حساب
          </button>
          <button
            onClick={() => {
              disPatch(goPremium());
            }}
          >
            <TbPremiumRights /> ارتقا به پرمیوم
          </button>
          <button
            onClick={() => {
              disPatch(cancelNewsletter());
            }}
          >
            <MdCancelScheduleSend /> لغو عضویت در خبرنامه
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
