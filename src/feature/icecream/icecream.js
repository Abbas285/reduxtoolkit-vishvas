import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "./../cake/cakeSlice";
const initialState = {
  numberoficreem: 15,
};
const icecreamslice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordericecream: (state, action) => {
      state.numberoficreem -= action.payload;
    },
    refellicream: (state, action) => {
      state.numberoficreem += action.payload;
    },
  },
  // if on one reducer faction call then call another reducer action call
  extraReducers: (builder) => {
    builder.addCase(ordered, (state) => {
      state.numberoficreem--;
    });
  },
});

export default icecreamslice.reducer;

export const { ordericecream, refellicream } = icecreamslice.actions;
