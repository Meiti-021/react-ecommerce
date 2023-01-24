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
          return a.reviews > b.reviews;
        })
        .slice(0, 3);
      state.products = topSellers;
    },
    setNews: (state) => {
      const sortedArray = AllProducts.sort((a, b) => {
        return a.date < b.date;
      }).slice(0, 3);
      state.products = sortedArray;
    },
    setBestOffers: (state) => {
      const newArray = AllProducts.sort((a, b) => {
        return a.priceOn - a.priceOff > b.priceOn - b.priceOff;
      });
      state.products = newArray;
    },
  },
});

export const { setPopular, setNews, setBestOffers } = BestProductsSlice.actions;

export default BestProductsSlice.reducer;
