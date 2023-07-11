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
      const updated = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      return updated;
    },
    updateOrderDecrement: (state, action) => {
      const updated = state.map((item) => {
        if (item.id === action.payload) {
          if (item.qty > 0) {
            return { ...item, qty: item.qty - 1 };
          }
        }
        return item;
      });

      return updated;
    },
    updateOrderCustom: (state, action) => {
      const updated = state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.qty > 0) {
            return { ...item, qty: action.payload.qty };
          }
        }
        return item;
      });

      return updated;
    },

    // Define other actions and reducers here
  },
});

// Export actions and reducer from otherReducerSlice

export const {
  addOrder,
  removeOrder,
  updateOrder,
  updateOrderDecrement,
  updateOrderCustom,
} = orderSlice.actions;

export default orderSlice.reducer;
