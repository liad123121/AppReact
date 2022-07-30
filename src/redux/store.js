import { configureStore } from "@reduxjs/toolkit";
import { reviewSliceReducer } from "./reviewSlice";

const store = configureStore({
  reducer: { reviewSliceReducer },
});

export default store;
