import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  total: 0,
};

const ShopCartSlice = createSlice({
  name: "ShopCart",
  initialState,
  reducers: {},
});

export default ShopCartSlice;
