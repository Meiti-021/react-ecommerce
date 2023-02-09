import { configureStore } from "@reduxjs/toolkit";
import ShopCartSlice from "./features/ShopCartSlice";
export const store = configureStore({
  reducer: {
    cart: ShopCartSlice.reducer,
  },
});
