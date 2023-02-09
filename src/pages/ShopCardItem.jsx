import React from "react";

const ShopCardItem = () => {
  return (
    <div className="shop-card-item">
      <div className="info">
        <figure>
          <img src="./assets/products/d65995.jpg" alt="" />
        </figure>
        <div className="content">
          <p className="name">هدفون شیائومی مدل ۱More Design Piston Fit</p>
          <p className="price">280000ت</p>
        </div>
      </div>
      <div className="counter-section">
        <button className="shop-item-counter">-</button>
        <p>2</p>
        <button className="shop-item-counter">-</button>
      </div>
    </div>
  );
};

export default ShopCardItem;
