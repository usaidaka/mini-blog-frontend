import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const CATEGORY = "/blog/allCategory";

export const fetchCategory = createAsyncThunk(
  "posts/categoryPosts",
  async () => {
    try {
      const response = await axios.get(CATEGORY);
      return response.data;
    } catch (error) {
      console.log("Error di postSlice", error);
    }
  }
);

const initialState = {
  category: [],
  loading: true,
  error: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default categorySlice.reducer;
