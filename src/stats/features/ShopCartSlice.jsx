import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "../../database/productsDatabase";

const initialState = {
  productList: [],
  wishList: [],
  total: 0,
};

const ShopCartSlice = createSlice({
  name: "ShopCart",
  initialState,
  reducers: {
    addAmount: (state, { payload }) => {
      console.log(state, payload);
    },
    addProduct: (state, payload) => {
      const isExist = state.productList.some((item) => {
        return item.id === payload;
      });
      const index = AllProducts.findIndex((item) => {
        return item.id === payload;
      });
      if (!isExist) {
        return (state.productList = [...state.productList, AllProducts[index]]);
      }
    },
  },
});

export const { addAmount, addProduct } = ShopCartSlice.actions;

export default ShopCartSlice.reducer;
