import { configureStore } from "@reduxjs/toolkit";
import ShopCartSlice from "./features/ShopCartSlice";
import UserSlice from "./features/UserSlice";
export const store = configureStore({
  reducer: {
    cart: ShopCartSlice,
    user: UserSlice,
  },
});
