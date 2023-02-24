import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillLockFill,
} from "../database/icons";
import { signup } from "../stats/features/UserSlice";
const SignInForm = ({ setLoginForm }) => {
  const disPatch = useDispatch();
  const { email } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    family: "",
    email: "",
    password: "",
  });
  const FormSubmit = (e) => {
    if (formData.email !== email) {
      disPatch(signup(formData));
    }
  };
  const formHandler = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <form
      action="#"
      className="login-form"
      onSubmit={(e) => {
        FormSubmit(e);
      }}
    >
      <div className="input-group">
        <label htmlFor="name">
          <BsFillPersonFill />
        </label>
        <input
          type="text"
          id="name"
          placeholder="نام"
          required
          value={formData.name}
          onChange={(event) => {
            formHandler(event);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="family">
          <BsFillPersonFill />
        </label>
        <input
          type="text"
          id="family"
          placeholder="نام خانوادگی"
          required
          value={formData.family}
          onChange={() => {
            formHandler(event);
          }}
        />
      </div>
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
          onChange={() => {
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
          onChange={() => {
            formHandler(event);
          }}
        />
      </div>
      <div className="input-group-check">
        <label htmlFor="privacy">
          من <span> قوانین و سیاست های وبسایت</span> را مطالعه کرده و با آن
          موافقم
        </label>
        <input type="checkbox" id="privacy" required />
      </div>
      <div className="input-group-check">
        <label htmlFor="remember">مرا بخاطر بسپار</label>
        <input type="checkbox" id="remember" />
      </div>
      <button className="login-submit" type="submit">
        ایجاد حساب
      </button>
      <p className="login-intro">
        آیا هم اکنون حسابی دارید؟
        <span
          onClick={() => {
            setLoginForm(true);
          }}
        >
          وارد شوید.
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
