import React from "react";

import { useSelector } from "react-redux";
import ProductNotFound from "../components/ProductNotFound";
import WishListItem from "../components/WishListItem";
const WishList = () => {
  const { wishList } = useSelector((state) => state.cart);
  return (
    <div className="shop-cart">
      <h1>موردعلاقه ها</h1>
      <div className="shop-cart-products">
        {wishList.length ? (
          wishList.map((item) => {
            return <WishListItem {...item} key={item.id} />;
          })
        ) : (
          <ProductNotFound />
        )}
      </div>
    </div>
  );
};

export default WishList;
