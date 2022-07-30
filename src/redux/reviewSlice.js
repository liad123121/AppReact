import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: {
    reviews: [],
  },
  reducers: {
    setReviews(state, action) {
      state.reviews = action.payload.reviews;
    },
    addReview(state, action) {
      state.reviews.push(action.payload.review);
    },
  },
});

export const reviewSliceReducer = reviewSlice.reducer;
export const reviewSliceAction = reviewSlice.actions;
