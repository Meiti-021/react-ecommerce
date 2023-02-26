import React from "react";
import gif from "../assets/404.gif";

const Page404 = () => {
  return (
    <div className="page-404">
      <img src={gif} alt="" />
      <h1>404</h1>
      <h3> خطایی رخ داد! صفحه ای که به دنبالش هستید موجود نمیباشد!</h3>
    </div>
  );
};

export default Page404;
