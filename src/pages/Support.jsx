import React from "react";
import Faq from "../components/Faq";
import { faq } from "../database/mockdata";
const Support = () => {
  return (
    <div className="support">
      <div className="support-container">
        <h1>به صفحه پشتیبانی شاپیفای خوش آمدید</h1>
        <p>
          ما در اینجا هستیم تا به هر سوال یا مشکلی که درباره پلتفرم ما دارید،
          کمک کنیم. ما سعی داریم به شما تجربه خرید آنلاین بهترین را ارائه دهیم و
          می‌خواهیم اطمینان حاصل کنیم که شما به طور کامل با خرید خود راضی هستید.
        </p>
        <div className="faq-container">
          {faq.map((item) => {
            return <Faq {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;
