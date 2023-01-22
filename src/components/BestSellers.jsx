import React from "react";

const BestSellers = () => {
  return (
    <div className="best-sellers">
      <h2 className="best-sellers__title">برترین ها</h2>
      <div className="best-sellers__headers">
        <button className="best-sellers__btn">محبوب ترین ها</button>
        <button className="best-sellers__btn">تازه ترین ها</button>
        <button className="best-sellers__btn">پرتخفیف ترین ها</button>
      </div>
      <div className="best-sellers__products"></div>
    </div>
  );
};

export default BestSellers;
