import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const LIKE_BLOG = "/blog/byUser";

export const likeBlog = createAsyncThunk("posts/likeBlog", async () => {
  try {
    const response = await axios.get(LIKE_BLOG, {
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
  likeBlog: [],
  loading: true,
  error: false,
};

export const likeBlogSlice = createSlice({
  name: "like blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likeBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(likeBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.likeBlog = action.payload;
      })
      .addCase(likeBlog.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export default likeBlogSlice.reducer;
