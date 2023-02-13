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
      void 0;
    },
    addProduct: (state, { payload }) => {
      const product = AllProducts.findIndex((item) => {
        return item.id === payload.id;
      });
      const isExist = state.productList.some((item) => {
        return item.id === payload.id;
      });
      if (!isExist) {
        state.productList.push(AllProducts[product]);
      }
    },
    addToWishList: (state, { payload }) => {
      const product = AllProducts.findIndex((item) => {
        return item.id === payload;
      });
      const isExist = state.wishList.some((item) => {
        return item.id === payload.id;
      });
      if (!isExist) {
        state.wishList.push(AllProducts[product]);
      }
    },
    updateData: (state) => {
      const updateProductList = [];
      state.productList.forEach((element) => {
        const index = AllProducts.findIndex((item) => {
          return item.id === element.id;
        });
        updateProductList.push(AllProducts[index]);
      });
      state.productList = updateProductList;
    },
  },
});

export const { addAmount, addProduct, addToWishList, updateData } =
  ShopCartSlice.actions;

export default ShopCartSlice.reducer;
