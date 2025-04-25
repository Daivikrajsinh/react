import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// thunk is a middleware where handle asynchronous and synchronous operations
export const fetchProducts = createAsyncThunk("fetchProductData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const initialState = {
  product: [],
  error: "",
};

export const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    // synchronous code ko handle krne k liyae
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.product = []
    },
  },
  extraReducers: (builder) => {
    // asyncronous code ko handle krne k liaye
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = [...action.payload];
      
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      // Add error handling here
      state.error = "fetched failed ";
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions;

export default productSlice.reducer;