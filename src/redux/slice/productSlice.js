import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      let newProduct = action.payload;
      newProduct.id = state.length + 1;
      return [newProduct, ...state];
    },
    removeProduct: (state, action) => {
      const updatedProduct = state.filter((item) => {
        return item.id !== action.payload;
      });
      return updatedProduct;
    },
    updateProduct: (state, action) => {
      return state + action.payload;
    },

    // Define other actions and reducers here
  },
});

// Export actions and reducer from otherReducerSlice

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
