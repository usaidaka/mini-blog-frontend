import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const GET_POSTS_BLOG = "/blog";
const AUTH_ACCESS = "/auth";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(GET_POSTS_BLOG);
    return response.data;
  } catch (error) {
    console.log("Error di postSlice", error);
  }
});

export const accessAll = createAsyncThunk("posts/access", async () => {
  try {
    const response = await axios.get(AUTH_ACCESS, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
});

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
