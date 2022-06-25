import { createSlice } from "@reduxjs/toolkit";
import { ordericecream } from "../icecream/icecream";

const initialState = {
  numberofCakes: 10,
};
//create slice automatically create actions
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    //bydefault immer use in redux toolkit
    ordered: (state) => {
      state.numberofCakes--;
    },
    restocked: (state, action) => {
      state.numberofCakes += action.payload;
    },
  },
  //another best approch for accessing reducer action
  extraReducers: (builder) => {
    builder.addCase(ordericecream, (state) => {
      state.numberofCakes += 3;
    });
  },
});

export default cakeSlice.reducer;

export const { ordered, restocked } = cakeSlice.actions;
