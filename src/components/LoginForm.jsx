import React from "react";
import { useState } from "react";
import { BsFillEnvelopeFill, BsFillLockFill } from "../database/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../stats/features/UserSlice";

const LoginForm = ({ setLoginForm }) => {
  const disPatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const FormSubmit = (e) => {
    if (
      formData.email === userInfo.email &&
      formData.password === userInfo.password
    ) {
      disPatch(login());
    } else {
      alert("نام کاربری یا رمز عبور درست نیست");
    }
  };
  const formHandler = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <form
      action=""
      className="login-form"
      onSubmit={(e) => {
        FormSubmit(e);
      }}
    >
      <div className="input-group">
        <label htmlFor="email">
          <BsFillEnvelopeFill />
        </label>
        <input
          type="email"
          id="email"
          placeholder="ایمیل"
          required
          value={formData.email}
          onChange={(event) => {
            formHandler(event);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">
          <BsFillLockFill />
        </label>
        <input
          type="password"
          id="password"
          placeholder="رمز عبور"
          required
          value={formData.password}
          onChange={(event) => {
            formHandler(event);
          }}
        />
      </div>
      <div className="input-group-check">
        <label htmlFor="remember">مرا بخاطر بسپار</label>
        <input type="checkbox" id="remember" />
      </div>
      <button className="login-submit" type="submit">
        ورود به حساب
      </button>
      <p className="login-intro">
        آیا هم اکنون حسابی ندارید؟
        <span
          onClick={() => {
            setLoginForm(false);
          }}
        >
          حساب ایجاد کنید.
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
