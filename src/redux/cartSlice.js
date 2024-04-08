import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    addCarts(state, action) {
      const single_data = state.find((e) => e.id == action.payload.id);
      if (single_data) {
        single_data.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    deleteCarts(state, action) {
      let result = [];
      state.forEach((data) => {
        if (data.id == action.payload.id) {
          if (data.qty > 1) {
            result.push({ ...data, qty: data.qty-1 });
          }
        }else {
          result.push(data);
        }
      });
      return result;
    },
    deleteAllCarts(state, action) {
      console.log('masuk')
      return state.filter((data) => data.id != action.payload.id);
    },
  },
});

export default cartSlice;
