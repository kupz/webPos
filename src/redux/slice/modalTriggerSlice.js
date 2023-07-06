import { createSlice } from "@reduxjs/toolkit";

const modalTriggerSlice = createSlice({
  name: "modal",
  initialState: { addProduct: false },
  reducers: {
    toggleProductModal: (state) => {
      state.addProduct = !state.addProduct;
    },

    // Define other actions and reducers here
  },
});

// Export actions and reducer from otherReducerSlice

export const { toggleProductModal } = modalTriggerSlice.actions;

export default modalTriggerSlice.reducer;
