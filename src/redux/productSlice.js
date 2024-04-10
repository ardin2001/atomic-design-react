import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    receiveProduct(state, action) {
      return state.concat(action.payload);
    },
  },
});

export default productSlice;
