import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const GET_POSTS_BLOG = "/blog";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (page = 1) => {
    try {
      const response = await axios.get(`${GET_POSTS_BLOG}?page=${page}`);
      return response.data;
    } catch (error) {
      console.log("Error di postSlice", error);
    }
  }
);

const initialState = {
  posts: [],
  loading: true,
  error: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default postsSlice.reducer;
