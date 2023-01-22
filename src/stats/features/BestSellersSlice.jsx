import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: ["hello world"],
};

const BestProductsSlice = createSlice({
  name: "bests",
  initialState,
});

export default BestProductsSlice.reducer;
