import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
    increment: (state) => {
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = [...action.payload];
      
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = "fetched failed ";
    });
  },
});

export const { increment } = productSlice.actions;

export default productSlice.reducer;
