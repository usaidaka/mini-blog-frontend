import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const GET_LIKE = "/blog/pagLike";

export const getLike = createAsyncThunk("posts/likes", async () => {
  try {
    const response = await axios.get(GET_LIKE, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  like: [],
  loading: true,
  error: false,
};

export const getLikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLike.fulfilled, (state, action) => {
        state.loading = false;
        state.like = action.payload;
      })
      .addCase(getLike.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export default getLikeSlice.reducer;
