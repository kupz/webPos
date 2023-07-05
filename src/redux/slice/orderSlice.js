import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return [action.payload, ...state];
    },
    removeOrder: (state, action) => {
      return state + action.payload;
    },
    updateOrder: (state, action) => {
      return state + action.payload;
    },

    // Define other actions and reducers here
  },
});

// Export actions and reducer from otherReducerSlice

export const { addOrder, removeOrder, updateOrder } = orderSlice.actions;

export default orderSlice.reducer;
