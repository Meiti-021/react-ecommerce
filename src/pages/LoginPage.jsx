import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import SignInForm from "../components/SignInForm";
import { FaShopify } from "../database/icons";
import Account from "./Account";
const LoginPage = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { isLogin } = useSelector((state) => state.user);
  if (isLogin) {
    return <Account />;
  }
  return (
    <div className="login-page">
      <div className="design-side">
        <FaShopify className="login-page-icon" />
      </div>
      <div className="login-form-side">
        {loginForm ? (
          <LoginForm setLoginForm={setLoginForm} />
        ) : (
          <SignInForm setLoginForm={setLoginForm} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
