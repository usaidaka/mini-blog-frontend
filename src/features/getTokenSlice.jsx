import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: { token: "" },
  reducers: {
    keep: (state, action) => {
      state.token = action.payload;
    },
    remove: (state) => {
      state.token = "";
    },
  },
});

export const { keep, remove } = tokenSlice.actions;
export default tokenSlice.reducer;
