import { configureStore } from "@reduxjs/toolkit";
import BestProductsSlice from "./features/BestSellersSlice";

export const store = configureStore({
  reducer: {
    bests: BestProductsSlice,
  },
});
