import React from "react";

const NewslettersSignUp = () => {
  return (
    <div className="newsletters-signup">
      <div className="newsletters-signup__info">
        <p className="newsletters-signup__title">عضویت در خبرنامه وبسایت</p>
        <p className="newsletters-signup__description">
          از طریق ایمیل شما را در جریان بروزترین معاملات و{" "}
          <span>تخفیفات ویژه</span> قرار میدهیم.
        </p>
      </div>
      <div className="newsletters-signup__form">
        <input type="email" placeholder="آدرس ایمیل شما" />
        <button>ثبت</button>
      </div>
    </div>
  );
};

export default NewslettersSignUp;
