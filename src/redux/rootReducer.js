import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import orderReducer from "./slice/orderSlice";
import modalReducer from "./slice/modalTriggerSlice";

const rootReducer = combineReducers({
  products: productReducer,
  orders: orderReducer,
  modal: modalReducer,
});

export default rootReducer;
