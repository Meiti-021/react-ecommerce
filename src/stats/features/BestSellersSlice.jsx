import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "../../database/productsDatabase";
const initialState = {
  products: [],
};

const BestProductsSlice = createSlice({
  name: "bests",
  initialState,
  reducers: {
    setPopular: (state) => {
      const topRatedItems = AllProducts.filter((item) => {
        return item.rate > 4;
      });
      const topSellers = topRatedItems
        .sort((a, b) => {
          a.reviews > b.reviews;
        })
        .slice(0, 3);
      state.products = topSellers;
    },
  },
});

export const { setPopular } = BestProductsSlice.actions;

export default BestProductsSlice.reducer;
