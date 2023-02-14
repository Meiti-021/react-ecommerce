import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { cleanWishList } from "../stats/features/ShopCartSlice";
import ProductNotFound from "../components/ProductNotFound";
import WishListItem from "../components/WishListItem";
const WishList = () => {
  const { wishList } = useSelector((state) => state.cart);
  const disPatch = useDispatch();
  return (
    <div className="wish-list">
      <h1>موردعلاقه ها</h1>
      <div className="wish-list-products">
        {wishList.length ? (
          wishList.map((item) => {
            return <WishListItem {...item} key={item.id} />;
          })
        ) : (
          <ProductNotFound />
        )}
      </div>
      <div className="wish-list-clean-all">
        <button
          className="clean-wish-list"
          onClick={() => {
            disPatch(cleanWishList());
          }}
        >
          پاکسازی همه
        </button>
      </div>
    </div>
  );
};

export default WishList;
