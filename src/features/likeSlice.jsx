import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const LIKE_POST = "/blog/like";

export const likePost = createAsyncThunk("posts/like", async (BlogId) => {
  try {
    const response = await axios.post(
      LIKE_POST,
      { BlogId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
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

export const likePostSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false;
        state.like = action.payload;
      })
      .addCase(likePost.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export default likePostSlice.reducer;
