import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const AUTH_ACCESS = "/blog/pagFav";

export const pagFav = createAsyncThunk("posts/pagFav", async () => {
  try {
    const response = await axios.get(AUTH_ACCESS);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  pagFav: [],
  loading: true,
  error: false,
};

export const favSlice = createSlice({
  name: "pagFav",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pagFav.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(pagFav.fulfilled, (state, action) => {
        state.loading = false;
        state.pagFav = action.payload;
      })
      .addCase(pagFav.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export default favSlice.reducer;
