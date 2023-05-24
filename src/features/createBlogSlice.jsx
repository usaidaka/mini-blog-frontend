import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const CREATE_BLOG = "/blog";
export const createBlog = createAsyncThunk(
  "createBlog/post",
  async ({ title, content, country, CategoryId, url, keywords }) => {
    try {
      const response = axios.post(CREATE_BLOG, {
        title,
        content,
        country,
        CategoryId,
        url,
        keywords,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const createBlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createBlog.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
