import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "../../database/productsDatabase";
import moment from "moment/moment";

const initialState = {
  productList: [],
  wishList: [],
  history: [],
};

const ShopCartSlice = createSlice({
  name: "ShopCart",
  initialState,
  reducers: {
    addAmount: (state, { payload }) => {
      const productInShopCart = state.productList.findIndex((item) => {
        return item.info.id === payload;
      });
      if (productInShopCart > -1) {
        state.productList[productInShopCart].amount++;
      }
    },
    lessAmount: (state, { payload }) => {
      const productInShopCart = state.productList.findIndex((item) => {
        return item.info.id === payload;
      });
      if (productInShopCart > -1) {
        if (state.productList[productInShopCart].amount > 1) {
          state.productList[productInShopCart].amount--;
        }
      }
    },
    addProduct: (state, { payload }) => {
      const isExist = state.productList.some((item) => {
        return item.info.id === payload.info.id;
      });
      if (!isExist) {
        state.productList.push(payload);
      }
    },
    addToWishList: (state, { payload }) => {
      const product = AllProducts.findIndex((item) => {
        return item.id === payload;
      });
      const isExist = state.wishList.some((item) => {
        return item.id === payload;
      });
      if (!isExist) {
        state.wishList.push(AllProducts[product]);
      }
    },
    removeItemProducts: (state, { payload }) => {
      const productIdex = state.productList.findIndex((item) => {
        return item.info.id === payload;
      });
      state.productList.splice(productIdex, 1);
    },
    removeItemWishList: (state, { payload }) => {
      const productIdex = state.wishList.findIndex((item) => {
        return item.id === payload;
      });
      state.wishList.splice(productIdex, 1);
    },
    cleanWishList: (state) => {
      state.wishList = [];
    },
    submition: (state) => {
      state.history.push({
        historyItem: state.productList,
        date: `${moment().format()}`,
      });
      state.productList = [];
    },
    backToInitial: (state) => {
      state.productList = [];
      state.wishList = [];
      state.history = [];
    },
  },
});

export const {
  addAmount,
  addProduct,
  addToWishList,
  lessAmount,
  removeItemProducts,
  removeItemWishList,
  cleanWishList,
  submition,
  backToInitial,
} = ShopCartSlice.actions;

export default ShopCartSlice.reducer;
